import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>
        <div className="relative z-10 text-center bg-background/80 backdrop-blur-xl shadow-lg rounded-xl p-10 border border-border">
          <h1 className="mb-4 text-6xl font-extrabold text-primary drop-shadow">404</h1>
          <p className="mb-6 text-xl text-foreground/80 font-medium">Oops! Page not found</p>
          <Button asChild variant="hero" size="lg" className="mt-2">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
