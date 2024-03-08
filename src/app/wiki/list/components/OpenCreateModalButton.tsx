'use client';

import Button from '@/components/Button';
import useOverlayCreateWiki from '../overlay/useOverlayCreateWiki';

export default function OpenCreateModalButton() {
    const openCreateWikiModal = useOverlayCreateWiki();

    return (
        <span>
            <Button onClick={openCreateWikiModal} label="위키 생성" size="medium" color="indigo" />
        </span>
    );
}
