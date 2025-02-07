"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ENDPOINTS } from "@/utils/axios";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { TbMail } from "react-icons/tb";
import { ImKey } from "react-icons/im";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Input } from "@/components/inputs";
import { ROUTES } from "@/config/routes";

type FormData = {
  email: string;
  password: string;
};

export function LoginComponent() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await axios.post(ENDPOINTS.auth.login, data);
      if (res.data?.status) throw new Error(res.data?.message);
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };

  return (
    <div className="flex items-stretch min-h-screen">
      {/* left side contining form */}
      <div className="w-2/3 ps-6 py-8 relative">
        <div>
          <Logo />
        </div>
        <div className="mt-14 flex flex-col gap-4 items-center w-full">
          <h1 className="text-5xl font-bold text-primary">Login to Your Account</h1>
          <p className="text-light items-stretch">Login to use our services</p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-4 ">
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex flex-col gap-4 ">
              <Input
                startIcon={<TbMail className="text-primary" size={20} />}
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <Input
                startIcon={<ImKey className="text-primary" size={20} />}
                endIcon={
                  isPasswordVisible ? (
                    <AiOutlineEyeInvisible
                      className="text-primary cursor-pointer"
                      size={20}
                      onClick={() => setIsPasswordVisible(false)}
                    />
                  ) : (
                    <AiOutlineEye
                      className="text-primary cursor-pointer"
                      size={20}
                      onClick={() => setIsPasswordVisible(true)}
                    />
                  )
                }
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            <Link className="text-primary font-medium" href={ROUTES.forgotPassword}>
              Forgot password ?
            </Link>

            <button
              className="bg-primary text-white py-4 px-8 rounded-lg mt-6"
              type="submit">
              Login
            </button>
          </form>
        </div>
        <footer className="absolute bottom-4 w-full text-center">
          <p className="text-center text-sm text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} SynexFlow. All rights reserved.
          </p>
        </footer>
      </div>
      {/* right side containing text and signup link */}
      <div className="w-1/3 bg-primary p-5 flex flex-col justify-center items-center text-white gap-5 relative overflow-hidden">
        <h1 className="text-4xl font-extrabold">New here?</h1>
        <p className="text-lg text-center">
          Sign up and discover a great amount of new opportunities
        </p>

        <Link
          href={ROUTES.signup}
          className="z-10 font-medium mt-4 rounded-lg px-7 py-2 border-white border">
          Sign up
        </Link>

        {/* random shapes */}
        <div className="absolute  -top-10 -right-14 w-2/3 h-full bg-gradient-to-l from-white to-transparent blur-md opacity-30 -rotate-12" />
        <div className="absolute top-10 left-5 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[150px] border-t-white opacity-10 rotate-45" />
        <div className="absolute -bottom-8 -left-11 h-56 w-56 rounded-full bg-white opacity-10" />
        <div className="absolute -right-8 bottom-7 h-28 w-28 rounded-full bg-white opacity-10" />
      </div>
    </div>
  );
}
