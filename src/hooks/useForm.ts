import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

interface Options<TData> {
    onSubmit(e: FormEvent<HTMLFormElement>, params: TData): void;
}

export default function useForm<TData extends Record<string, unknown>>(initialValues: TData, options?: Options<TData>) {
    const [values, setValues] = useState(initialValues);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }, []);

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const formData = Object.keys(initialValues).reduce<TData>((prev, dataKey) => {
                return { ...prev, [dataKey]: e.currentTarget[dataKey].value };
            }, {} as TData);

            options?.onSubmit?.(e, formData);
        },
        [initialValues, options],
    );

    return {
        values,
        handleChange,
        handleSubmit,
    };
}
