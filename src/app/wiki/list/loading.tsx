import { range } from '@/utils/array';

export default function WikiLoadingSkeleton() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="animate-pulse flex flex-col items-center w-full max-w-4xl px-5">
                <div className="flex justify-between items-center w-full mb-5">
                    <p className="bg-gray-300 h-8 w-1/4 rounded" />
                    <span className="bg-gray-300 h-10 w-24 rounded" />
                </div>
                <ul className="min-h-[300px] h-[300px] w-full">
                    {range(5).map((index) => (
                        <li key={index}>
                            <div className="block hover:bg-gray-100 p-3 rounded-lg">
                                <p className="bg-gray-300 h-6 rounded w-3/4" />
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className="flex justify-center gap-2 mt-4">
                    <span className="ml-2 w-[42px] h-[29px] rounded-full bg-gray-300" />
                    {range(5).map((page) => (
                        <li key={page} className="flex">
                            <span className="w-[35px] h-[30px] rounded-full bg-gray-300" />
                        </li>
                    ))}
                    <span className="ml-2 w-[42px] h-[29px] rounded-full bg-gray-300" />
                </ul>
            </div>
        </div>
    );
}
