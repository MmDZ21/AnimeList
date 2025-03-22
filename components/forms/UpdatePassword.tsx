"use client";
import React, { useState, useEffect } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import updatePasswordSchema, {
  UpdatePasswordSchema,
} from "@/models/update-password";
import updatePassword from "@/actions/updatePassword";

const UpdatePassword: React.FC = () => {
  const router = useRouter();
  const form = useForm<UpdatePasswordSchema>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      oldPassword: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
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

  const onSubmit: SubmitHandler<UpdatePasswordSchema> = async (data) => {
    setIsPending(true);
    setError(null); // Clear previous errors

    try {
      const result = await updatePassword(
        data.oldPassword,
        data.password,
        data.confirmPassword
      ); // Call the server action
      console.log(result);
      if (!result.success) {
        toast.error("مشکلی در تغییر کلمه عبور رخ داد.");
      } else {
        toast.success("تغییر کلمه عبور با موفقیت انجام شد");
      }
    } catch (error) {
      toast.error("مشکلی در تغییر کلمه عبور رخ داد.");
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
  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };
  return (
    <div className="flex flex-col gap-8 items-center">
        <p className="text-base font-bold">
            تغییر کلمه عبور
        </p>
      <Form {...form}>
        <form
          className="flex flex-col gap-6 w-full lg:w-1/4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">کلمه عبور قبلی</FormLabel>
                <div className="relative">
                  <Input
                    type={showOldPassword ? "text" : "password"}
                    {...field}
                    value={oldPassword}
                    onChange={(e) => {
                      field.onChange(e);
                      setOldPassword(e.target.value);
                    }}
                  />
                  <span
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleOldPasswordVisibility}
                  >
                    {showOldPassword ? (
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
                      <p className="text-xs font-normal">دارای یک رقم باشد</p>
                    </span>
                  ) : (
                    <span className="text-[#D73D3D] flex items-center gap-[10px]">
                      <div className="size-3 bg-[#D73D3D] rounded-full text-white">
                        <Cross2Icon className="size-3" />
                      </div>
                      <p className="text-xs font-normal">دارای یک رقم باشد</p>
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
                <FormLabel className="font-normal">تکرار کلمه عبور</FormLabel>
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
            تغییر کلمه عبور
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdatePassword;
