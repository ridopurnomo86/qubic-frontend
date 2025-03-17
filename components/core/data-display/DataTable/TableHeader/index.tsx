import { flexRender } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";
import {
  TableHead,
  TableHeader as CoreTableHeader,
  TableRow,
} from "@/components/ui/table";

type TableHeaderPropsType<TData> = {
  table: Table<TData>;
};

const TableHeader = <TData,>({ table }: TableHeaderPropsType<TData>) => (
  <CoreTableHeader>
    {table.getHeaderGroups().map((headerGroup) => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <TableHead key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        ))}
      </TableRow>
    ))}
  </CoreTableHeader>
);

export default TableHeader;
