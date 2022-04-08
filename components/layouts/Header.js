import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Ripples from 'react-ripples'
import SunIcon from "../icons/SunIcon";
import { useRouter } from "next/router";
import MoonIcon from "../icons/MoonIcon";
import Logo from '../../public/logo.png'
function ThemeSwitcher() {
    return (
        <div className="flex justify-end">
            <Ripples>
                <button
                    type="button"
                    aria-label="Use Dark Mode"
                    onClick={() => {
                        document.documentElement.classList.add('dark');
                        localStorage.setItem('theme', 'dark');
                    } }
                    className="dark:hidden block items-center h-full pr-2 dark:bg-primary rounded-3xl align-center py-2 transition focus:outline-none overflow-hidden">
                    <MoonIcon />
                </button>
            </Ripples>
            <Ripples>
                <button
                    type="button"
                    aria-label="Use Light Mode"
                    onClick={() => {
                        document.documentElement.classList.remove('dark');
                        localStorage.setItem('theme', 'light');
                    } }
                    className="hidden items-center h-full pr-2 bg-primary dark:bg-transparent rounded-3xl dark:block align-center py-2 transition focus:outline-none overflow-hidden">
                    <SunIcon />
                </button>
            </Ripples>
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
        { title: "Home", url: "/", icon: " #robot" },
        { title: "Trendings", url: "/posts", icon: "#fire-alt" },
        { title: "eBooks", url: "/ebooks", icon: "#book-open" },
    ];
    const router = useRouter();
    return (
        <header className={`hidden sm:block w-full backdrop-filter backdrop-blur-md bg-white dark:bg-gray-800 dark:bg-opacity-50 bg-opacity-50 fixed z-10 top-0 trasition ease-in-out duration-500 ${ animateHeader && "shadow-xl"}`}>
            <div
                className={`max-w-[1048px] px-3 trasition ease-in-out duration-500 w-full mx-auto grid grid-cols-3 ${ !animateHeader && "py-3" }`}
                >
                <div className="py-2">
                    <Link href="/">
                        <a className='flex'>
                            <Image src={Logo} title='Nintrea Logo v2' className='object-cover rounded-lg' width={40} height={40}/>
                            <h2 className='hidden sm:block ml-2 mt-1 font-bold text-transparent bg-clip-text text-gradient bg-gradient-to-r dark:from-pink-400 dark:via-purple-400 dark:to-indigo-500 from-pink-500 via-[#01549c] to-[#002e56] transition-all duration-100 hover:from-[#1fa8e0] hover:via-[#1367b1] hover:to-[#624ddb]'>
                                {name} 
                                <span className='font-thin'>|</span> 
                                <span className='font-battambang'>និទ្រា</span>
                            </h2>
                        </a>
                    </Link> 
                </div>
                <div className="col-span-2 ml-auto py-2">
                    <nav className="hidden sm:block">
                        <ul className="flex items-center justify-start gap-x-4 h-full w-full">
                            {menuItems?.map((item) => (
                                <li key={item?.title} className="h-full">
                                    <Link href={item?.url}>
                                        <a className={`flex gap-1 flex-col active:text-rose-600 dark:active:text-rose-600 items-center justify-center w-14 ${router.pathname == item?.url ? "text-pink-500":"text-gray-600 dark:text-gray-400"}`}>
                                            <span title={item?.title} className={`${ animateHeader && 'hidden'}`}><i className={`text-[22px] nil ${ !animateHeader && item?.icon}`}></i></span>
                                            <span title={item?.title} className={`text-[14px]`}>{item?.title}</span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                            <li className="sm:ml-4">
                                <div className='relative'>
                                    <ThemeSwitcher />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
