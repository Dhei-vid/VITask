import { FC } from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: FC<InputFieldProps> = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={rest.id} className="form-label">
        {label}
      </label>
      <input
        className="form-control ring ring-gray-400 rounded-lg p-2 bg-gray-100"
        {...rest}
      />
    </div>
  );
};

export default InputField;
