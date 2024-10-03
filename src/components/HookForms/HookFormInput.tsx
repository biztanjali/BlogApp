import { Controller } from 'react-hook-form';
import classNames from "classnames";

import "./HookForms.scss";

export function HookFormInput(props: any) {
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
    eventType,
    selectorString,
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
                  triggerOnChange(e.target.value, eventType, selectorString);
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
