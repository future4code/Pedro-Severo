import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <header>
        <h1>Future Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca"></input>
      </header>

      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-menu-vertical">Início</li>
            <li className="botoes-menu-vertical">Em alta</li>
            <li className="botoes-menu-vertical">Inscrições</li>
            <hr></hr>
            <li className="botoes-menu-vertical">Originais</li>
            <li className="botoes-menu-vertical">Histórico</li>
          </ul>
        </nav>

        <section className="painel-de-videos">
          <div className="box-pagina-principal media1">
            <img src="https://picsum.photos/200/200?v=1" alt=""></img>
            <p>Media 1</p>
          </div>
          <div className="box-pagina-principal media2">
            <img src="https://picsum.photos/200/200?v=2" alt=""></img>
            <p>Media 2</p>
          </div>
          <div className="box-pagina-principal media3">
            <img src="https://picsum.photos/200/200?v=3" alt=""></img>
            <p>media 3</p>
          </div>
          <div className="box-pagina-principal media4">
            <img src="https://picsum.photos/200/200?v=4" alt=""></img>
            <p>media 4</p>
          </div>
          <div className="box-pagina-principal media5">
            <img src="https://picsum.photos/200/200?v=5" alt=""></img>
            <p>media 5</p>
          </div>
          <div className="box-pagina-principal media6">
            <img src="https://picsum.photos/200/200?v=6" alt=""></img>
            <p>media 6</p>
          </div>
          <div className="box-pagina-principal media7">
            <img src="https://picsum.photos/200/200?v=7" alt=""></img>
            <p>media 7</p>
          </div>
          <div className="box-pagina-principal media8">
            <img src="https://picsum.photos/200/200?v=8" alt=""></img>
            <p>media 8</p>
          </div>
        </section>
      </main>

      <footer>
        <h4>Oi! Eu moro no footer!</h4>
      </footer>
      


      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
    
    
    </body>
  );
}

export default App;
