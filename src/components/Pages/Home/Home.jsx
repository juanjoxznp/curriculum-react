import {Header} from '../../Layouts/Header/Header'
import {Main} from '../../Layouts/Main/Main'
import {Footer} from '../../Layouts/Footer/Footer'
import { ContainerDiv } from '../../UI/ContainerDiv/ContainerDiv'
import './Home.css'

export const Home = () => {
    return (
      <>
      <ContainerDiv className='contPage'>
      <Header />
      <Footer/>
      </ContainerDiv>

        
        <Main   />
       
      </>
    )
  }
  