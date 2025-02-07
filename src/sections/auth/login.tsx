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
      <div className="w-2/3 ps-6 py-8 ">
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
            <Link className="text-primary font-medium" href="#">
              Forgot password ?
            </Link>

            <button
              className="bg-primary text-white py-4 px-8 rounded-lg mt-6"
              type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/3 bg-primary"></div>
    </div>
  );
}
