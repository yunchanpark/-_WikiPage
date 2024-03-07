import useBaseCreateWiki from '@/service/wiki/mutations/useBaseCreateWiki';
import { useRouter } from 'next/navigation';

type UseCreateWikiProps = {
    onSuccess(): void;
};

export default function useCreateWiki({ onSuccess }: UseCreateWikiProps) {
    const router = useRouter();

    return useBaseCreateWiki({
        onSuccess: () => {
            router.refresh();
            onSuccess();
        },
    });
}
