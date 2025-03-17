import { InputPropsType } from "../../types";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input as InputCore } from "@/components/ui/input";

const Input = ({
  label,
  placeholder,
  control,
  description,
  id,
  name,
  isDisabled = false,
  type,
  min,
  max,
  step,
}: InputPropsType) => (
  <FormField
    key={id}
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="gap-1">
        <FormLabel>{label}</FormLabel>
        <div className="relative">
          <FormControl>
            <InputCore
              type={type}
              disabled={isDisabled}
              placeholder={placeholder}
              min={min}
              max={max}
              step={step}
              {...field}
            />
          </FormControl>
        </div>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default Input;
