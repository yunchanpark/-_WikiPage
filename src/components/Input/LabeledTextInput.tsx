import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type LabeledTextInputProps = {
    label: string;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className'>;

export default function LabeledTextInput({ label, ...rest }: LabeledTextInputProps) {
    return (
        <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                {...rest}
                type="text"
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none ${rest.disabled ? 'bg-gray-300' : 'bg-white'}`}
            />
        </div>
    );
}
