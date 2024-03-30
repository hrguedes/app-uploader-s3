"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/Icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { setTimeout } from "timers";

export default function SigIn() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessages] = useState<string>("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerForm = async () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Validando formulário...");
    }, 5000);
    console.log(email);
    console.log(password);
    if (email == "hugo.guedes@hrguedes.dev" && password == "12345") {
      Cookies.set("mobplus.email", email);
      Cookies.set("mobplus.name", "Hugo Roberto Guedes");
      Cookies.set("mobplus.token", "14123123");
      router.push("/");
    } else {
      console.log("Enviando error");
      setErrorMessages("O Email/Senha informado estão incorretos.");
      setIsLoading(false);
      setHasError(true);
    }
  };

  return (
    <>
      <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/suporte/help"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Suporte
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            MOB + E.R.P
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">&ldquo;Be a simple.&rdquo;</p>
              <footer className="text-sm">Guedes, Hugo</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Faça o login
              </h1>
              <p className="text-sm text-muted-foreground">
                Informe seu E-mail.
              </p>
            </div>
            <div className={cn("grid gap-6")}>
              <form>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      onChange={(x) => setEmail(x.target.value)}
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="password">
                      Password
                    </Label>
                    <Input
                      onChange={(x) => setPassword(x.target.value)}
                      id="password"
                      placeholder="*******"
                      type="password"
                      autoCapitalize="none"
                      autoCorrect="off"
                      disabled={isLoading}
                    />
                  </div>
                  {hasError && (
                    <div className="grid gap-1">
                      <Alert variant="destructive">
                        <ExclamationTriangleIcon className="h-4 w-4" />
                        <AlertTitle>Atenção</AlertTitle>
                        <AlertDescription>{errorMessage}</AlertDescription>
                      </Alert>
                    </div>
                  )}
                  <Button
                    type="button"
                    onClick={handlerForm}
                  >
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Entrar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
