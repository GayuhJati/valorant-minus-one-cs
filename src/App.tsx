import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat/Chat";
import Board from "./pages/Board/Board";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Privacy from "./pages/Privacy";
import CookieModal from "@/components/CookieModal";
import CookiePolicy from "./pages/CookiePolicy";
import Support from "./pages/Support";
import NavigationSidebar from "@/components/NavigationSidebar";
import ProfileModal from "@/components/ProfileModal";
import Validation from "./pages/Validation";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

const queryClient = new QueryClient();

function getUserFromLocalStorage() {
  try {
    const userStr = localStorage.getItem("user");
    console.log("Retrieved user from localStorage:", userStr);
    if (userStr) return JSON.parse(userStr);
  } catch {
    console.error("Failed to parse user from localStorage");
  }
}

function App() {
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [user, setUser] = React.useState(getUserFromLocalStorage());
  console.log("User data in App component:", user);

  React.useEffect(() => {
    setUser(getUserFromLocalStorage());
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CookieModal />
        <ProfileModal
          open={profileOpen}
          onClose={() => setProfileOpen(false)}
          user={user}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/board" element={<Board />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/privacy-terms" element={<Privacy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/validation" element={<Validation />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
