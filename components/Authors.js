import {createRipples } from 'react-ripples'
import Image from 'next/image';
import { AiFillCheckCircle } from "react-icons/ai";
import ShareIcon from '../components/icons/ShareIcon'
export default function Index({ posts, globalData }) {
    const Ripples = createRipples({
        color: 'rgba(0,46,86,0.11)',
        during: 1200,
    })
    const authors = [
        {
            id:1,
            name:"Leat Sophat",
            cover:"https://images.unsplash.com/photo-1571844088753-73ca0880bcd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
            url:"",
            date:"23 Jun, 2020",
            description:"This The Title of Nintrea",
            image:"https://media-exp1.licdn.com/dms/image/C5103AQEUWE1XgX9jBg/profile-displayphoto-shrink_200_200/0/1584979740813?e=1653523200&v=beta&t=8zDA1D4XOfriqkEuu6LY6_q5wFKcdql1aC3Ik35hNMQ"
        },
        {
            id:2,
            name:"Hol Bundit",
            cover:"https://images.unsplash.com/photo-1542396601-dca920ea2807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
            url:"",
            date:"23 Jun, 2020",
            description:"This The Title of Nintrea",
            image:"https://telegra.ph/file/fdc8f3b816cf4e22f9e88.png"
        },
        {
            id:3,
            name:"Tep Koart",
            cover:"https://images.unsplash.com/photo-1547979854-5333256878de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            url:"",
            date:"23 Jun, 2020",
            description:"This The Title of Nintrea",
            image:"https://telegra.ph/file/7d0f186534ceff1652a92.png"
        }
    ]
    return (
        <>
            <div className="w-full md:max-w-[1048px] gap-3 grid grid-cols-2 sm:grid-cols-3 justify-center items-center p-3">
                {authors?.map((author) => (
                    <Ripples key={author?.id} className='transition-all duration-300 md:hover:-translate-y-1 hover:shadow-xl'>
                        <div 
                            className='select-none bg-white rounded-md bg-opacity-25 backdrop-blur-md hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-opacity-100 w-full sm:max-w-[500px]'>
                            <div>
                                <Image 
                                    title={author?.name} 
                                    alt={author?.name} 
                                    src={author?.cover} 
                                    className="object-cover z-0 rounded-md" 
                                    width={712} 
                                    height={430}/>
                            </div>
                            <div className='-mt-9 w-12 sm:w-16 flex items-center justify-center ml-auto mr-3'>
                                <div className='relative border-white border flex rounded-full p-0.5 sm:p-1'>
                                    <Image 
                                        title={author?.name} 
                                        alt={author?.name} 
                                        src={author?.image} 
                                        className="rounded-full object-cover" 
                                        width={50} 
                                        height={50}/>
                                    <AiFillCheckCircle className='absolute bg-white border border-white rounded-full text-[12px] sm:text-[18px] text-green-500 translate-x-7 translate-y-7 sm:translate-x-9 sm:translate-y-9'/>
                                </div>
                            </div>
                            <div className='sm:pb-3 pb-2 -mt-6 px-2 sm:px-4'>
                                <div className='flex items-center gap-3 py-2'>
                                    <h1 className='text-gray-500 font-poppins text-[12px] sm:text-sm line-clamp-1'>
                                        {author?.name}
                                    </h1>
                                    <div className='w-2 h-2 rounded-full bg-emerald-500'></div>  
                                </div>
                                <h1 className='text-gray-800 dark:text-gray-300 font-poppins font-medium text-[14px] sm:text-[18px] leading-5 sm:leading-7 line-clamp-2'>
                                    {author?.description}
                                </h1>
                                <div className='flex items-center gap-3 py-2 justify-between'>
                                    <h1 className='text-gray-500 font-poppins text-[10px] sm:text-[13px] line-clamp-1'>
                                        Joined Since • {author?.date}
                                    </h1>
                                    <div>
                                        <ShareIcon/>
                                    </div>  
                                </div>
                            </div>

                        </div>
                    </Ripples>
                ))}
            </div>
        </>

    );
}

