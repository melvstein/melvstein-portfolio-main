import Link from "next/link";

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
        <nav className="fixed top-0 bottom-0 left-0 flex flex-col items-center justify-center bg-red-500 font-semibold">
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