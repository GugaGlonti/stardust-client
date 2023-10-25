import { ForwardedRef, forwardRef } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  placeholder?: string;
}

const InputField = forwardRef((props: InputFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { label, type = 'text', placeholder = '', ...rest } = props;

  return (
    <div
      className='flex items-center  border border-gray-200 rounded dark:border-gray-700'
      {...rest}>
      {!!label && (
        <label
          htmlFor={label}
          className='pl-4 mr-4 w-full'>
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        name={label}
        id={label}
        className='bg-transparent block w-full before:placeholder:text-gold
        checked:bg-blue-600 checked:border-transparent focus:border-transparent focus:outline-none focus:ring-2'
        placeholder={placeholder}
        defaultValue={placeholder}
      />
    </div>
  );
});

export default InputField;
