import { Logo } from '../../UI/Logo/Logo'
import { Subtitle } from '../../UI/Subtitle/Subtitle'
import { Title } from '../../UI/Title/Title'

import './Header.css'


export const Header = () => {
    return (
      <header className='header-page'>
        <Logo imageUrl="src\components\UI\Logo\logo.jpg" className="logo1" />
        <Title/>
        <Subtitle content="Perfil"/>
        <Subtitle content="Proyectos"/>
        <Subtitle content="Referencias"/>
        <Subtitle content="Experiencia"/>
        <Logo imageUrl="src\components\Layouts\Header\img\logoSena.png" className="logo2" />
        

        


      </header>
    )
  }
  
  