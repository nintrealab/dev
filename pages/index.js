import { getPosts } from '../utils/mdx-utils';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import HomeSEO from '../components/HomeSEO';
import Authors from '../components/Authors'
import MobileFooter from '../components/layouts/MobileFooter';
export default function Index({ globalData }) {
    return (
        <>
            <Header name={globalData.name} />
            <HomeSEO title={globalData.name} description={globalData.blogTitle} />
            
            <Layout>
                <GradientBackground variant="large" className="fixed w-full top-20 opacity-40 dark:opacity-60"/>
                <GradientBackground variant="small" className="absolute w-full bottom-0 opacity-20 dark:opacity-10"/>
                <Authors/>
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
