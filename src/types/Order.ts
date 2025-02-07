export interface IOrder {
  id: string;
  client: string;
  address: string;
  date: string;
  Region: string;
  totalPrice: number;
  status: "pending" | "completed" | "cancelled";
}
