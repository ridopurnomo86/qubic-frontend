import Link from "next/link";
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
  menuItems: Array<{
    id: number;
    name: string;
    onClickMenuItem?: () => void;
    isItemNavigate: boolean;
    navigate?: string;
  }>;
};

const renderItemNavigation = ({
  navigateTo,
  name,
  key,
}: {
  navigateTo: string;
  name: string;
  key: number;
}) => (
  <Link href={navigateTo} key={key}>
    <DropdownMenuItem>{name}</DropdownMenuItem>
  </Link>
);

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
      {menuItems.map((item) =>
        item.isItemNavigate ? (
          renderItemNavigation({
            navigateTo: String(item.navigate),
            name: item.name,
            key: item.id,
          })
        ) : (
          <DropdownMenuItem key={item.id} onClick={item.onClickMenuItem}>
            {item.name}
          </DropdownMenuItem>
        ),
      )}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Dropdown;
