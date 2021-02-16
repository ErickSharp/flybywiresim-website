import React, { useRef } from 'react';
import { Header } from '../components/home/Header';
import { Features } from '../components/home/Features';
import { Download } from '../components/home/Download';
import { Community } from '../components/home/Community';
import { PartnerSection } from '../components/home/PartnerSection';
import { Footer } from '../components/utils/Footer';

export const Home: React.FC = () => {
    const downloadRef = useRef<HTMLDivElement>(null);
    const handleScrollTD = () => {
        if (downloadRef.current) {
            downloadRef.current.scrollIntoView();
        }
    };

    return (
        <>
            <Header scrollToDownload={handleScrollTD} />
            <Features ref={downloadRef} />
            <Download />
            <Community />
            <PartnerSection />
            <Footer />
        </>
    );
};
