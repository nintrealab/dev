import { getGlobalData } from '../../utils/global-data';
import {
    getNextPostBySlug,
    getPostBySlug,
    getPreviousPostBySlug,
    postFilePaths,
} from '../../utils/mdx-utils';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '../../components/icons/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import Share from '../../components/Share'
import GoToTop from '../../components/layouts/GoTop';

const components = {
    a: CustomLink,
    Head,
};

export default function PostPage({
    source,
    frontMatter,
    prevPost,
    nextPost,
    globalData,
}) {
    if (typeof window !== "undefined") {
        if(window.location.pathname == '/posts/novel'){
            window.location = '//novel.nintrea.org'
        }else if(window.location.pathname == '/posts/bedok'){
            window.location = '//bedok.nintrea.org'
        }else if(window.location.pathname  =='/posts/samouth'){
            window.location = '//sinn.sisamouth.nintrea.org'
        }else if(window.location.pathname == '/posts/share'){
            window.location = 'https://nintrea-share.blogspot.com/'
        }
    }
    return (
        <>
            <Header name={globalData.name} />
            <Layout>
                <SEO title={`${frontMatter.title} - ${globalData.name}`} description={frontMatter.description}/>
                <article className="md:px-0 w-full px-5">
                    <header className='text-center'>
                        <h1 className="text-3xl dark:text-white text-center font-moul-pali my-4">{frontMatter.title}</h1>
                        <Image src="https://nintrea.netlify.app/asset/KbachkhmerSVG/kbach-18.SVG" className="rounded-full object-cover" width={170} height={50}/>
                        <div className='p-4 font-poppins bg-opacity-50 dark:bg-opacity-20 dark:bg-gray-800 bg-white rounded-md shadow-md max-w-5xl mx-auto'>
                            {frontMatter.description && (<p className="text-xl mb-4">{frontMatter.description}</p>)}
                        </div>
                    </header>
                    <main>
                        <article className="prose-md dark:prose-dark w-full flex flex-col font-poppins max-w-[992px] mx-auto border-2 p-2 border-dashed border-t-0 border-r-0 dark:border-gray-700 rounded-md">
                            <MDXRemote {...source} components={components} />
                            <div className='grid text-center justify-center pt-3'>
                                <p className='font-poppins font-bold translate-y-1'>Share With ❤</p>
                                <div className='scale-110'>
                                    <Share/>
                                </div>
                            </div>
                        </article>
                        <div className="flex justify-end gap-x-5 mt-12 max-w-[1000px] mx-auto">
                            {prevPost && (
                                <Link href={`/posts/${prevPost.slug}`}>
                                    <a className="p-3 w-1/2 flex border rounded-md items-center justify-start text-left">
                                        <ArrowIcon className="rotate-180"/>
                                        <p className="uppercase text-gray-500 dark:text-white dark:opacity-60">Previous </p>
                                        {/* <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                                            {prevPost.title}
                                        </h4> */}
                                    </a>
                                </Link>
                            )}

                            {nextPost && (
                                <Link href={`/posts/${nextPost.slug}`}>
                                    <a className="p-3 w-1/2 order-last flex border rounded-md items-center justify-end text-right">
                                        <p className="uppercase text-gray-500 dark:text-white dark:opacity-60">Next </p>
                                        {/* <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                                            {nextPost.title}
                                        </h4> */}
                                        <ArrowIcon/>
                                    </a>
                                </Link>
                            )}
                        </div>
                        <GoToTop/>
                    </main>
                </article>
                <Footer copyrightText={globalData.footerText} />
                <GradientBackground variant="large" className="absolute w-full -top-32 opacity-30 dark:opacity-50"/>
                <GradientBackground variant="small" className="absolute w-full bottom-0 opacity-20 dark:opacity-10"/>
            </Layout>
        </>
    );
}

export const getStaticProps = async ({ params }) => {
    const globalData = getGlobalData();
    const { mdxSource, data } = await getPostBySlug(params.slug);
    const prevPost = getPreviousPostBySlug(params.slug);
    const nextPost = getNextPostBySlug(params.slug);

    return {
        props: {
            globalData,
            source: mdxSource,
            frontMatter: data,
            prevPost,
            nextPost,
        },
    };
};

export const getStaticPaths = async () => {
    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};
