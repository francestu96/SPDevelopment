import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Footer from 'elements/Footer';
import Header from 'elements/Header';
import { Box, Image, Link } from '@chakra-ui/react';
import Script from 'next/script';

const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
    <>
        <Head>
            <title>{`${pageName}`}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Script id='meta-pixel'  strategy='afterInteractive' dangerouslySetInnerHTML={{ __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1700996737276233');
            fbq('track', 'PageView');
        ` }}/>
        <noscript>
            <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1700996737276233&ev=PageView&noscript=1"/>
        </noscript>

        <Header />
        {children}
        <Footer />
        <Box display={["none", "none", "none", "fixed"]}>
            <Link href="https://api.whatsapp.com/send?phone=393667748241" target="_blank">
                <Image src="/whatsapp-button.png" position="fixed" bottom="15px" right="15px" alt="wp-logo" />
            </Link>
        </Box>
    </>
);

export default Default;
