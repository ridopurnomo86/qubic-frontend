import { Table } from "@tanstack/react-table";
import Visible from "./Visible";
import InputFilter from "./InputFilter";
import Select from "@/components/core/data-entry/Select";

type TableActionPropsType<TData> = {
  table: Table<TData>;
  placeholder: string;
  filterColumn: string;
  onValueChange: (prev: string) => void;
  data: Array<{ name: string; value: string }>;
  selectPlaceholder: string;
};

const TableAction = <TData,>({
  table,
  placeholder,
  filterColumn,
  onValueChange,
  data,
  selectPlaceholder,
}: TableActionPropsType<TData>) => (
  <div className="flex items-center py-4">
    <div className="flex items-center">
      <InputFilter
        table={table}
        placeholder={placeholder}
        valueColumn={filterColumn}
      />
      <Select
        defaultValue={filterColumn}
        onValueChange={onValueChange}
        data={data}
        placeholder={selectPlaceholder}
      />
    </div>
    <Visible table={table} />
  </div>
);

export default TableAction;
