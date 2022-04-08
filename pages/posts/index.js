import Link from 'next/link';
import { getPosts } from '../../utils/mdx-utils';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import { getGlobalData } from '../../utils/global-data';
import HomeSEO from '../../components/HomeSEO';
import Ripples from 'react-ripples';
import Image from 'next/image'
import { AiFillCheckCircle } from "react-icons/ai";
import content from '../../components/frontaid.content.json';
import Share from '../../components/Share';
import MobileFooter from '../../components/layouts/MobileFooter'
import GoToTop from '../../components/layouts/GoTop';
export default function Index({ posts, globalData }) {
    return (
        <>
            <Header name={globalData.name} />
            <HomeSEO title={globalData.name} description={globalData.blogTitle} />
            <Layout>
                <main className="w-full px-2">
                    <div className="text-3xl hidden lg:block lg:text-5xl  blue-[40px] text-center mb-5">
                        <Image className='rounded-md object-cover w-full' src={content.image} width={1400} height={350}/>
                    </div>
                    <div className="text-3xl hidden sm:block lg:hidden lg:text-5xl  blue-[40px] text-center mb-5">
                        <Image className='rounded-md object-cover w-full' src={content.image} width={990} height={250}/>
                    </div>

                    <div className="text-3xl block sm:hidden lg:text-5xl text-center mb-5">
                        <Image className='rounded-md object-cover w-full' src={content.image} width={512} height={250}/>
                    </div>

                    <ul className="w-full md:max-w-[1048px] gap-2 sm:gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center">
                    
                        {posts.map((post) => (
                            <li key={post.filePath} className="col-span-1">
                                <Ripples className='transition duration-300 md:hover:-translate-y-1 hover:shadow-xl select-none hover:drop-shadow-xl bg-white rounded-md bg-opacity-25 backdrop-blur-md hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-opacity-100 w-full sm:max-w-[500px]'>
                                    
                                    <div 
                                        className='select-none bg-white rounded-md bg-opacity-25 backdrop-blur-md hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-opacity-100 w-full sm:max-w-[500px]'>
                                        <Link 
                                            as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`} 
                                            href={`/posts/[slug]`}>
                                            <div>
                                                <Image 
                                                    title={post.data.title} 
                                                    alt={post.data.title} 
                                                    src={post.data.img} 
                                                    className="object-cover z-0 rounded-md" 
                                                    width={250} 
                                                    height={150}/>
                                            </div>
                                        </Link>
                                        <Link 
                                            as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`} 
                                            href={`/posts/[slug]`}>
                                            <div className='-mt-9 w-12 sm:w-16 flex items-center justify-center ml-auto sm:mr-3'>
                                                <div className='relative sm:border-white dark:border-gray-700 sm:border flex rounded-full p-1'>
                                                    <Image 
                                                        title={post.data.title} 
                                                        alt={post.data.title} 
                                                        src={post.data.profile} 
                                                        className="rounded-full object-cover" 
                                                        width={50} 
                                                        height={50}/>
                                                    <AiFillCheckCircle className='absolute bg-white border border-white rounded-full text-[12px] sm:text-[18px] text-green-500  translate-x-6 sm:translate-x-9 translate-y-7 sm:translate-y-9'/>
                                                </div>
                                            </div>
                                        </Link>
                                        
                                        <div className='pb-3 -mt-6 px-4'>
                                            <div className='flex items-center gap-3 py-2'>
                                                <h1 className='text-gray-500 text-opacity-100 font-poppins text-sm'>
                                                {post.data.author}
                                                </h1>
                                                <div className='w-2 h-2 rounded-full bg-emerald-500'></div>  
                                            </div>
                                            <Link 
                                                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`} 
                                                href={`/posts/[slug]`}>
                                                <h1 className='text-gray-800 text-opacity-100 dark:text-gray-300 font-poppins font-medium text-[16px] sm:text-[18px] leading-7 line-clamp-1'>
                                                    {post.data.title}
                                                </h1>
                                            </Link>
                                            <div className='flex items-center gap-3 justify-between'>
                                                <h1 className='text-gray-500 text-opacity-100 font-poppins text-[13px]'>
                                                    {post.data.date && (
                                                        <p className="uppercase text-[12px] md:text-xs flex text-gray-400">
                                                            {post.data.date} • 
                                                        </p>
                                                    )}
                                                </h1>
                                                <div className='-mr-[10px] sm:-mr-1'>
                                                    <Share/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        

                                    </div>

                                    
                          
                                </Ripples>
                            </li>
                        ))}

                    </ul>
                    <GradientBackground variant="large" className="fixed w-full top-20 opacity-40 dark:opacity-60"/>
                    <GradientBackground variant="small" className="absolute w-full bottom-0 opacity-20 dark:opacity-10"/>
                    <GoToTop/>
                </main>
                <Footer copyrightText={globalData.footerText} />

            </Layout>
            <div className='mb-10'>
                <MobileFooter/>
            </div>
        </>

    );
}

export function getStaticProps() {
    const posts = getPosts();
    const globalData = getGlobalData();
    return { props: { posts, globalData } };
}
