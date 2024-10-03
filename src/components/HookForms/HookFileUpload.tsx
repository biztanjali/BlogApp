import { MutableRefObject, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import Loading from 'components/loader/loader';
import { makeid } from 'utils/common';
import classNames from 'classnames';

export function HookFormFileUpload(props: any) {
  const fileInput: MutableRefObject<HTMLInputElement> = useRef(null!);
  const [uploading, setUploading] = useState<boolean>(false);
  const {
    labelClassName,
    captionClassName,
    baseClassName,
    label,
    caption,
    name,
    validation,
    control,
    errors,
    id,
    triggerOnChange,
    eventType,
    selectorString,
    report_id,
    location,
    templateName,
    buttonLabel = 'Upload',
  } = props;

  const handleFileUpload = (e: any, onChange: any) => {
    const data = new FormData();
    data.append('report_id', report_id);
    data.append('location', location);
    const fileName = makeid(15);
    data.append('imagename', `${fileName}.png`);
    data.append('image', e.target.files[0]);
    setUploading(true);
    fetch(
      `${process.env.REACT_APP_API_URL}/api/${templateName}/upload/uploadImage`,
      {
        method: 'POST',
        body: data,
      },
    )
      .then((res: any) => res.json())
      .then((result: any) => {
        setUploading(false);
        onChange(result?.data?.file_path);
        triggerOnChange(result?.data?.file_path, eventType, selectorString);
      })
      .catch((error) => {
        setUploading(false);
        console.log('File Upload Error', error);
      })
      .catch((error) => {
        console.log('File Upload Error', error);
      });
  };

  return (
    <div className={classNames(["flex flex-row flex-justify-between", baseClassName])}>
      {label && (
        <div>
          {label && <div className={classNames(["text-4 text-bold padding-b-4", labelClassName])}>{label}</div>}
          {caption && <div className={classNames(["text-3", captionClassName])}>{caption}</div>}
        </div>
      )}
      {control && (
        <Controller
          control={control}
          name={name}
          rules={validation || {}}
          render={({ field: { onChange, value, ref } }) => (
            <div className='upload-btn-wrapper '>
              <button
                type='button'
                className='btn selet_btn_upload'
                onClick={() => {
                  fileInput.current.click();
                }}
              >
                {buttonLabel}
              </button>
              <input
                type='file'
                accept='.jpeg, .jpg, .png'
                ref={fileInput}
                id={id}
                onChange={(e) => {
                  handleFileUpload(e, onChange);
                }}
              />
            </div>
          )}
        />
      )}
      {errors[name] && <div>{errors[name].message}</div>}
      <Loading show={uploading} />
    </div>
  );
}
