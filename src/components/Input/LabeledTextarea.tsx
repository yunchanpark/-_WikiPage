import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

type LabeledTextareaProps = {
    label: string;
} & Omit<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'className'>;

export default function LabeledTextarea({ label, ...rest }: LabeledTextareaProps) {
    return (
        <div>
            <label htmlFor="contents" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <textarea
                {...rest}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
    );
}
