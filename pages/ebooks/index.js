import Link from 'next/link';
import Layout from '../../components/Layout';
import Header from '../../components/layouts/Header';
import MobileFooter from '../../components/layouts/MobileFooter'
export default function Index({ posts, globalData }) {
    return (
        <>
            <Header name={`NINTREA`}/>
            <Layout>
                <div className='text-center'>
                    Coming Soon !!
                </div>
            </Layout>

            <div className='mb-10'>
                <MobileFooter/>
            </div>
        </>

    );
}
