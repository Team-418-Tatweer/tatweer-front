import { ROUTES } from "@/config/routes";
import Link from "next/link";
import { AlertsList } from "./list";
import { _alerts } from "@/mock/_alerts";
import { AlertHistory } from "./AlertHistory";

export function AlertsListComponent() {
  return (
    <div>
      <h1 className="text-primary text-2xl my-3 ">
        <Link href={ROUTES.alerts.base} className="font-extrabold">
          Alerts & Predections
        </Link>
      </h1>

      <AlertsList alerts={_alerts} />
      <div className="my-3" />
      <AlertHistory />
    </div>
  );
}
