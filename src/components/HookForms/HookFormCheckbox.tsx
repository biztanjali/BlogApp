import classNames from 'classnames';
import { Controller } from 'react-hook-form';

export function HookFormCheckbox({ input, ...props }: any) {
  const {
    label,
    caption,
    labelClassName,
    captionClassName,
    baseClassName,
    labelWrapper,
    name,
    validation,
    control,
    errors,
    inputClassName,
    id,
    triggerOnChange,
    eventType,
    selectorString,
    checkedValue = 'block',
    uncheckedValue = 'none',
  } = props;
  return (
    <div className={classNames(["flex flex-row flex-align-center", baseClassName])}>
      {control && (
        <Controller
          control={control}
          name={name}
          rules={validation || {}}
          render={({ field: { onChange, value, ref } }) => (
            <input
              type='checkbox'
              className={inputClassName || ''}
              id={id}
              onChange={async ({ target: { checked } }: any) => {
                onChange(checked ? 1 : 0);
                if(typeof triggerOnChange === "function") {
                  triggerOnChange(
                    checked ? checkedValue : uncheckedValue,
                    eventType,
                    selectorString,
                  );
                } 
              }}
              checked={value || false}
            />
          )}
        />
      )}
      <div className={labelWrapper || ''}>
        {label && <div className={classNames(["text-4 text-primary-color padding-l-", labelClassName])}>{label}</div>}
        {caption && <span className={classNames(["text-3 flex flex-row padding-t-2", captionClassName])}>{caption}</span>}
      </div>
      {errors[name] && <div>{errors[name].message}</div>}
    </div>
  );
}
