import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="404 Not Found" width={300} height={100} className="mb-8" />
            <h1 className="md:text-4xl text-xl font-bold text-black dark:text-black mb-4">404 Not Found</h1>
            <p className="text-lg text-gray-700 mb-2 text-center">Whoops! That page doesn’t exist.</p>
            <p className="text-md text-gray-600  mb-4 text-center">Here are some helpful links instead:</p>
            <ul className="flex gap-3 justify-center items-center">
                <li>
                    <Link href="/" className="text-blue-600 hover:text-red-600 font-bold font-prosto-one">Home</Link>
                </li>
                <li>
                    <Link href="/search" className="text-blue-600 hover:text-red-600 font-bold font-prosto-one">Search</Link>
                </li>
                <li>
                    <Link href="/help" className="text-blue-600 hover:text-red-600 font-bold font-prosto-one">Help</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-blue-600 hover:text-red-600 font-bold font-prosto-one">Contact</Link>
                </li>
            </ul>
        </div>
    );
}
