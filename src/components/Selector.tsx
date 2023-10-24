interface RadioSelectorProps {
  label: string;
  defaultChecked?: boolean;
}

export default function RadioSelector({ label, defaultChecked = false, ...props }: RadioSelectorProps) {
  return (
    <div
      className='flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700'
      {...props}>
      <input
        id={label}
        type='radio'
        name='gameMode'
        className='w-4 h-4 accent-secondary border-gray-300 rounded dark:border-gray-700 focus:ring-gray-500'
      />
      <label
        htmlFor='gameMode'
        className='w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
        {label}
      </label>
    </div>
  );
}
