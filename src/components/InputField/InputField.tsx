interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: 'text' | 'password' | 'email';
    placeholder?: string;
}

export default function InputField({ label, type = 'text', placeholder = '', ...props }: InputFieldProps) {
    return (
        <div
            className="rounded-md m-1 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600"
            {...props}>
            {!!label && (
                <label
                    htmlFor={label}
                    className="block text-xs font-medium text-gray-900">
                    {label}
                </label>
            )}
            <input
                type="text"
                name="name"
                id="name"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder={placeholder}
            />
        </div>
    );
}
