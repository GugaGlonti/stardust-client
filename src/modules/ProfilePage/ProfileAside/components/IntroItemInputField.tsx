import React from 'react';

interface IntroItemInputFieldProps {
  label: string;
  type?: 'text' | 'password' | 'email' | 'date' | 'tel';
  placeholder?: string;
  defaultValue?: string;
}
type Ref = HTMLButtonElement | HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
// const IntroItemInputField = React.forwardRef(({ label, type = 'text', placeholder = '', defaultValue = '', ...props }: IntroItemInputFieldProps) => {
export const IntroItemInputField = React.forwardRef<Ref, IntroItemInputFieldProps>((props, ref: any) => {
  const { label, type = 'text', placeholder = '', defaultValue = '' } = props;

  return (
    <div
      {...props}
      className='m-2 rounded-md text-dark'>
      <label htmlFor={label}>{label}</label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='w-full border-0 text-dark placeholder-text-gray-400 rounded-md focus:ring-0 sm:text-sm sm:leading-6 bg-gray-200'
      />
    </div>
  );
});
