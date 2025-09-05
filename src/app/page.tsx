"use client";

import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { GoogleIcon } from "@/components/GoogleIcon";

export default function Home() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  const UserProfile = () => (
    <div className="flex flex-col items-center gap-6">
      <Avatar className="h-24 w-24 border-2 border-primary">
        <AvatarImage src={user?.photoURL || ""} alt={user?.displayName || "User"} />
        <AvatarFallback>
          {user?.displayName?.charAt(0).toUpperCase() || "U"}
        </AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h2 className="text-2xl font-bold">{user?.displayName}</h2>
        <p className="text-muted-foreground">{user?.email}</p>
      </div>
      <Button onClick={signOut} variant="outline">
        Cerrar sesión
      </Button>
    </div>
  );

  const SignInButton = () => (
    <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">SimpleAuth</h1>
        <p className="text-muted-foreground">Una forma sencilla de iniciar sesión.</p>
        <Button onClick={signInWithGoogle} className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
          <GoogleIcon className="mr-2 h-5 w-5" />
          Iniciar sesión con Google
        </Button>
    </div>
  );
  
  const LoadingState = () => (
      <div className="flex flex-col items-center gap-6">
        <Skeleton className="h-24 w-24 rounded-full" />
        <div className="flex flex-col items-center gap-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-5 w-64" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="w-full max-w-sm rounded-lg border bg-card p-8 shadow-sm">
        {loading ? <LoadingState /> : user ? <UserProfile /> : <SignInButton />}
      </div>
    </main>
  );
}
