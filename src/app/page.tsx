"use client";

import { useAuth } from "@/context/AuthContext";
import { GoogleIcon } from "@/components/GoogleIcon";
import { Button } from "@/components/ui/button";
import { AppShell } from "@/components/AppShell";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { user, loading, signInWithGoogle } = useAuth();
  
  const SignInScreen = ({ isLoading }: { isLoading: boolean }) => {
    const [isSigningIn, setIsSigningIn] = useState(false);

    const handleSignIn = async () => {
        setIsSigningIn(true);
        try {
            await signInWithGoogle();
        } finally {
            // This might not be reached if the component unmounts upon successful login,
            // but it's good practice for handling failed attempts.
            setIsSigningIn(false);
        }
    };

    const buttonDisabled = isLoading || isSigningIn;

    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-8">
            <div className="w-full max-w-sm rounded-2xl border bg-card p-8 shadow-lg text-center animate-in fade-in zoom-in-95">
                <h1 className="text-4xl font-bold tracking-tight text-primary">NAUTIXA</h1>
                <p className="text-muted-foreground mt-2">Tu asistente de navegación y comunicaciones.</p>
                <Button onClick={handleSignIn} disabled={buttonDisabled} className="w-full mt-8 h-12 text-base">
                    {isSigningIn ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                        <GoogleIcon className="mr-2 h-5 w-5" />
                    )}
                    {isSigningIn ? "Iniciando sesión..." : "Iniciar sesión con Google"}
                </Button>
            </div>
        </div>
    );
  };
  
  const LoadingScreen = () => (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="w-full max-w-sm space-y-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-6 w-3/4 mx-auto" />
        <Skeleton className="h-12 w-full mt-8" />
      </div>
    </div>
  )

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <SignInScreen isLoading={loading} />;
  }

a
  return <AppShell user={user} />;
}
