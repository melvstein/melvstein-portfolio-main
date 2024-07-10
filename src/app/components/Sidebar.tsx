import Link from "next/link";
import MelvsteinLogoWhite from "../../../public/images/logo/melvstein_logo_white.png"
import Image from "next/image";

export default function Sidebar() {
    const navlist = [
        {
            "id": 1,
            "name": "Home",
            "href": "#home-section"
        },
        {
            "id": 2,
            "name": "Skills",
            "href": "#skills-section"
        },
        {
            "id": 3,
            "name": "Projects",
            "href": "#projects-section"
        },
        {
            "id": 4,
            "name": "Contact",
            "href": "#contact-section"
        }
    ];

    return (
        <nav className="fixed top-0 bottom-0 left-0 flex flex-col items-center justify-between bg-blue-900 font-semibold z-10 p-[20px]">
            <div className="flex items-center justify-center">
                <Link href={"/"}>
                    <Image src={MelvsteinLogoWhite} width={80} height={80} alt="melvstein logo white" />
                </Link>
            </div>
            <ul className="flex flex-col items-center justify-center space-y-4">
                {
                    navlist.map((list) => (
                        <li key={list.id}>
                            <Link href={list.href} className="hover:text-blue-500 px-4">
                                {list.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}