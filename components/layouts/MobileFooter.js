import { useState, useEffect } from "react";
import Link from "next/link";
import SunIcon from "../icons/SunIcon";
import { useRouter } from "next/router";
import MoonIcon from "../icons/MoonIcon";
function ThemeSwitcher() {
    return (
        <div className="flex items-center justify-center">
            <button
                type="button"
                aria-label="Use Dark Mode"
                onClick={() => {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                } }
                className="dark:hidden block items-center h-full dark:bg-primary rounded-3xl align-center transition focus:outline-none overflow-hidden">
                <MoonIcon />
            </button>
            <button
                type="button"
                aria-label="Use Light Mode"
                onClick={() => {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                } }
                className="hidden items-center h-full bg-primary dark:bg-transparent rounded-3xl dark:block align-center transition focus:outline-none overflow-hidden">
                <SunIcon />
            </button>
        </div>
    );
}
export default function Header({name}) {
    const [animateHeader, setAnimateHeader] = useState(false);
    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 10) {
                setAnimateHeader(true);
            } else setAnimateHeader(false);
        };
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);
    const menuItems = [
        { title: "Home", url: "/", icon: "nir #home px-0.5" },
        { title: "Trending", url: "/posts", icon: "nir #fire-alt px-0.5" },
        { title: "eBooks", url: "/ebooks", icon: "nis #book-open px-0.5" },
    ];
    const router = useRouter();
    return (
        <footer className={`w-full sm:hidden border-t backdrop-filter backdrop-blur-md bg-white dark:bg-gray-800 dark:bg-opacity-5 bg-opacity-5 fixed z-10 bottom-0 trasition ease-in-out duration-500 ${ animateHeader && "shadow-md"}`}>
            <div className="max-w-[1048px] mx-auto ">
                <div className={`flex justify-center max-w-screen-xl mx-auto ${ !animateHeader && "py-3" } items-center sm:justify-between px-8 trasition ease-in-out duration-500`}>
                    <nav className="block sm:hidden">
                        <ul className="flex items-center justify-start gap-x-8">
                            {menuItems?.map((item) => (
                                <li key={item?.title} className="p-2">
                                    <Link href={item?.url}>
                                        <a className={`flex font-normal items-center gap-x-3 sm:border-b-2 sm:border-transparent trasition ease-in-out duration-500 leading-[22px] pb-2 ${router.pathname == item?.url ? "sm:dark:border-gray-50 sm:border-gray-500 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-50" : "sm:dark:hover:border-gray-50 sm:hover:border-gray-500 text-gray-400 hover:text-gray-600 dark:hover:text-gray-50"}`}>
                                            <span className={router.pathname == item?.url ? "text-pink-500":"block sm:hidden"}><i className={`text-[22px] ` + item?.icon}></i></span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                            <li className="sm:ml-4 flex p-2">
                                <div>
                                    <ThemeSwitcher />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
