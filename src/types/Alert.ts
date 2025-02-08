export interface Alert {
  id: string;
  degre: "low" | "medium" | "high" | "fatal";
  state: "resolved" | "pending";
  title: string;
  description: string;
  element: string;
}
