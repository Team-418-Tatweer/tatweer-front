import { Alert } from "@/types/Alert";

export const _alerts: Alert[] = [
  {
    id: "1",
    degre: "low",
    state: "resolved",
    title: "Low priority alert",
    description: "This is a low priority alert",
    element: "Products > A",
  },
  {
    id: "2",
    degre: "medium",
    state: "pending",
    title: "Medium priority alert",
    description: "This is a medium priority alert",
    element: "Products > B",
  },
  {
    id: "3",
    degre: "high",
    state: "resolved",
    title: "High priority alert",
    description: "This is a high priority alert",
    element: "Products > C",
  },
  {
    id: "4",
    degre: "fatal",
    state: "pending",
    title: "Fatal priority alert",
    description: "This is a fatal priority alert",
    element: "Products > D",
  },
];

export const _alerts_history = {
  resolved: [2, 3, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0],
  open: [10, 12, 8, 6, 7, 9, 11, 10, 8, 6, 7, 9, 11, 10, 8, 6],
  labels: [
    "9/1",
    "9/3",
    "9/5",
    "9/7",
    "9/9",
    "9/11",
    "9/13",
    "9/15",
    "9/17",
    "9/19",
    "9/21",
    "9/23",
    "9/25",
    "9/27",
    "9/29",
    "9/31",
  ],
  averageDailyCreated: 0.2,
  monthlyCreated: 6,
  averageDailyResolved: 0.1,
  monthlyResolved: 3,
};
