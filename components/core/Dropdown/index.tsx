import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DropdownPropsType = {
  triggerComp: React.ReactNode | React.ReactElement;
  label: string;
  menuItems: Array<{ id: number; name: string }>;
};

const Dropdown = ({
  triggerComp,
  label,
  menuItems = [],
}: DropdownPropsType) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>{triggerComp}</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>{label}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      {menuItems.map((item) => (
        <DropdownMenuItem key={item.id}>{item.name}</DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Dropdown;
