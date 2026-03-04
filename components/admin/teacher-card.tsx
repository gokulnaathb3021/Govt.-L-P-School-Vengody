import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { Mail, UserRoundSearchIcon } from "lucide-react";
import AdminActions from "./admin-actions";
import AdminDelete from "./admin-delete";

export default function TeacherCard({
  name,
  email,
  status,
  history,
}: {
  name: string;
  email: string;
  status: string;
  history: boolean;
}) {
  return (
    <Card className="mt-5 border rounded-lg p-6 bg-background hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <CardTitle className="flex items-center gap-2">
          <UserRoundSearchIcon />
          {name}
        </CardTitle>
        <Badge
          className={cn(
            status === "pending" &&
              "bg-yellow-600/10 text-yellow-600 border-yellow-600",
            status === "approved" &&
              "bg-green-500/10 text-green-600 border-green-500",
            status === "rejected" &&
              "bg-red-500/10 text-red-500 border-red-500",
          )}
        >
          {status}
        </Badge>
      </div>
      <CardDescription className="flex items-center gap-2">
        <Mail />
        <p className="font-medium">{email}</p>
      </CardDescription>
      <CardFooter>
        {!history ? (
          <AdminActions email={email} />
        ) : (
          <AdminDelete email={email} status={status} />
        )}
      </CardFooter>
    </Card>
  );
}
