"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { BioFormSchema } from "@/models/bio-schema";

export function BioForm({
  bio,
  setEditing,
}: {
  bio: string;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof BioFormSchema>>({
    resolver: zodResolver(BioFormSchema),
    defaultValues: {
      bio,
    },
  });

  function onSubmit(data: z.infer<typeof BioFormSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Textarea
                  placeholder="در مورد خودت بنویس..."
                  className="resize-y bg-background text-base font-normal rounded-lg p-3 w-full"
                  {...field}
                  rows={8}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end">
          <div className="flex gap-2">
            <Button type="submit" className="h-9 text-base font-medium">تایید</Button>
            <Button onClick={() => setEditing(false)} className="h-9 text-base font-medium" variant="outline">انصراف</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
