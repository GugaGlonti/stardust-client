interface SignUpFormInputProps {
    value: string;
    label: string;
    id: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignUpFormInput({ label, id, placeholder = '', value, onChange, ...props }: SignUpFormInputProps) {
    return (
        <div {...props}>
            <label
                htmlFor={id}
                className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input
                    onChange={onChange}
                    value={value}
                    id={id}
                    name={id}
                    type={id}
                    autoComplete={id}
                    placeholder={placeholder}
                    required
                    className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    );
}
