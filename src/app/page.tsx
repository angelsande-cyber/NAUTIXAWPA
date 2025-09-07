"use client";

import { useAuth } from "@/context/AuthContext";
import { GoogleIcon } from "@/components/GoogleIcon";
import { Button } from "@/components/ui/button";
import { AppShell } from "@/components/AppShell";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";


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
  const { t } = useTranslation();

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
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="w-full max-w-sm rounded-2xl border bg-card p-8 text-center shadow-lg animate-in fade-in zoom-in-95">
        <h1 className="text-4xl font-bold tracking-tight text-primary">NAUTIXA</h1>
        <p className="mt-2 text-muted-foreground">{t('signIn.tagline')}</p>
        <Button onClick={handleSignIn} disabled={buttonDisabled} className="mt-8 h-12 w-full text-base">
          {buttonDisabled ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <GoogleIcon className="mr-2 h-5 w-5" />
          )}
          {buttonDisabled ? t('signIn.signingIn') : t('signIn.button')}
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
