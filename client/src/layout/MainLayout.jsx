import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'


const MainLayout = () => {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default MainLayout