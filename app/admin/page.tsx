"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreatePost } from "@/hooks/api/usePosts";
import { Post } from "@/lib/api/posts";

const Admin = () => {
  const [body, setBody] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [formErrors, setFormErrors] = useState<Omit<Post, "id">>({
    title: "",
    body: "",
  });

  const clearFormData = () => {
    setTitle("");
    setBody("");
  };

  const { mutate, error, isPending } = useCreatePost(
    title,
    body,
    clearFormData
  );

  const handleCreatePost = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) mutate();
  };

  const validateForm = (): boolean => {
    let isFormValid = true;
    const currentFormErrors = {
      title: "",
      body: "",
    };

    if (title.trim().length < 5) {
      currentFormErrors.title = "Title must be at least 5 characters";
      isFormValid = false;
    }
    if (body.trim().length < 20) {
      currentFormErrors.body = "Content must be at least 20 characters";
      isFormValid = false;
    }

    setFormErrors(currentFormErrors);
    return isFormValid;
  };

  return (
    <section className="w-full">
      <div className="container-center gap-20">
        <h1 className="primary-gradient text-4xl">
          Engage Your Mind. Write Something Brilliant
        </h1>
        <form className="w-full" onSubmit={handleCreatePost}>
          <Card className="relative bg-[linear-gradient(132deg,#191b1e_0%,rgb(39,40,48)_100%)] border-none before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:rounded-2xl before:bg-linear-to-br before:from-gray-50 before:to-gray-800 before:-z-10">
            <CardHeader>
              <CardTitle className="primary-gradient text-2xl">
                Create a New Post
              </CardTitle>
              <CardDescription>
                This Space is Yours. Light It Up.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label className="primary-gradient text-sm" htmlFor="name">
                    Title
                  </Label>
                  <Input
                    id="name"
                    placeholder="Title of your post"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-gray-100"
                  />
                  <span className="text-red-400 h-[25px]">
                    {formErrors.title}
                  </span>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label className="primary-gradient text-sm">Body</Label>
                  <span className="text-red-400 h-[25px]">
                    {formErrors.body}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="container-center space-y-5 w-full">
                {error ? (
                  <span className="text-red-400">
                    Error occurred while submitting the form please try again{" "}
                    <br /> {error.message}
                  </span>
                ) : (
                  ""
                )}
                <div className="container-center w-full">
                  <Button type="submit" className="cursor-pointer w-1/2">
                    {isPending ? (
                      <div className="w-[20px] h-[20px] border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <span>
                        <span className="text-lg">+ </span>Create Post
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </section>
  );
};

export default Admin;
