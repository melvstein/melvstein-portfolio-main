import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-black w-full border-b-2 border-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center justify-center space-x-10">
                    <div className="flex flex-col items-start justify-center space-y-4">
                        <p className="text-5xl font-semibold">
                            Melvin Justine L. Bayogo
                        </p>
                        <p className="text-xl">
                            Fullstack web developer
                        </p>
                    </div>
                </div>
                <p>2024-07-05</p>
            </div>
        </nav>
    );
}