"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import HeaderNav from "../components/HeaderNav";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/img/logo.png";
import { PasswordInput } from "@/components/ui/password-input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(3, {
    message: "Password must be at least 3 characters.",
  }),
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div>
      <div>
        {/* Page Header BEGIN */}
        <header className="flex items-center justify-between bg-emerald-500 h-16">
          <Link className="w-16" href={"/"}>
            <Image
              src={logo}
              width={150}
              height={150}
              className="p-2 ml-3 rounded-full"
              alt="LOGO"
            ></Image>
          </Link>
        </header>
        {/* Page Header END */}
      </div>
      <p className="text-center mt-20 text-emerald-800"><b>DREAM LEARNING</b></p>
      <p className="text-center mt-2">Đăng ký tài khoản Dream Learning <br></br>để kết nối với ứng dụng Dream Learning</p>
      <div className="flex justify-center">
        <div className="flex justify-center mt-8 border border-y-2 border-x-2 w-[400px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="m-4">
              <FormDescription className="text-center">Đăng ký tài khoản mới</FormDescription>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Username"
                        {...field}
                        className="w-[91%]"
                      />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput {...field} placeholder="Password"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-4 bg-emerald-500 w-72" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <p className='mt-4 text-center'>
        Bạn đã có tài khoản? <a className="hover:text-blue-600" href={'/login'}><u>Đăng Nhập</u></a>
      </p>
      <div>
        <hr className="mb-2 mt-3"></hr>
        <footer className="p-4 text-center text-gray-400">
          <i>Dream <span className="text-emerald-500 ">Learning</span></i>{" "} &copy; 2024 Accompany your dreams
        </footer>
      </div>
    </div>
  );
};

export default Register;
