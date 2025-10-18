import React from "react";
// import Layout from '@/components/Layout';

// Ganti ini dengan logic/props/selector sesuai kebutuhan aplikasi Anda
const useGroupAccess = () => {
  // Contoh: status akses user
  const hasJoinedGroup = false; // ganti dengan state/selector asli
  const isAccepted = false; // ganti dengan state/selector asli
  return { hasJoinedGroup, isAccepted };
};

const RequireGroupAccess: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { hasJoinedGroup, isAccepted } = useGroupAccess();
  const showOverlay = !hasJoinedGroup || !isAccepted;

  return (
    <div className="relative w-full h-full">
      {children}
      {showOverlay && (
        <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/30">
          <div className="bg-background/80 border border-border shadow-lg rounded-xl px-8 py-6 text-center">
            <h2 className="text-2xl font-bold text-primary mb-2">Belum join group atau kelompok</h2>
            <p className="text-base text-foreground/80 mb-4">Silakan join group/kelompok terlebih dahulu untuk mengakses halaman chat.</p>
            <a href="/board" className="inline-block px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/80 transition">Join Group</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequireGroupAccess;
