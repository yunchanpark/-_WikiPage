'use client';

import Button from '@/components/Button';
import LabeledTextInput from '@/components/Input/LabeledTextInput';
import LabeledTextarea from '@/components/Input/LabeledTextarea';
import useForm from '@/hooks/useForm';
import useCreateWiki from '../hooks/useCreateWiki';

type CreateWikiModalProps = {
    onClose(): void;
};

export default function CreateWikiModal({ onClose }: CreateWikiModalProps) {
    const { mutate } = useCreateWiki({ onSuccess: onClose });
    const { values, handleChange, handleSubmit } = useForm(
        {
            title: '',
            contents: '',
        },
        {
            async onSubmit(_, { contents, title }) {
                mutate({ contents, title });
            },
        },
    );

    return (
        <div
            className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-5 flex flex-col items-center justify-center"
            onClick={onClose}
        >
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow" onClick={(e) => e.stopPropagation()}>
                <p className="text-xl font-bold text-center">위키 생성 페이지</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <LabeledTextInput
                        label="제목"
                        name="title"
                        id="title"
                        value={values.title}
                        placeholder="제목"
                        required
                        onChange={handleChange}
                    />
                    <LabeledTextarea
                        label="본문"
                        name="contents"
                        id="contents"
                        value={values.contents}
                        onChange={handleChange}
                        placeholder="본문"
                        required
                        rows={4}
                    />
                    <Button label="생성" type="submit" variant="filled" size="medium" />
                </form>
            </div>
        </div>
    );
}
