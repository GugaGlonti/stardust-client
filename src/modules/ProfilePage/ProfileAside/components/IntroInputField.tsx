import React, { useState } from 'react';

interface IntroInputFieldProps {
  children?: any;
  label: string;
  ref?: any;
}
export const IntroInputField = React.forwardRef(({ label, children, ref }: IntroInputFieldProps) => {
  const text = children ? children : label;

  let [value, setValue] = useState<string>(children);

  if (!value) {
    value = '';
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className='flex items-center gap-2 text-xs m-2'>
      <input
        ref={ref}
        placeholder={text}
        className='w-full'
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
});
