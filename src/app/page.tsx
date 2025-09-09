"use client";

import { useAuth } from "@/context/AuthContext";
import { GoogleIcon } from "@/components/GoogleIcon";
import { Button } from "@/components/ui/button";
import { AppShell } from "@/components/AppShell";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Loader2, Anchor } from "lucide-react";


const LoadingScreen = () => (
  <div className="flex min-h-screen items-center justify-center bg-background p-8">
    <div className="w-full max-w-sm space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-6 w-3/4 mx-auto" />
      <Skeleton className="h-12 w-full mt-8" />
    </div>
  </div>
);

const SignInScreen = ({ isLoading, signInAction }: { isLoading: boolean; signInAction: () => Promise<void> }) => {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = async () => {
    setIsSigningIn(true);
    try {
      await signInAction();
    } catch (e) {
      console.error("Sign in failed:", e);
    } finally {
      setIsSigningIn(false);
    }
  };

  const buttonDisabled = isLoading || isSigningIn;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 min-h-full min-w-full max-w-none object-cover"
        poster="/images/login-poster.jpg"
      >
        <source src="/videos/login-bg.mp4" type="video/mp4" />
        Tu navegador no soporta vídeos.
      </video>
      <div className="absolute inset-0 z-10 bg-black/50" />
      
      <div className="relative z-20 w-full max-w-sm rounded-2xl border border-white/20 bg-background/50 p-8 text-center shadow-2xl backdrop-blur-lg animate-in fade-in zoom-in-95">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
          <Anchor className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-primary">NAUTIXA</h1>
        <p className="mt-2 text-foreground/80">Tu asistente de navegación y comunicaciones marítimas</p>
        <Button onClick={handleSignIn} disabled={buttonDisabled} className="mt-8 h-12 w-full text-base">
          {buttonDisabled ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <GoogleIcon className="mr-2 h-5 w-5" />
          )}
          {buttonDisabled ? "Iniciando sesión..." : "Iniciar sesión con Google"}
        </Button>
      </div>
    </div>
  );
};


export default function Home() {
  const { user, loading, signInWithGoogle } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <SignInScreen isLoading={loading} signInAction={signInWithGoogle} />;
  }

  return <AppShell user={user} />;
}
