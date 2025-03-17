import {
  Select as CoreSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectPropsType = {
  data: Array<{ value: string; name: string }>;
  placeholder: string;
  className?: string;
  defaultValue?: string;
  onOpenChange?: () => void;
  isDisabled?: boolean;
  onValueChange?: (value: string) => void;
};

const Select = ({
  data = [],
  placeholder,
  className,
  defaultValue,
  onOpenChange,
  onValueChange,
  isDisabled,
}: SelectPropsType) => (
  <CoreSelect
    defaultValue={defaultValue}
    onOpenChange={onOpenChange}
    onValueChange={onValueChange}
    disabled={isDisabled}
  >
    <SelectTrigger className={className}>
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {data.map((item) => (
        <SelectItem value={item.value} key={item.value}>
          {item.name}
        </SelectItem>
      ))}
    </SelectContent>
  </CoreSelect>
);

export default Select;
