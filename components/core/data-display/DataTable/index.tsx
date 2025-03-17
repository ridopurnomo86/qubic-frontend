"use client";

import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import TableAction from "./TableAction";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { Table } from "@/components/ui/table";

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  placeholder: string;
  filterColumn: string;
  onValueChange: (prev: string) => void;
  filterData: Array<{ name: string; value: string }>;
  selectPlaceholder: string;
};

const DataTable = <TData, TValue>({
  columns,
  data,
  placeholder,
  filterColumn,
  onValueChange,
  filterData,
  selectPlaceholder,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      rowSelection,
      columnFilters,
    },
  });

  return (
    <div>
      <TableAction
        table={table}
        data={filterData}
        filterColumn={filterColumn}
        onValueChange={onValueChange}
        placeholder={placeholder}
        selectPlaceholder={selectPlaceholder}
      />
      <div className="rounded-md border w-full">
        <Table className="w-full">
          <TableHeader table={table} />
          <TableBody columns={columns} table={table} />
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
