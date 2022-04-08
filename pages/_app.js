import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Script from 'next/script';
import '../public/css/nintrea@icons.css';
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                id='ga-script'
                strategy='lazyOnload'
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>

            <Script
                id='data-ga'
                strategy='lazyOnload'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `}
            </Script>
            <span className="theme-bejamas" />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
