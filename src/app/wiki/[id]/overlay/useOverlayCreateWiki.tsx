'use client';
import { useOverlay } from '@/packages/overlay';
import { useCallback } from 'react';
import UpdateWikiModal, { UpdateWikiModalProps } from './UpdateWikiModal';

export default function useOverlayUpdateWikiModal() {
    const overlay = useOverlay();

    const openUpdateWikiModal = useCallback(
        ({ id, contents, title }: Pick<UpdateWikiModalProps, 'id' | 'contents' | 'title'>) => {
            return new Promise<boolean>((resolve) => {
                overlay.open(({ isOpen, close }) =>
                    isOpen ? (
                        <UpdateWikiModal
                            id={id}
                            title={title}
                            contents={contents}
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
        },
        [overlay],
    );

    return openUpdateWikiModal;
}
