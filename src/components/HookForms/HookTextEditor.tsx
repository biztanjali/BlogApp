import { Controller } from 'react-hook-form';
import RichTextEditor from 'components/richTextEditor';
import classNames from "classnames";
import "./HookForms.scss";

export function HookTextEditor(props: any) {
  const {
    label,
    caption,
    labelClassName,
    captionClassName,
    name,
    validation,
    errors,
    baseClassName,
    control,
    defaultValue,
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
            <RichTextEditor
              defaultValue={defaultValue}
              handleChange={(data: any) => {
                onChange(data);
                triggerOnChange(data, eventType, selectorString);
              }}
            />
          )}
        />
      )}
      {errors[name] && <div>{errors[name].message}</div>}
    </div>
  );
}
