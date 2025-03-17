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

const Password = ({
  label,
  placeholder,
  control,
  description,
  id,
  name,
  isDisabled = false,
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
              disabled={isDisabled}
              placeholder={placeholder}
              type="password"
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

export default Password;
