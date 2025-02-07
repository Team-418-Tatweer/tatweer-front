"use client";
import { Input } from "@/components/inputs";
import { Logo } from "@/components/logo";
import { ROUTES } from "@/config/routes";
import { ENDPOINTS } from "@/utils/axios";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from "react-icons/ai";
import { ImKey } from "react-icons/im";
import { TbMail } from "react-icons/tb";

type FormData = {
  name: string;
  email: string;
  password: string;
};
export function SignupCompoment() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isAgree, setIsAgree] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await axios.post(ENDPOINTS.auth.signup, data);
      if (res.data?.status) throw new Error(res.data?.message);
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };

  return (
    <div className="flex items-stretch min-h-screen">
      {/* left side containing text and login link */}
      <div className="w-1/3 bg-primary p-5 flex flex-col justify-center items-center text-white gap-5 relative overflow-hidden">
        <div className="absolute top-5 left-5">
          <Logo color="white" />
        </div>
        <h1 className="text-2xl font-extrabold">Already have an Account?</h1>
        <p className="text-lg text-center">
          To keep connected with us please login with you personal info
        </p>

        <Link
          href={ROUTES.login}
          className="z-10 font-medium mt-4 rounded-lg px-7 py-2 border-white border">
          Log IN
        </Link>

        {/* random shapes */}
        <div className="absolute -top-10 -right-14 w-2/3 h-full bg-gradient-to-l from-white to-transparent blur-md opacity-30 -rotate-12" />
        <div className="absolute top-10 left-5 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[150px] border-t-white opacity-10 rotate-45" />
        <div className="absolute -bottom-8 -left-11 h-56 w-56 rounded-full bg-white opacity-10" />
        <div className="absolute -right-8 bottom-7 h-28 w-28 rounded-full bg-white opacity-10" />
      </div>
      {/* left side contining form */}
      <div className="w-2/3  py-8 relative">
        <div className="mt-14 flex flex-col gap-4 items-center w-full">
          <h1 className="text-5xl font-bold text-primary">Create Account</h1>
          <p className="text-light items-stretch">Fill in the information please</p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-4 ">
            {error && <p className="text-red-500">{error}</p>}

            <div className="flex flex-col gap-4 my-3 ">
              <Input
                startIcon={<AiOutlineUser className="text-primary" size={20} />}
                type="text"
                placeholder="Full Name"
                {...register("name", { required: true })}
              />
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
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isAgree}
                onChange={e => setIsAgree(e.target.checked)}
              />
              I agree to the terms and conditions
            </label>

            <button
              className="bg-primary text-white py-4 px-8 rounded-lg mt-6"
              type="submit">
              SignUp
            </button>
          </form>
        </div>
        <footer className="absolute bottom-4 w-full text-center">
          <p className="text-center text-sm text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} SynexFlow. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
