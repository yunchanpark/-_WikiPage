'use client';

import Button from '@/components/Button';
import useOverlayUpdateWikiModal from '../overlay/useOverlayCreateWiki';

type OpenUpdateModalButtonProps = {
    id: string;
    title: string;
    contents: string;
};

export default function OpenUpdateModalButton({ id, title, contents }: OpenUpdateModalButtonProps) {
    const openUpdateWikiModal = useOverlayUpdateWikiModal();

    return (
        <span>
            <Button onClick={() => openUpdateWikiModal({ id, title, contents })} label="수정" size="medium" color="blue" />
        </span>
    );
}
