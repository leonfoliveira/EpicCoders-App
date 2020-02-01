import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import TeamList from '../Team/List';
import CalendarList from '../Calendar/List';
import Navbar from '../Navbar';

import letrasEpic from '../../img/letras_epic.png';
import backgroundICPC from '../../img/background_icpc.jpg';
import logoEpic from '../../img/bolt_epic.png';
import logoICPC from '../../img/logo_icpc.png';
import logoMDP from '../../img/logo_mdp.jpg';
import logoMineira from '../../img/logo_mineira.png';
import logoB2ML from '../../img/logo_b2ml.png';
import logoFB from '../../img/logo_fb.png';
import logoGit from '../../img/logo_git.png';

const about = 'A competição de programação, é uma prova de 5 horas, com 8 a 14 problemas para serem resolvidos. Existem 4 competições de programação que a UNIFEI vem participando. A principal é a Maratona de Programação. Ela é dividida em 3 fases no Brasil. A primeira é uma competição regional, realizada sempre em setembro de cada ano, em uma sede em cidade próxima a Itajubá. Essa etapa, através das regras criadas pela organização, classifica para a fase final brasileira ou regional da América Latina. As equipes que passarem na primeira fase, geralmente em torno de 60 a 70 equipes do Brasil inteiro, se reúnem em novembro em uma cidade pré-definida para disputarem uma das 5 ou 6 vagas para a etapa Mundial. O Mundial é em um país e cidade pré-definida e ocorre em maio do ano seguinte. A outra competição em importância para os alunos, e em equipe ainda, é a Maratona Mineira de Programação. Ela ocorre geralmente na ultima semana de maio em uma cidade pré-definida. São 50 a 70 equipes de toda Minas Gerais, que disputam o titulo de Campeão Mineiro. A prova serve de preparação para a Maratona de Programação Nacional.';

export default function App({ data }) {
  const scrollHandle = () => {
    for (let i = 0; i < 5; i += 1) {
      if (window.pageYOffset + window.innerHeight > document.getElementById(`sec${i}`).offsetTop) {
        document.getElementById(`sec${i}`).classList.add('active');
      } else {
        document.getElementById(`sec${i}`).classList.remove('active');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandle);
  }, []);


  const arrowAnimationHandleOn = () => {
    document.getElementById('arrow-box').className = 'arrow-animate';
  };
  const arrowAnimationHandleOff = () => {
    document.getElementById('arrow-box').className = '';
  };

  const arrowClickHandle = () => {
    const element = document.getElementById('sec0');
    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = document.body.offsetWidth < 767 ? 0 : -75;

    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-expand-lg" id="navbar-nofixed">
          <p className="navbar-brand">
            <img src={letrasEpic} alt="EPIC" height="40" />
          </p>
        </nav>
        <div className="navbar-shadow" />
      </div>

      <Navbar />

      <div className="jumbotron" style={{ backgroundImage: `url(${backgroundICPC})` }}>
        <div className="shadow">
          <img src={logoEpic} alt="Logo EPIC" style={{ zIndex: 2 }} />
          <div
            role="presentation"
            className="btn-down"
            onClick={arrowClickHandle}
            onMouseEnter={arrowAnimationHandleOn}
            onMouseLeave={arrowAnimationHandleOff}
          >
            <div id="arrow-box">
              <i className="arrow-down" />
            </div>
          </div>
        </div>
      </div>

      <section className="text-center" id="sec0">
        <div className="row img-box">
          <div className="col-md text-right">
            <a href="https://icpc.baylor.edu/" target="_blank" rel="noopener noreferrer">
              <img src={logoICPC} alt="Logo ICPC" height="125" style={{ marginTop: 12 }} />
            </a>
          </div>
          <div className="col-md">
            <a href="http://maratona.ime.usp.br/" target="_blank" rel="noopener noreferrer">
              <img src={logoMDP} alt="Logo Maratona de Programação" height="150" />
            </a>
          </div>
          <div className="col-md text-left">
            <a href="https://maratona.algartelecom.com.br/portal/mineira/" target="_blank" rel="noopener noreferrer">
              <img src={logoMineira} alt="Logo Mineira de Programação" height="150" />
            </a>
          </div>
        </div>
      </section>
      <section className="dark text-center" id="sec1">
        <h1 className="section-title">
          Sobre
        </h1>
        <p className="text-box">{about}</p>
      </section>
      <section id="sec2">
        <h1 className="section-title text-center">
          Equipes
        </h1>
        <div className="container" style={{ marginTop: 30 }}>
          <TeamList teams={data.teams} />
        </div>
      </section>
      <section className="dark text-center" id="sec3">
        <h1 className="section-title">
          Calendário
        </h1>
        <table className="table">
          <CalendarList events={data.events} />
        </table>
      </section>
      <section className="text-center sponsor" id="sec4">
        <h1 className="section-title">
          Patrocínio
        </h1>
        <a href="http://www.b2ml.com.br/b2ml/" target="_blank" rel="noopener noreferrer">
          <img src={logoB2ML} alt="b2ml" />
        </a>
      </section>

      <footer>
        Epic Coders @ 2019
      </footer>

      <a href="https://pt-br.facebook.com/maratonaunifei/" target="_blank" rel="noopener noreferrer" className="fb-link">
        <img src={logoFB} alt="Facebook Page" height="50px" />
      </a>
    </div>
  );
}

App.propTypes = {
  data: PropTypes.shape({
    teams: PropTypes.array,
    members: PropTypes.array,
    events: PropTypes.array,
  }).isRequired,
};
