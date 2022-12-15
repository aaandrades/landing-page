import React from "react";
import styles from "./Input.module.css";

interface IProps {
  label: string;
  placeholder: string;
  title: string;
  value: string | number;
  onChange(value: any): void;
  name: string;
  className?: string;
  type: string;
  required: boolean;
}

const Input = ({
  label,
  placeholder,
  title,
  value,
  onChange,
  name,
  type,
  required,
  className = "",
}: IProps) => {
  return (
    <div className={`${styles.input_container} ${className}`}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        required={required}
        type={type}
        className={styles.input}
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
