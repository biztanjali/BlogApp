import { Controller } from 'react-hook-form';
import classNames from "classnames";

import "./HookForms.scss";

interface IProps {
  label: string;
  labelClassName?: string;
  baseClassName?: string;
  name: string;
  validation?: any;
  control?: any;
  errors?: any;
  inputClassName?: string;
  id?: any;
  triggerOnChange?: any;
  caption?: string;
  captionClassName?: string;
}

export function HookFormInput(props: IProps) {
  const {
    label,
    caption,
    labelClassName,
    captionClassName,
    baseClassName,
    name,
    validation,
    control,
    errors,
    inputClassName,
    id,
    triggerOnChange,
  } = props;
  return (
    <div className={classNames(['flex flex-column custom-input', baseClassName])}>
      {label && <div className={classNames(["text-4 text-bold padding-b-4", labelClassName])}>{label}</div>}
      {caption && <div className={classNames(["text-3", captionClassName])}>{caption}</div>}
      {control && (
        <Controller
          control={control}
          name={name}
          rules={validation || {}}
          render={({ field: { onChange, value, ref } }) => (
            <input
              value={value}
              id={id}
              className={inputClassName || ""}
              onChange={(e) => {
                onChange(e.target.value);
                if(typeof triggerOnChange === "function") {
                  triggerOnChange(e.target.value);
                }
              }}
            />
          )}
        />
      )}
      {errors[name] && <div>{errors[name].message}</div>}
    </div>
  );
}
