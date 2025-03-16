import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type InformationCardPropsType = {
  title: string;
  subtitle: string;
};

const InformationCard = ({ title, subtitle }: InformationCardPropsType) => (
  <Card className="max-w-[300px] mb-4">
    <CardHeader>
      <CardTitle className="font-semibold text-2xl">{title}</CardTitle>
      <CardDescription>{subtitle}</CardDescription>
    </CardHeader>
  </Card>
);

export default InformationCard;
