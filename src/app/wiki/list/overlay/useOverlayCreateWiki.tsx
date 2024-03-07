'use client';

import { useOverlay } from '@/packages/overlay';
import { useCallback } from 'react';
import CreateWikiModal from './CreateWikiModal';

export default function useOverlayCreateWiki() {
    const overlay = useOverlay();

    const openCreateWeightBottomSheet = useCallback(() => {
        return new Promise<boolean>((resolve) => {
            overlay.open(({ isOpen, close }) =>
                isOpen ? (
                    <CreateWikiModal
                        onClose={() => {
                            resolve(false);
                            close();
                        }}
                    />
                ) : (
                    <></>
                ),
            );
        });
    }, [overlay]);

    return openCreateWeightBottomSheet;
}
