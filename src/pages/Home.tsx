import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Banner from '../components/home/Banner'
import Features from '../components/home/Features'
import Faq from '../components/home/Faq'

const Home: React.FC = () => {

    return (
        <main id="home-wrapper">
            <Header />
            <Banner/>
            <Features/>
            <Faq/>
            <Footer />
        </main>
    )
}

export default Home