import { Terminal } from "lucide-react";
import {
  Alert as AlertCore,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

type AlertPropsType = {
  title: string;
  description: string;
  variant?: "default" | "destructive";
};

const Alert = ({ title, description, variant = "default" }: AlertPropsType) => (
  <AlertCore variant={variant}>
    <Terminal className="h-4 w-4" />
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>{description}</AlertDescription>
  </AlertCore>
);

export default Alert;
