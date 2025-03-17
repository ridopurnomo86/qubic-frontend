import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type VisiblePropsType<TData> = {
  table: Table<TData>;
};

const Visible = <TData,>({ table }: VisiblePropsType<TData>) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="ml-auto">
        Columns
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      {table
        .getAllColumns()
        .filter((column) => column.getCanHide())
        .map((column) => (
          <DropdownMenuCheckboxItem
            key={column.id}
            className="capitalize"
            checked={column.getIsVisible()}
            onCheckedChange={(value) => column.toggleVisibility(!!value)}
          >
            {column.id}
          </DropdownMenuCheckboxItem>
        ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Visible;
