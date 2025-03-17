import { Control, FieldValues } from "react-hook-form";
import Input from "./components/Input";
import Password from "./components/Password";
import { FormPropstype } from "./types";
import { Form as FormCore } from "@/components/ui/form";

const getComponent = (type: string) => {
  switch (type) {
    case "password":
      return Password;
    default:
      return Input;
  }
};

const Form = <T extends FieldValues>({
  form,
  onSubmit,
  forms = [],
  children,
  className = "",
  isSubmit = false,
}: FormPropstype<T>) => (
  <FormCore {...form}>
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={`space-y-2 ${className}`}
    >
      {forms.map((item) => {
        const Comp = getComponent(item.type);
        return (
          <Comp
            key={item.id}
            control={form.control as Control<FieldValues>}
            id={item.id}
            label={item.label}
            name={item.name}
            description={item.description}
            placeholder={item.placeholder}
            items={item.items}
            isDisabled={item.isDisabled || isSubmit}
            emptyState={item.emptyState}
            isLoading={item.isLoading}
          />
        );
      })}
      {children}
    </form>
  </FormCore>
);

export default Form;
