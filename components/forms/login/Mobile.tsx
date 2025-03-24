"use client";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import mobileLoginSchema from "@/models/mobile-login";
import otpSchema from "@/models/otp-schema";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type MobileLoginSchema = z.infer<typeof mobileLoginSchema>;
type OTPSchema = z.infer<typeof otpSchema>;

const Mobile = () => {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [isPending, setIsPending] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [canResend, setCanResend] = useState(false);
  const [timer, setTimer] = useState(60);
  const phoneForm = useForm<MobileLoginSchema>({
    resolver: zodResolver(mobileLoginSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const otpForm = useForm<OTPSchema>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setCanResend(true);
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);
  const onSubmitPhone: SubmitHandler<MobileLoginSchema> = async (data) => {
    setIsPending(true);
    try {
      setPhoneNumber(data.phoneNumber);
      // Simulate an async operation to send OTP
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStep("otp");
      setTimer(60); // Reset the timer to 60 seconds
      setCanResend(false);
    } finally {
      setIsPending(false);
    }
  };

  const onSubmitOTP: SubmitHandler<OTPSchema> = async (data) => {
    setIsPending(true);
    try {
      // Simulate an async operation to verify OTP
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Handle successful login
    } finally {
      setIsPending(false);
    }
  };
  const handleResend = async () => {
    setIsPending(true);
    try {
      // Simulate an async operation to resend OTP
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setTimer(60); // Reset the timer to 60 seconds
      setCanResend(false);
    } finally {
      setIsPending(false);
    }
  };
  return (
    <>
      {step === "phone" && (
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
              <Form {...phoneForm}>
                <form
                  className="flex flex-col gap-4 w-full"
                  onSubmit={phoneForm.handleSubmit(onSubmitPhone)}
                >
                  <FormField
                    control={phoneForm.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-normal">
                          لطفا تلفن همراه خود را وارد کنید
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    variant={"default"}
                    type="submit"
                    className="text-base font-medium flex items-center justify-center gap-2"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Image
                          src="/svg/spinner.svg"
                          width={16}
                          height={16}
                          alt="spinner"
                        />
                        درحال ارسال
                      </>
                    ) : (
                      "ارسال کد یک‌بار مصرف"
                    )}
                  </Button>
                </form>
              </Form>
              <div className="flex items-center gap-3">
                <div className="dark:bg-[#94A3B8]/20 h-[1px] w-full"> </div>
                <p className="dark:text-[#E0E0E0] text-sm font-normal">یا</p>
                <div className="dark:bg-[#94A3B8]/20 h-[1px] w-full"> </div>
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
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.991 15.5H15M10 15.5H10.009"
                      stroke="#979CA6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.76781 18.8447C4.99269 20.515 6.37613 21.8235 8.05966 21.9009C9.47627 21.966 10.9153 22 12.5 22C14.0847 22 15.5237 21.966 16.9403 21.9009C18.6239 21.8235 20.0073 20.515 20.2322 18.8447C20.379 17.7547 20.5 16.6376 20.5 15.5C20.5 14.3624 20.379 13.2453 20.2322 12.1553C20.0073 10.485 18.6239 9.17649 16.9403 9.09909C15.5237 9.03397 14.0847 9 12.5 9C10.9153 9 9.47627 9.03397 8.05966 9.09909C6.37613 9.17649 4.99269 10.485 4.76781 12.1553C4.62105 13.2453 4.5 14.3624 4.5 15.5C4.5 16.6376 4.62105 17.7547 4.76781 18.8447Z"
                      stroke="#979CA6"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 9V6.5C8 4.01472 10.0147 2 12.5 2C14.9853 2 17 4.01472 17 6.5V9"
                      stroke="#979CA6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  ورود با کلمه عبور
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === "otp" && (
        <Card className="z-30 rounded-none max-w-sm border-0 text-slate-950 shadow-none dark:border-0 dark:bg-transparent dark:text-slate-50 w-full">
          <CardHeader className="gap-2">
            <CardTitle className="text-2xl lg:text-4xl font-bold">
              کد تأیید را وارد کنید
            </CardTitle>
            <CardDescription className="text-lg dark:text-white">
              کد تأیید برای شماره {phoneNumber} ارسال شد.{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-8">
              <Form {...otpForm}>
                <form
                  className="flex flex-col gap-6 w-full"
                  onSubmit={otpForm.handleSubmit(onSubmitOTP)}
                >
                  <FormField
                    control={otpForm.control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                          <InputOTP maxLength={5} {...field}>
                            <InputOTPGroup dir="ltr">
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    variant={"default"}
                    type="submit"
                    className="text-base font-medium flex items-center justify-center gap-2"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <Image
                        src="/svg/spinner.svg"
                        width={16}
                        height={16}
                        alt="spinner"
                      />
                    ) : (
                      "ورود"
                    )}
                  </Button>
                </form>
                <div className="flex justify-center items-center">
                  <Button
                    variant={"outline"}
                    onClick={handleResend}
                    className="text-base font-normal text-[#979CA6] flex items-center justify-center gap-2"
                    disabled={!canResend || isPending}
                  >
                    {isPending ? (
                      <>
                        <Image
                          src="/svg/spinner.svg"
                          width={16}
                          height={16}
                          alt="spinner"
                        />
                        درحال ارسال
                      </>
                    ) : canResend ? (
                      "ارسال مجدد کد"
                    ) : (
                      `${timer} ثانیه تا ارسال کد فعال‌سازی مجدد`
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Mobile;
