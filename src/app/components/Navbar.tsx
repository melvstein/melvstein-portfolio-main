import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex items-center justify-between bg-black w-full p-[20px] border-b-2 border-white z-10">
            <div className="flex items-center justify-center space-x-10 px-4">
                <div className="flex items-center justify-center">
                    LOGO
                </div>
                <div className="flex flex-col items-start justify-center">
                    <p className="text-5xl font-semibold">
                        Melvin Justine L. Bayogo
                    </p>
                    <p className="text-xl">
                        Fullstack web developer
                    </p>
                </div>
            </div>
            <p>2024-07-05</p>
        </nav>
    );
}