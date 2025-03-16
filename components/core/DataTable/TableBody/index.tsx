import { flexRender } from "@tanstack/react-table";
import type { ColumnDef, Table } from "@tanstack/react-table";
import {
  TableRow,
  TableBody as CoreTableBody,
  TableCell,
} from "@/components/ui/table";

type TableBodyPropsType<TData, TValue> = {
  table: Table<TData>;
  columns: ColumnDef<TData, TValue>[];
};

const TableBody = <TData, TValue>({
  table,
  columns,
}: TableBodyPropsType<TData, TValue>) => (
  <CoreTableBody>
    {table.getRowModel().rows?.length ? (
      table.getRowModel().rows.map((row) => (
        <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))
    ) : (
      <TableRow>
        <TableCell colSpan={columns.length} className="h-24 text-center">
          No results.
        </TableCell>
      </TableRow>
    )}
  </CoreTableBody>
);

export default TableBody;
