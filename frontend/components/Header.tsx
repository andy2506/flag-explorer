import Link from 'next/link';

export default function Header() {
    return (
        <header className="py-4 bg-white mb-6">
            <div className="max-w-6xl mx-auto">
                <Link href="/" className="text-blue-600 text-3xl font-bold mb-4">
                    Flag Explorer
                </Link>
            </div>
        </header>
    );
}