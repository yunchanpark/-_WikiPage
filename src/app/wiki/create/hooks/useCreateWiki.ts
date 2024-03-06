import useBaseCreateWiki from '@/service/wiki/mutations/useBaseCreateWiki';
import { useRouter } from 'next/navigation';

export default function useCreateWiki() {
    const router = useRouter();

    return useBaseCreateWiki({
        onSuccess: () => {
            router.replace('/wiki/list?page=1');
        },
    });
}
