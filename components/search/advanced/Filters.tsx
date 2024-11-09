"use client";
import React from "react";
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
import filtersSchema, {
  CountryEnums,
  countryEnums,
  GenreEnum,
  genreEnums,
  LanguageEnums,
  languageEnums,
  RatingEnums,
  ratingEnums,
  TypeEnums,
  typeEnums,
} from "@/models/filters";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Filters({ filters }: { filters?: any }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof filtersSchema>>({
    resolver: zodResolver(filtersSchema),
    defaultValues: {
      genre: (searchParams.get("genre") as GenreEnum) || "هرچی",
      type: (searchParams.get("type") as TypeEnums) || "هرچی",
      country: (searchParams.get("country") as CountryEnums) || "هرچی",
      language: (searchParams.get("language") as LanguageEnums) || "هرچی",
      rating: (searchParams.get("rating") as RatingEnums) || "هرچی",
      actor: searchParams.get("actor") || "",
      director: searchParams.get("director") || "",
    },
  });

  function onSubmit(values: z.infer<typeof filtersSchema>) {
    // Filter out default values ("هرچی") and empty values for actor and director
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(
        ([key, value]) => value !== "هرچی" && value !== ""
      )
    );

    const params = new URLSearchParams(filteredValues);
    const url = `${pathname}?${params.toString()}`;
    replace(url);
  }

  function handleFilterChange(
    name:
      | "genre"
      | "type"
      | "country"
      | "rating"
      | "language"
      | "actor"
      | "director",
    value: string
  ) {
    form.setValue(name, value);
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <Form {...form}>
      <form
        className="bg-[#17212B] flex rounded-lg p-3 gap-4 w-full items-end"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>ژانرها</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {genreEnums.options.map((genre) => (
                    <SelectItem value={genre} key={genre}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>نوع</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-10">
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {typeEnums.options.map((type) => (
                    <SelectItem value={type} key={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>کشور</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-10">
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countryEnums.options.map((country) => (
                    <SelectItem value={country} key={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>نمره</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-10">
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {ratingEnums.options.map((rating) => (
                    <SelectItem value={rating} key={rating}>
                      {rating}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>زبان</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-10">
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {languageEnums.options.map((language) => (
                    <SelectItem value={language} key={language}>
                      {language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="actor"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>صداپیشه</FormLabel>
              <FormControl>
                <Input placeholder="نام صداپیشه" {...field} className="h-10" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="director"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>کارگردان</FormLabel>
              <FormControl>
                <Input placeholder="نام کارگردان" {...field} className="h-10" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="size-10" type="submit">
          <div>
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 14L16.5 16.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M16.4333 18.5252C15.8556 17.9475 15.8556 17.0109 16.4333 16.4333C17.0109 15.8556 17.9475 15.8556 18.5252 16.4333L21.5667 19.4748C22.1444 20.0525 22.1444 20.9891 21.5667 21.5667C20.9891 22.1444 20.0525 22.1444 19.4748 21.5667L16.4333 18.5252Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Button>
      </form>
    </Form>
  );
}
