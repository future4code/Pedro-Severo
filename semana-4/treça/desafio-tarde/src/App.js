import React from 'react';
import './App.css';
import { PageSection } from './pagina-inicial/PageSection/PageSection';
import { BigCard } from './pagina-inicial/BigCard/BigCard';
import { SmallCard } from "./pagina-inicial/SmallCard/SmallCard";

const titulo1 = {
  titulo: "Dados Pessoais"
}
const titulo2 = {
  titulo: "Instituições de ensino"
}
const titulo3 = {
  titulo: "Minhas Redes Sociais"
}

const bigCard1 = {
  subtitulo: "Pedro Severo",
  imagem: "https://picsum.photos/200/100?a=1",
  texto: "Integrante da primeira turma da Future4. Startup de ensino que oferece um programa imersivo de 6 meses (mais de 1000 horas/aula) de aprendizado em programação full stack. A metodologia consiste em aulas teóricas durante a manhã e atividades práticas durante a tarde, com a realização de projetos individuais e em equipe (front e back-end)."
}
const bigCard2 = {
  subtitulo: "Future4",
  imagem: "https://picsum.photos/200/100?a=2",
  texto: "Startup de ensino que oferece um programa imersivo de 6 meses (mais de 1000 horas/aula) de aprendizado em programação full stack.",
}
const bigCard3 = {
  subtitulo: "Gama Academy",
  imagem: "https://picsum.photos/200/100?a=3",
  texto: "Gama Academy é uma escola de transformação tecnológica que cria programas educacionais voltados para a área de marketing digital, vendas, design e programação.",
}

const dados1 = {
  dados: "Email: phsevero94@gmail.com",
}
const dados2 = {
  dados: "Endereço: Rua dos Guajajaras, 479"
}

function App() {
  return (
    <div className="App"> 
      <PageSection titulo={titulo1.titulo}>
        <BigCard subtitulo={bigCard1.subtitulo} imagem={bigCard1.imagem} texto={bigCard1.texto}/>
        <SmallCard dados={dados1.dados} />
        <SmallCard dados={dados2.dados} />
      </PageSection>
      
      <PageSection titulo={titulo2.titulo}>
        <BigCard subtitulo={bigCard2.subtitulo} imagem={bigCard2.imagem} texto={bigCard2.texto}/>
        <BigCard subtitulo={bigCard3.subtitulo} imagem={bigCard3.imagem} texto={bigCard3.texto}/>
      </PageSection>
      
      <PageSection titulo={titulo3.titulo}>
      </PageSection>
    </div>
  );
}

export default App;
