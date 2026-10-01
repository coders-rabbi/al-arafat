import { inputClass } from "@/utils/Style";
import { forwardRef, InputHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, id, ...rest }, ref) => {
    const inputId = id ?? rest.name;

    return (
      <div>
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          className={inputClass(!!error)}
          {...rest}
        />
        {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
export default FormInput;