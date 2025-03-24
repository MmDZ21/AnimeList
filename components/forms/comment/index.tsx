"use client";
import React, { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import commentSchema, { CommentSchema } from "@/models/comment";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import sendComment from "@/actions/sendComment";
import { toast } from "sonner";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function CommentForm({
  animeId,
  parentId,
  session,
}: {
  animeId: string;
  parentId: string;
  session: boolean;
}) {
  const router = useRouter();
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      text: "",
      attachments: [],
      containsSpoiler: false,
      emojis: [],
    },
  });
  const onSubmit: SubmitHandler<CommentSchema> = async (data) => {
    if (!session) {
      toast.error("برای ثبت نظر ابتدا وارد شوید", {
        action: {
          label: "ورود به حساب",
          onClick: () => router.push("/login"),
        },
      });
    } else {
      setIsPending(true);
      console.log(data);
      try {
        const result = await sendComment(
          animeId,
          parentId,
          data.text,
          data.containsSpoiler
        ); // Call the server action
        if (!result.success) {
          toast.error("مشکلی در ثبت نظر رخ داد.");
        } else {
          toast.success(result.message);
        }
      } catch (error) {
        toast.error("مشکلی در ثبت نظر رخ داد.");
      } finally {
        form.reset();
        setIsPending(false);
      }
    }
  };

  return (
    <div className="w-full border border-[hsla(215,20%,65%,0.24)] rounded-md bg-background">
      <Form {...form}>
        <form
          className="flex flex-col w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem className="h-[200px]">
                <FormControl>
                  <Textarea
                    placeholder="نظر خود را بنویسید..."
                    className="resize-none rounded-none h-[200px] placeholder:text-[#B5B8BF] placeholder:text-sm placeholder:font-medium"
                    maxLength={500}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="px-4 py-3 flex justify-between">
            <div className="flex gap-4 items-center justify-center">
              <FormField
                control={form.control}
                name="attachments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="size-6 flex justify-center items-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.82338 10L2.27922 8.45584C0.573593 6.75022 0.573593 3.98485 2.27922 2.27922C3.98485 0.573593 6.75022 0.573593 8.45584 2.27922L17.7208 11.5442C19.4264 13.2498 19.4264 16.0152 17.7208 17.7208C16.0152 19.4264 13.2498 19.4264 11.5442 17.7208L8.0698 14.2464C7.00379 13.1804 7.00379 11.4521 8.0698 10.386C9.13582 9.32002 10.8642 9.32002 11.9302 10.386L13.8604 12.3162"
                            stroke="#979CA6"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input type="file" {...field} className="hidden" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emojis"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="size-6 flex justify-center items-center">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="11"
                            cy="11"
                            r="10"
                            stroke="#979CA6"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 14C7.91212 15.2144 9.36433 16 11 16C12.6357 16 14.0879 15.2144 15 14"
                            stroke="#979CA6"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.00897 8L7 8M15 8L14.991 8"
                            stroke="#979CA6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="hidden" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Separator
                orientation="vertical"
                className="h-4 bg-[hsla(215,20%,65%,0.24)] opacity-85"
              />
              <FormField
                control={form.control}
                name="containsSpoiler"
                render={({ field }) => (
                  <FormItem className="flex gap-2 items-center justify-center space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormLabel className="text-[#979CA6]">
                      حاوی اسپویل
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="flex items-center rounded-lg text-sm justify-center gap-2 px-3 h-9"
            >
              {isPending && (
                <Image
                  src="/svg/spinner.svg"
                  width={16}
                  height={16}
                  alt="spinner"
                />
              )}
              ارسال نظر
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
