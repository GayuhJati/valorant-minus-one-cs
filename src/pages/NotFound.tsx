import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f1923]">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-[#ff6f6f] tracking-widest">404</h1>
        <p className="mb-6 text-xl text-white font-semibold">Oops! Page not found</p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-[#232323] text-[#ff6f6f] font-bold tracking-wide shadow hover:bg-[#292929] transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
