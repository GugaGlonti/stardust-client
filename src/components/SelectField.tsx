import { forwardRef } from 'react';

interface SelectFieldProps {
  label?: string;
  options: string[];
  placeholder?: string;
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>((props, ref) => {
  const { label, placeholder = '', options, ...rest } = props;

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
      <select
        ref={ref}
        className='bg-transparent block w-full before:placeholder:text-gold'
        name={label}
        placeholder={placeholder}
        defaultValue={placeholder}>
        {options.map((option, index) => (
          <option
            key={index}
            value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default SelectField;
