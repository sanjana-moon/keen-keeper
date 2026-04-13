import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="text-center max-w-md">

                <h1 className="text-7xl font-bold text-[#244D3F]">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>
                <p className="mt-2 text-gray-500">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                <Link href="/">
                    <button className="mt-6 px-6 py-2 rounded-lg text-white bg-[#244D3F] hover:opacity-90 transition">
                        Go Back Home
                    </button>
                </Link>

            </div>
        </div>
    );
}