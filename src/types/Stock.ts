export interface IStock {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  supplier: string;
  category: string;
  date: string;
  status: "available" | "out of stock";
  description: string;
}
