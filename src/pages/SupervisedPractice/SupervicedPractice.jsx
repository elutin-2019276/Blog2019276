import { Navbar } from "../../components/Navbar.jsx";
import fondo from '../../assets/img/Fondo.png';
import { PracticeContent } from "../../components/PracticeComponent.jsx";
import './SupervicedPractice.css';

export const SupervicedPractice = () => {
  return (
    <div className="dashboard-main">
        <img className="fond-homepage" src={fondo} alt="imagenDiario" />
      <Navbar />
      <div className="title-section">Práctica Supervisada</div>
      <div className="container-project">
        <div className="theme-data">
            <p>
          El curso de Práctica supervisada pretende unir las áreas de Taller III y Tecnología III, 
          dándole un enfoque más externo, y acercado a la realidad de la industria Tecnológica. 
          En este curso el estudiante tendrá la capacidad de desarrollar aplicaciones con tecnología Web y móvil, 
          mediante los conocimientos tanto teóricos como prácticos de Node.js, ReactJs, Railway, así como hacer uso 
          del lenguaje de programación JavaScript, esto implica que el estudiante tendrá la capacidad de poder instalar 
          y configurar un Web Api, una página web, conjunto a la capacidad de programar.
          </p>
        </div>
        <div className="practice-data">
          En un curso de programación orientado a la práctica supervisada, un estudiante aprende a aplicar los conceptos 
          y técnicas de programación en situaciones prácticas bajo la supervisión y orientación de un instructor o tutor.
        </div>
      </div>
      <PracticeContent />
    </div>
  );
};
