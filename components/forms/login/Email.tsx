"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import emailLoginSchema from "@/models/email-login";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { login } from "@/actions/login";
import router from "next/router";
import login from "@/actions/login";

const Email = () => {
  const [isPending, setIsPending] = useState(false);
  const form = useForm<z.infer<typeof emailLoginSchema>>({
    resolver: zodResolver(emailLoginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // async function onSubmit(values: z.infer<typeof emailLoginSchema>) {
  //   setIsPending(true);
  //   try {
  //     const response = await fetch(process.env.NEXT_PUBLIC_AUTH_URL as string, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         userName: values.email,
  //         password: values.password,
  //         rememberMe: values.rememberMe,
  //       }),
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json(); // Assuming the server returns JSON with error details

  //       if (errorData.errors) {
  //         // Loop over each error and set the corresponding form field error
  //         errorData.errors.forEach(
  //           (error: { field: string; message: string }) => {
  //             form.setError(
  //               error.field as keyof z.infer<typeof emailLoginSchema>,
  //               {
  //                 type: "server",
  //                 message: error.message,
  //               }
  //             );
  //           }
  //         );
  //       } else {
  //         // Generic error handling if no specific field errors
  //         form.setError("root", {
  //           type: "server",
  //           message: "An unexpected error occurred.",
  //         });
  //       }
  //     } else {
  //       // If successful, redirect or handle success
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     form.setError("root", {
  //       type: "server",
  //       message: "Network error. Please try again.",
  //     });
  //   } finally {
  //     setIsPending(false);
  //   }
  // }

  return (
    <Card className="z-30 rounded-none max-w-sm border-0 text-slate-950 shadow-none dark:border-0 dark:bg-transparent dark:text-slate-50 w-full">
      <CardHeader className="gap-2">
        <CardTitle className="text-2xl lg:text-4xl font-bold">
          خوش اومدی
        </CardTitle>
        <CardDescription className="text-lg dark:text-white">
          در دنیای بی‌پایان انیمه‌ها غرق شو
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8">
          <div>
            <Form {...form}>
              <form
                className="flex flex-col gap-4 w-full"
                // onSubmit={form.handleSubmit(onSubmit)}
                action={login}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal">ایمیل</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal">کلمه عبور</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="font-normal ml-2">
                          منو به‌خاطر بسپار
                        </FormLabel>
                      </div>
                      <div className="text-sm font-normal dark:text-[#979CA6] dark:hover:text-white flex items-center">
                        <Link href="/forgot-password" className="-mt-2">
                          بازیابی کلمه عبور
                        </Link>
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button
                  variant={"default"}
                  type="submit"
                  disabled={isPending}
                  className="flex items-center justify-center gap-2"
                >
                  {isPending && (
                    <Image
                      src="/svg/spinner.svg"
                      width={16}
                      height={16}
                      alt="spinner"
                    />
                  )}
                  ورود
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex flex-col gap-4 ">
            {/* <div className="flex items-center gap-3">
              <div className="dark:bg-[#94A3B8]/20 h-[1px] w-full"></div>
              <p className="dark:text-[#E0E0E0] text-sm font-normal">یا</p>
              <div className="dark:bg-[#94A3B8]/20 h-[1px] w-full"></div>
            </div>
            <div className="flex gap-3 justify-between">
              <Button
                variant={"outline"}
                className="w-full flex items-center justify-center gap-2 text-xs"
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 9.18375C16 8.64565 15.9523 8.13479 15.8706 7.63756H8.17371V10.7095H12.5807C12.3832 11.7176 11.8042 12.569 10.9459 13.148V15.1914H13.5752C15.1145 13.7678 16 11.6699 16 9.18375Z"
                    fill="#EB1187"
                  />
                  <path
                    d="M8.1737 17.1737C10.3806 17.1737 12.2265 16.438 13.5751 15.1916L10.9459 13.1481C10.2103 13.6386 9.27715 13.9383 8.1737 13.9383C6.04173 13.9383 4.2367 12.5011 3.58962 10.5598H0.878677V12.6645C2.22052 15.3346 4.97915 17.1737 8.1737 17.1737Z"
                    fill="#34A853"
                  />
                  <path
                    d="M3.58961 10.5597C3.41933 10.0693 3.33078 9.54482 3.33078 8.99991C3.33078 8.455 3.42614 7.93052 3.58961 7.4401V5.33537H0.878671C0.320136 6.43882 0 7.6785 0 8.99991C0 10.3213 0.320136 11.561 0.878671 12.6644L3.58961 10.5597Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M8.1737 4.06173C9.37932 4.06173 10.4555 4.47723 11.3069 5.28779L13.6364 2.95828C12.2265 1.63687 10.3806 0.826309 8.1737 0.826309C4.97915 0.826309 2.22052 2.66539 0.878677 5.33546L3.58962 7.44019C4.2367 5.49894 6.04173 4.06173 8.1737 4.06173Z"
                    fill="#EA4335"
                  />
                </svg>
                ورود از طریق گوگل
              </Button>
              <Button
                variant={"outline"}
                className="w-full flex items-center justify-center gap-2 text-xs"
                asChild
              >
                <Link href="/login/mobile">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z"
                      stroke="#979CA6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 19H13"
                      stroke="#979CA6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2"
                      stroke="#979CA6"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  ورود با کد فعال‌سازی
                </Link>
              </Button>
            </div> */}
            <div className="flex justify-center items-center">
              <p className="text-[#979CA6] text-sm font-normal">
                هنوز حساب کاربری نداری؟
                <Link href="/register" className="text-primary-500 text-sm font-medium">
                {" "}
                  ثبت‌نام
                </Link>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Email;
