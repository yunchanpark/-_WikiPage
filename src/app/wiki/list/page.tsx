import prisma from '@/db';
import Link from 'next/link';

export default async function WikiListPage() {
    const wikiList = await prisma.wiki.findMany();

    return (
        <main>
            <Link href={'/wiki/create'}>생성</Link>
            <p>위키 조회 페이지</p>
            {wikiList.map(({ title, contents, id }) => {
                return (
                    <div key={id}>
                        <p>{title}</p>
                        <p>{contents}</p>
                    </div>
                );
            })}
        </main>
    );
}
