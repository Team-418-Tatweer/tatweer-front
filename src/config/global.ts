export interface CONFIG_GLOBAL {
  apiUrl: string;
}

export const CONFIG: CONFIG_GLOBAL = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL!,
};
