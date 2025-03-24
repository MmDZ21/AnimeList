"use client";
import React, { useState, useEffect } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import registrationSchema, { RegistrationSchema } from "@/models/register";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import register from "@/actions/register";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Registration: React.FC = () => {
  const router = useRouter();
  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState<boolean>(false);
  const [passwordStatus, setPasswordStatus] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const validatePassword = (password: string) => {
    setPasswordStatus({
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
    });
  };
  const validateConfirmPassword = (confirmPassword: string): boolean => {
    return confirmPassword === password;
  };

  useEffect(() => {
    validatePassword(password);
    const match = validateConfirmPassword(confirmPassword);
    setPasswordMatch(match);
  }, [password, confirmPassword]);

  const onSubmit: SubmitHandler<RegistrationSchema> = async (data) => {
    setIsPending(true);
    setError(null); // Clear previous errors

    try {
      const result = await register(
        data.name,
        data.email,
        data.password,
        data.confirmPassword
      ); // Call the server action
      if (!result.success) {
        toast.error("مشکلی در ثبت نام رخ داد.");
      } else {
        toast.success("ثبت نام با موفقیت انجام شد", {
          action: {
            label: "ورود به حساب",
            onClick: () => router.push("/login"),
          },
        });
      }
    } catch (error) {
      toast.error("مشکلی در ثبت نام رخ داد.");
    } finally {
      setPassword("");
      setConfirmPassword("");
      form.reset();
      setIsPending(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };

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
          <Form {...form}>
            <form
              className="flex flex-col gap-6 w-full"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">نام</FormLabel>
                    <div>
                      <Input {...field} />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">ایمیل</FormLabel>
                    <div>
                      <Input {...field} />
                    </div>
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
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        {...field}
                        value={password}
                        onChange={(e) => {
                          field.onChange(e);
                          setPassword(e.target.value);
                        }}
                      />
                      <span
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M15 13.5L16.5 16"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20 11L22 13"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2 13L4 11"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 13.5L7.5 16"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                  </FormItem>
                )}
              />
              {password.length > 0 && (
                <div className="flex gap-6">
                  <div className="flex flex-col gap-3 justify-center">
                    <div>
                      {passwordStatus.length ? (
                        <span className="text-[#0EA774] flex items-center gap-[10px]">
                          <div className="flex justify-center items-center size-3 bg-[#0EA774] rounded-full text-white">
                            <CheckIcon className="size-3" />
                          </div>
                          <p className="text-xs font-normal">
                            حداقل شامل ۸ کرکتر باشد
                          </p>
                        </span>
                      ) : (
                        <span className="text-[#D73D3D] flex items-center gap-[10px]">
                          <div className="flex justify-center items-center size-3 bg-[#D73D3D] rounded-full text-white">
                            <Cross2Icon className="size-3" />
                          </div>
                          <p className="text-xs font-normal">
                            حداقل شامل ۸ کرکتر باشد
                          </p>
                        </span>
                      )}
                    </div>
                    <div>
                      {passwordStatus.lowercase ? (
                        <span className="text-[#0EA774] flex items-center gap-[10px]">
                          <div className="flex justify-center items-center size-3 bg-[#0EA774] rounded-full text-white">
                            <CheckIcon className="size-3" />
                          </div>
                          <p className="text-xs font-normal">
                            دارای یک حرف کوچک باشد
                          </p>
                        </span>
                      ) : (
                        <span className="text-[#D73D3D] flex items-center gap-[10px]">
                          <div className="flex justify-center items-center size-3 bg-[#D73D3D] rounded-full text-white">
                            <Cross2Icon className="size-3" />
                          </div>
                          <p className="text-xs font-normal">
                            دارای یک حرف کوچک باشد
                          </p>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <div>
                      {passwordStatus.uppercase ? (
                        <span className="text-[#0EA774] flex items-center gap-[10px]">
                          <div className="flex justify-center items-center size-3 bg-[#0EA774] rounded-full text-white">
                            <CheckIcon className="size-3" />
                          </div>
                          <p className="text-xs font-normal">
                            دارای یک حرف بزرگ باشد
                          </p>
                        </span>
                      ) : (
                        <span className="text-[#D73D3D] flex items-center gap-[10px]">
                          <div className="flex justify-center items-center size-3 bg-[#D73D3D] rounded-full text-white">
                            <Cross2Icon className="size-3" />
                          </div>
                          <p className="text-xs font-normal">
                            دارای یک حرف بزرگ باشد
                          </p>
                        </span>
                      )}
                    </div>
                    <div>
                      {passwordStatus.number ? (
                        <span className="text-[#0EA774] flex items-center gap-[10px]">
                          <div className="size-3 bg-[#0EA774] rounded-full text-white">
                            <CheckIcon className="size-3" />
                          </div>
                          <p className="text-xs font-normal">
                            دارای یک رقم باشد
                          </p>
                        </span>
                      ) : (
                        <span className="text-[#D73D3D] flex items-center gap-[10px]">
                          <div className="size-3 bg-[#D73D3D] rounded-full text-white">
                            <Cross2Icon className="size-3" />
                          </div>
                          <p className="text-xs font-normal">
                            دارای یک رقم باشد
                          </p>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">
                      تکرار کلمه عبور
                    </FormLabel>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        {...field}
                        value={confirmPassword}
                        onChange={(e) => {
                          field.onChange(e);
                          setConfirmPassword(e.target.value);
                        }}
                      />
                      <span
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M15 13.5L16.5 16"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20 11L22 13"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2 13L4 11"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 13.5L7.5 16"
                              stroke="#979CA6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                    </div>
                  </FormItem>
                )}
              />
              {confirmPassword.length > 0 &&
                (passwordMatch ? (
                  <div className="text-[#0EA774] flex items-center gap-[10px]">
                    <div className="size-3 bg-[#0EA774] rounded-full text-white">
                      <CheckIcon className="size-3" />
                    </div>
                    <p className="text-xs font-normal">پسورد مطابقت دارد</p>
                  </div>
                ) : (
                  <div className="text-[#D73D3D] flex items-center gap-[10px]">
                    <div className="flex justify-center items-center size-3 bg-[#D73D3D] rounded-full text-white">
                      <Cross2Icon className="size-3" />
                    </div>
                    <p className="text-xs font-normal">
                      تکرار کلمه عبور با کلمه عبور مطابقت ندارد
                    </p>
                  </div>
                ))}
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
                ایجاد حساب کاربری
              </Button>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};

export default Registration;
