import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";

type InputFilterPropsType<TData> = {
  table: Table<TData>;
  valueColumn: string;
  placeholder: string;
};

const InputFilter = <TData,>({
  table,
  valueColumn,
  placeholder,
}: InputFilterPropsType<TData>) => (
  <Input
    placeholder={placeholder}
    value={(table.getColumn(valueColumn)?.getFilterValue() as string) ?? ""}
    onChange={(event) =>
      table.getColumn(valueColumn)?.setFilterValue(event.target.value)
    }
    className="max-w-sm mr-4"
  />
);

export default InputFilter;
