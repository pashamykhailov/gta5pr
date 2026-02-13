"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { signInSchema, type SignInValues } from "./schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-field";

export default function SignInPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { login: "", password: "" },
  });

  const onSubmit = async (values: SignInValues) => {
    console.log(values);
    router.push("/news");
  };

  return (
    <div className="flex min-h-screen">
      {/* Левая панель — оранжевая */}
      <aside className="hidden w-1/3 flex-col justify-between bg-[#e85d04] p-8 md:flex">
        <div className="flex items-center gap-2 text-white">
          <span className="text-xl font-semibold">GTA5 RP</span>
        </div>
        <p className="max-w-[200px] text-lg font-medium leading-snug text-white">
          Не бойся проигрывать — бойся не учиться!
        </p>
      </aside>

      {/* Правая панель — форма */}
      <main className="flex flex-1 flex-col items-center justify-center bg-zinc-900 px-6 py-12">
        <div className="w-full max-w-sm space-y-6">
          <h1 className="text-center text-[36px] font-bold leading-[100%] text-[#DEDEDE]">
            Вход в аккаунт
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              label="Логин"
              error={errors.login?.message}
              htmlFor="login"
            >
              <Input
                id="login"
                placeholder="Введите логин"
                error={!!errors.login}
                {...register("login")}
              />
            </FormField>

            <FormField
              label="Пароль"
              error={errors.password?.message}
              htmlFor="password"
            >
              <Input
                id="password"
                type="password"
                placeholder="Пароль"
                error={!!errors.password}
                {...register("password")}
              />
            </FormField>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              Войти
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-zinc-900 px-2 text-zinc-400">или</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button variant="secondary" className="w-full" type="button">
              Войти через Google
            </Button>
            <Button variant="secondary" className="w-full" type="button">
              Войти через Steam
            </Button>
          </div>

          <p className="text-center text-sm text-[#DEDEDE]">
            Нет аккаунта?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-[#DEDEDE] underline-offset-4 hover:underline"
            >
              Создать аккаунт
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
