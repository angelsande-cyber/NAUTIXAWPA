"use client";

import { useAuth } from "@/context/AuthContext";
import { GoogleIcon } from "@/components/GoogleIcon";
import { Button } from "@/components/ui/button";
import { AppShell } from "@/components/AppShell";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { user, loading, signInWithGoogle } = useAuth();

  const SignInScreen = () => (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
        <div className="w-full max-w-sm rounded-2xl border bg-card p-8 shadow-lg text-center animate-in fade-in zoom-in-95">
            <h1 className="text-4xl font-bold tracking-tight text-primary">NAUTIXA</h1>
            <p className="text-muted-foreground mt-2">Tu asistente de navegación y comunicaciones.</p>
            <Button onClick={signInWithGoogle} className="w-full mt-8 h-12 text-base">
                <GoogleIcon className="mr-2 h-5 w-5" />
                Iniciar sesión con Google
            </Button>
        </div>
    </div>
  );
  
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
    return <SignInScreen />;
  }

  return <AppShell user={user} />;
}
