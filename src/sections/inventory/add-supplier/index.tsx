"use client";
import { Card } from "@/components/Card";
import { ROUTES } from "@/config/routes";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";

interface SupplierFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export function AddSupplierComponent() {
  const methods = useForm<SupplierFormData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: SupplierFormData) => console.log(data);

  return (
    <div>
      <h1 className="text-primary text-2xl my-3">
        <Link href={ROUTES.inventory.basePath} className="font-extrabold">
          Inventory
        </Link>
        / <span className="font-normal">Add Supplier</span>
      </h1>
      <Card className="border border-primary">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800">Phone</label>
              <input
                {...register("phone", { required: "Phone is required" })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-800">Address</label>
              <textarea
                {...register("address", { required: "Address is required" })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                rows={3}
              />
              {errors.address && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 active:bg-primary/95 transition-colors duration-200 focus:ring-2 focus:ring-primary/50">
              Submit
            </button>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
}
