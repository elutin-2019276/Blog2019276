import { Navbar } from "../../components/Navbar.jsx";
import fondo from '../../assets/img/Fondo.png';
import { TallerContent } from "../../components/TallerContent.jsx";
import './Taller.css';

export const Taller = () => {
  return (
    <div className="dashboard-main">
        <img className="fond-homepage" src={fondo} alt="imagenDiario" />
      <Navbar />
      <div className="title-section">Taller</div>
      <div className="container-project">
        <div className="theme-data">
            <p>
            En esta página veremos los proyectos trabajados en el bimestre 1,
            veremos proyectos basados en Javascript, realizando CRUDS usando
            Mongoose y Express como medio de conexión a nuestro gestor de bases
            de datos MongoDBCompass.
            <br />
            <br />
            Cada proyecto mostrado acá tiene como objetivo el uso de la lógica
            de Javascript y ver así el potencial de este lenguaje de programación.
          </p>
          <div class="terminal-loader">
            <div class="terminal-header">
              <div class="terminal-title">Proyectos</div>
              <div class="terminal-controls">
                <div class="control close"></div>
                <div class="control minimize"></div>
                <div class="control maximize"></div>
              </div>
            </div>
            <div class="text">Cargando proyectos...</div>
          </div>
        </div>
        <div className="code-data">
            <p>
            El primer programador: Ada Lovelace, una matemática inglesa del siglo XIX, es considerada la primera programadora de la historia. Trabajó en la Máquina Analítica de Charles Babbage y 
            escribió el primer algoritmo destinado a ser procesado por una máquina.
            </p>
        </div>
      </div>
      <br/>
      <TallerContent></TallerContent>
    </div>
  );
};     
