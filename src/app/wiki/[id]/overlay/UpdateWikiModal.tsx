'use client';

import Button from '@/components/Button';
import LabeledTextInput from '@/components/Input/LabeledTextInput';
import LabeledTextarea from '@/components/Input/LabeledTextarea';
import useForm from '@/hooks/useForm';
import useUpdateWiki from '../hooks/useUpdateWiki';

export type UpdateWikiModalProps = {
    id: string;
    title: string;
    contents: string;
    onClose(): void;
};

export default function UpdateWikiModal({ id, title, contents, onClose }: UpdateWikiModalProps) {
    const { mutate } = useUpdateWiki({ id, onSuccess: onClose });
    const { values, handleChange, handleSubmit } = useForm(
        { contents },
        {
            onSubmit(_, { contents }) {
                mutate({ contents, id });
            },
        },
    );

    return (
        <div
            className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-5 flex flex-col items-center justify-center"
            onClick={onClose}
        >
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow" onClick={(e) => e.stopPropagation()}>
                <p className="text-xl font-bold text-center">위키 업데이트 페이지</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <LabeledTextInput label="제목" name="title" id="title" value={title} disabled required />
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
                    <Button label="업데이트" type="submit" variant="filled" size="medium" />
                </form>
            </div>
        </div>
    );
}
