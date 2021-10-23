import React from 'react'
import Nav from '../../components/Nav/Nav'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import Wrapper from '../../components/Wrapper/Wrapper'
import './home.css'

function Home() {
    return (
        <>
            <Nav />
            <Wrapper>
                <Main />
                <Footer />
            </Wrapper>
        </>
    )
}

export default Home
