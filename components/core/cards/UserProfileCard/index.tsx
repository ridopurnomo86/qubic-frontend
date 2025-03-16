import { SquareUserRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type UserProfileCardPropsType = {
  name: string;
  email: string;
  phone: string;
  className?: string;
};

const UserProfileCard = ({
  name,
  email,
  phone,
  className,
}: UserProfileCardPropsType) => (
  <Card className={cn("w-[600px]", className)}>
    <CardContent className="flex gap-10">
      <div className="flex items-center space-x-4 rounded-md">
        <SquareUserRound />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">Owner name:</p>
          <p className="text-sm text-muted-foreground">{name}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-4 rounded-md">
          <div className="flex items-center">
            <p className="text-sm font-medium leading-none">
              Owner Email:&nbsp;
            </p>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>
        </div>
        <span className="w-full h-[1px] my-[1px] bg-gray-100 block" />
        <div className="flex items-center space-x-4 rounded-md">
          <div className="flex items-center">
            <p className="text-sm font-medium leading-none">
              Owner phone:&nbsp;
            </p>
            <p className="text-sm text-muted-foreground">{phone}</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default UserProfileCard;
