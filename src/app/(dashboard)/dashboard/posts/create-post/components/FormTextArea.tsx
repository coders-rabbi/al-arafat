import { inputClass } from "@/utils/Style";
import { forwardRef, TextareaHTMLAttributes } from "react";

type FormTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, id, rows = 4, ...rest }, ref) => {
    const inputId = id ?? rest.name;

    return (
      <div>
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium">
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          aria-invalid={!!error}
          className={`${inputClass(!!error)} resize-y`}
          {...rest}
        />
        {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
      </div>
    );
  },
);

FormTextarea.displayName = "FormTextarea";
export default FormTextarea;