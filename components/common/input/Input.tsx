import React from "react";

interface IProps {
  label: string;
  placeholder: string;
  title: string;
  value: string | number;
  onChange(value: any): void;
  name: string;
}

const Input = ({
  label,
  placeholder,
  title,
  value,
  onChange,
  name,
}: IProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        title={title}
        onChange={({ target }) => onChange(target)}
      />
    </div>
  );
};

export default Input;
