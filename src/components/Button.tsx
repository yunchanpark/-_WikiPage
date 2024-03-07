import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type ButtonProps = {
    label: ReactNode;
    variant?: 'filled' | 'outline' | 'text';
    size?: 'small' | 'medium' | 'large';
    color?: 'indigo' | 'blue';
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'>;

const buttonStyles = {
    filled: 'text-white border-transparent',
    outline: 'bg-transparent hover:bg-indigo-50 text-indigo-600 border-indigo-600 hover:text-indigo-700',
    text: 'bg-transparent hover:bg-indigo-50 text-indigo-600 hover:text-indigo-700 border-transparent',
};

const sizeStyles = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-md',
};

const colorStyles = {
    indigo: 'bg-indigo-600 hover:bg-indigo-700',
    blue: 'bg-blue-500 hover:bg-blue-700',
};

export default function Button({
    label,
    variant = 'filled',
    size = 'medium',
    type = 'submit',
    color = 'indigo',
    ...rest
}: ButtonProps) {
    const className = `
        flex justify-center w-full font-medium border rounded-md shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
        ${buttonStyles[variant]} ${sizeStyles[size]} ${colorStyles[color]}
    `;

    return (
        <button {...rest} type={type} className={className}>
            {label}
        </button>
    );
}
