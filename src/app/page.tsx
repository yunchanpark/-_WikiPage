import { redirect } from 'next/navigation';

export default function Home() {
    redirect('/wiki/list?page=1');
}
