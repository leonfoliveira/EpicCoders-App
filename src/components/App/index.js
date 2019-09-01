import React from 'react';
import './index.scss';

import TeamList from '../Team/List';
import EventList from '../Event/List';
import Navbar from '../Navbar';

import letras_epic from './img/letras_epic.png';
import background_icpc from './img/background_icpc.jpg';
import logo_epic from './img/bolt_epic.png';
import logo_icpc from './img/logo_icpc.png';
import logo_mdp from './img/logo_mdp.jpg';
import logo_mineira from './img/logo_mineira.png';
import logo_b2ml from './img/logo_b2ml.png';

let about = "A competição de programação, é uma prova de 5 horas, com 8 a 14 problemas para serem resolvidos. Existem 4 competições de programação que a UNIFEI vem participando. A principal é a Maratona de Programação. Ela é dividida em 3 fases no Brasil. A primeira é uma competição regional, realizada sempre em setembro de cada ano, em uma sede em cidade próxima a Itajubá. Essa etapa, através das regras criadas pela organização, classifica para a fase final brasileira ou regional da América Latina. As equipes que passarem na primeira fase, geralmente em torno de 60 a 70 equipes do Brasil inteiro, se reúnem em novembro em uma cidade pré-definida para disputarem uma das 5 ou 6 vagas para a etapa Mundial. O Mundial é em um país e cidade pré-definida e ocorre em maio do ano seguinte. A outra competição em importância para os alunos, e em equipe ainda, é a Maratona Mineira de Programação. Ela ocorre geralmente na ultima semana de maio em uma cidade pré-definida. São 50 a 70 equipes de toda Minas Gerais, que disputam o titulo de Campeão Mineiro. A prova serve de preparação para a Maratona de Programação Nacional.";

class App extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandle);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandle);
  }

  scrollHandle(e) {
    for (var i = 0; i < 5; i++) {
      if (window.pageYOffset + window.innerHeight > document.getElementById('sec'+i).offsetTop) {
        document.getElementById('sec'+i).classList.add("active");
      } else {
        document.getElementById('sec'+i).classList.remove("active");
      }
    }
  }

  render() {
    const { data } = this.props

    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-expand-lg" id="navbar-nofixed">
            <a className="navbar-brand" href="/">
              <img src={letras_epic} alt="EPIC" height='40'></img>
            </a>
          </nav>
          <div className="navbar-shadow"></div>
        </div>

        <Navbar />

        <div className="jumbotron" style={{backgroundImage: `url(${background_icpc})`}}>
          <div className="shadow">
            <img src={logo_epic} alt="Logo EPIC" height='300' style={{zIndex: 2}}></img>
          </div>
        </div>
        <section className="text-center" id="sec0">
          <div className="row img-box">
            <div className="col-lg text-right">
              <a href="https://icpc.baylor.edu/">
                <img src={logo_icpc} alt="Logo ICPC" height='125' style={{marginTop: 12}}></img>
              </a>
            </div>
            <div className="col-lg">
              <a href="http://maratona.ime.usp.br/">
                <img src={logo_mdp} alt="Logo Maratona de Programação" height='150'></img>
              </a>
            </div>
            <div className="col-lg text-left">
              <a href="https://maratona.algartelecom.com.br/portal/mineira/">
                <img src={logo_mineira} alt="Logo Mineira de Programação" height='150'></img>
              </a>
            </div>
          </div>
        </section>
        <section className="dark text-center" id="sec1">
          <h1><span className="or">S</span>obre</h1>
          <p className="text-box">{about}</p>
        </section>
        <section id="sec2">
          <h1 className="text-center"><span className="or">E</span>quipes</h1>
          <div className="container" style={{marginTop: 30}}>
            <TeamList teams={data.teams}></TeamList>
          </div>
        </section>
        <section className="dark text-center" id="sec3">
          <h1><span className="or">C</span>alendário</h1>
          <table className="table">
            <EventList events={data.events} />
          </table>        
        </section>
        <section className="text-center sponsor" id="sec4">
          <h1><span className="or">P</span>atrocínio</h1>
          <a href="http://www.b2ml.com.br/b2ml/">
            <img src={logo_b2ml} alt="b2ml"></img>
          </a>
        </section>

        <footer>
          Epic Coders @ 2019
        </footer>
      </div>
    );
  }
}

export default App;
