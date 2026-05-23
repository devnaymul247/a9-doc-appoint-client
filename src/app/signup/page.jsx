"use client";
import { FcGoogle } from "react-icons/fc";
import { Card, Separator } from "@heroui/react";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    console.log(user);

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (data) {
      redirect("/");
    }

    if (error) {
      // TODO: toast
      toast.danger("Invalid credentials");
    }
  };

  const handleGoogleSignin = async() => {
    await authClient.signIn.social({
        provider: "google"
    })

  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center my-3">
        <h1 className="text-2xl font-bold">Register</h1>
        <p>Start your appointment with DocAppoint</p>
      </div>
      <Card className="border rounded-none max-w-125 mx-auto">
        <Form onSubmit={onSubmit} className="flex justify-center flex-col gap-4">
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField name="image" type="url">
            <Label>Photo URL</Label>
            <Input placeholder="Photo url" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
                if (!/[a-z]/.test(value)) {
                    return "Password must contain at least one lowercase letter";
                }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 6 characters with 1 uppercase, 1 lowercase, and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center gap-2">
            <Button className={"rounded-none w-full bg-[#0D7674] hover:bg-[#0A5F5D]"} type="submit">
              Register
            </Button>
          </div>
        </Form>
        <div className="flex justify-center items-center gap-3">
            <Separator/>
           <div className="whitespace-nowrap"> Or register with </div>
              <Separator/>
        </div>
        <div>
            <Button onClick={handleGoogleSignin} variant="outline" className={'w-full rounded-none'}><FcGoogle /> Register with Google</Button>
        </div>

        <div className="flex justify-end items-center gap-3">
           <p>Already have an account? <Link href="/login" className="text-[#0D7674] hover:underline">Login</Link></p>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;