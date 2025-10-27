import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const COOKIE_KEY = 'cookieAccepted';

const CookieModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) setOpen(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-end justify-start pointer-events-none">
      <div className="w-full max-w-md bg-card border border-border rounded-xl shadow-xl p-6 pointer-events-auto">
        <h2 className="text-lg font-bold text-primary mb-2">Cookie Policy</h2>
        <p className="text-sm text-muted-foreground mb-4">
          We use cookies to improve your experience. By continuing to use this site, you accept our <a href="/cookie-policy" className="text-primary underline">Cookie Policy</a>.
        </p>
        <Button className="w-full bg-primary text-white font-semibold" onClick={handleAccept}>
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieModal;
