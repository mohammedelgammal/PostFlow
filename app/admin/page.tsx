"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import TipTap, { TipTapHandle } from "./components/TipTap";
import { useCreatePost } from "@/hooks/api/usePosts";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef } from "react";

const Admin = () => {
  const tipTapRef = useRef<TipTapHandle>(null);
  const formSchema = z.object({
    title: z
      .string()
      .min(5, "Title must be at least 5 characters")
      .max(100, "Title can't be more than 100 characters")
      .trim(),
    body: z
      .string()
      .min(20, "Body must be at least 20 characters")
      .max(1000, "Body can't be more than 1000 characters")
      .trim(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const { mutate, isPending } = useCreatePost(
    () => (form.reset(), tipTapRef.current?.clear())
  );

  const formSubmitHandler = (values: z.infer<typeof formSchema>) => {
    mutate({ title: values.title, body: values.body });
  };

  return (
    <section className="w-full max-w-[1536px]">
      <div className="container-center gap-20 max-lg:flex-col">
        <h1 className="primary-gradient text-4xl max-lg:text-center">
          Engage Your Mind. <br className="lg:hidden " /> Write Something
          Brilliant
        </h1>
        <Card className="w-full relative bg-[linear-gradient(132deg,#191b1e_0%,rgb(39,40,48)_100%)] border-none before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:rounded-2xl before:bg-linear-to-br before:from-gray-50 before:to-gray-800 before:-z-10">
          <CardHeader>
            <CardTitle className="primary-gradient text-2xl">
              Create a New Post
            </CardTitle>
            <CardDescription>This Space is Yours. Light It Up.</CardDescription>
          </CardHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(formSubmitHandler)}
              className="px-5"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="text-white"
                        type="text"
                        placeholder="Post title"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="w-full">
                      <TipTap
                        ref={tipTapRef}
                        description={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isPending}
                className="block w-1/3 inset-0 m-auto cursor-pointer mt-4"
              >
                {isPending ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default Admin;
