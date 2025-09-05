"use client";

import { useAuth } from "@/context/AuthContext";
import { GoogleIcon } from "@/components/GoogleIcon";
import { Button } from "@/components/ui/button";
import { AppShell } from "@/components/AppShell";

export default function Home() {
  const { user, signInWithGoogle } = useAuth();

  const SignInScreen = () => (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
        <div className="w-full max-w-sm rounded-lg border bg-card p-8 shadow-sm text-center">
            <h1 className="text-4xl font-bold tracking-tight">NAUTIXA</h1>
            <p className="text-muted-foreground mt-2">Tu asistente de navegación y comunicaciones.</p>
            <Button onClick={signInWithGoogle} className="w-full mt-8">
                <GoogleIcon className="mr-2 h-5 w-5" />
                Iniciar sesión con Google
            </Button>
        </div>
    </div>
  );

  if (!user) {
    return <SignInScreen />;
  }

  return <AppShell user={user} />;
}
