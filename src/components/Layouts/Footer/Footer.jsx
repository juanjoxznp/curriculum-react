import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import { Navbar } from '../../UI/Navbar/Navbar'
import './Footer.css'
import face from './facebook.png'
import inst from './instagram.png'
import wpp from './whatsapp.png'

export const Footer = () => {
    return (
      <footer className='footer-page'>
       
        <Navbar>
        <ItemNavbar link="" imageSrc={inst}></ItemNavbar>
        <ItemNavbar link="" imageSrc={face}></ItemNavbar>
        <ItemNavbar link="" imageSrc={wpp}></ItemNavbar>


        </Navbar>

        


      </footer>
    )
  }
  