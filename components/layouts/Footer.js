import Link from 'next/link'
export default function Footer({ copyrightText }) {
    return (
        <footer className="sm:py-5 flex flex-col items-center">
            
            <p className="dark:text-white mb-3 font-normal font-poppins text-[10px] sm:text-sm">
                @2020 - {new Date().getFullYear()} 
                <Link href="/">
                    <a className="font-semibold uppercase text-transparent bg-clip-text text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500"> {copyrightText}</a>
                </Link>
                , All Right Reseved.
            </p>
        </footer>
    );
}
