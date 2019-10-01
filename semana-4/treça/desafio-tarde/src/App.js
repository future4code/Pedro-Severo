import React from 'react';
import './App.css';
import { PageSection } from './pagina-inicial/PageSection/PageSection';
import { BigCard } from './pagina-inicial/BigCard/BigCard';

const titulo1 = {
  titulo: "Dados Pessoais"
}

const titulo2 = {
  titulo: "Experiências Profissionais"
}

const titulo3 = {
  titulo: "Minhas Redes Sociais"
}

function App() {
  return (
    <div className="App">
      
      <PageSection titulo={titulo1.titulo}>
        <BigCard />
      </PageSection>
      <PageSection titulo={titulo2.titulo}>
      </PageSection>
      <PageSection titulo={titulo3.titulo}>
      </PageSection>
    </div>
  );
}

export default App;
