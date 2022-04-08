export default function SunIcon({ className, color = 'text-primary' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            fill="none"
            viewBox="0 0 25 24"
            className="dark:opacity-50 group"
        >
            <g
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-white group-hover:text-red-600"
                clipPath="url(#clip0_192_823)"
            >
                <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
            </g>
            <defs>
                <clipPath id="clip0_192_823">
                    <path
                        className="fill-current text-white group-hover:text-red-600"
                        d="M0 0H24V24H0z"
                        transform="translate(.5)"
                    ></path>
                </clipPath>
            </defs>
        </svg>
    );
}
  