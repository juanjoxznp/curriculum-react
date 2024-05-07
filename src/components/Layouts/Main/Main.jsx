import "./Main.css";
import { Div } from "../../UI/Div/Div";
import { Paragraph } from "../../UI/Paragraph/Paragraph";
import { Card } from "../../UI/Card/Card";
import { Info } from "../../UI/Info/Info";
import { Techno } from "../../UI/Techno/Techno";
import { Section } from "../../UI/Section/Section";
import { Level } from "../../UI/Level/Level";
import hacker from '../../../components/UI/Card/hacker.png'
import bases from '../../../components/UI/Level/bases.png'
import intermedio from '../../../components/UI/Level/intermedio.png'
import avanzado from '../../../components/UI/Level/avanzado.png'


export const Main = () => {
  return (
    <main className="main-page">
      <Div className="Bloque1" content="PERFIL"></Div>
      <Paragraph className="paragraphMain" />
      <Div className="Bloque1" content="PROYECTOS"></Div>

      
      <Section className='Bloque1-1'>
      <Card img={hacker} className="cardOne"></Card>
      <Card img={hacker} className="cardOne"></Card>

      </Section>
      <Section className="Bloque2-2">
      <Card img={hacker} className="cardOne"></Card>
      <Card img={hacker} className="cardOne"></Card>

      </Section>
      <Div className="Bloque1" content="REFERENCIAS"></Div>
      <Section className="cardReferences">
        <Info className="cardInfo"></Info>
        <Info className="cardInfo"></Info>
        <Info className="cardInfo"></Info>
      </Section>
      <Div className="BloqueExp" content="EXPERIENCIA"></Div>
      <Section className="technologies">
      <Techno className='tech'></Techno>
         

      </Section>
      <Section className="levels">
          <Level className="levelImg" urlImage={bases}/>
          <Level className="levelImg" urlImage={bases}/>
          <Level className="levelImg" urlImage={intermedio}/>
          <Level className="levelImg" urlImage={avanzado}/>
      </Section>
    </main>
  );
};
