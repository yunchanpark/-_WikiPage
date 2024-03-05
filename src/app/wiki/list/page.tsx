import prisma from '@/db';

export default async function WikiListPage() {
    const wikiList = await prisma.wiki.findMany();

    return (
        <main>
            <p>위키 조회 페이지</p>
            {wikiList.map(({ title, content, id }) => {
                return (
                    <div key={id}>
                        <p>{title}</p>
                        <p>{content}</p>
                    </div>
                );
            })}
        </main>
    );
}
