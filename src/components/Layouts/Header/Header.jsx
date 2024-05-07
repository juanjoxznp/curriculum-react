import { Logo } from '../../UI/Logo/Logo'
import { Subtitle } from '../../UI/Subtitle/Subtitle'
import { Title } from '../../UI/Title/Title'

import './Header.css'
import logoJuanjo from '../../UI/Logo/logo.jpg'
import logoSena from '../Header/img/logoSena.png'


export const Header = () => {
    return (
      <header className='header-page'>
        <Logo imageUrl={logoJuanjo} className="logo1" />
        <Title/>
        <Subtitle content="Perfil"/>
        <Subtitle content="Proyectos"/>
        <Subtitle content="Referencias"/>
        <Subtitle content="Experiencia"/>
        <Logo imageUrl={logoSena} className="logo2" />
        

        


      </header>
    )
  }
  
  