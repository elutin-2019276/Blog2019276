import { Button } from "./Button.jsx"
import ahorcado from '../assets/img/Ahorcado.png'
import kinal from '../assets/img/Kinal.png'

export const TallerContent = () => {
  return (
    <div className='dashboard-content'>
      <div class="container">
        <div class="content">
          <div class="content__container">
            <p class="content__container__text">
              Proyectos
            </p> 
            <ul class="content__container__list">
              <li class="content__container__list__item">¡Javascript!</li>
              <li class="content__container__list__item">¡MongoDB!</li>
              <li class="content__container__list__item">¡Thunder!</li>
              <li class="content__container__list__item">¡Edgar Lutin!</li>
            </ul>
          </div>
        </div>
      </div>
      <br/>
      <div className="homework">
        <h2>Ahorcado con Javascript.</h2>
        <p>Un "trabajo de ahorcado" en JavaScript es un proyecto o ejercicio que consiste en crear el popular juego del ahorcado utilizando el lenguaje de programación JavaScript. 
        En este juego, un jugador intenta adivinar una palabra oculta, letra por letra, antes de que se complete la figura de un ahorcado.
        </p>
        <hr/>
        <p className='conocimientos'>Conocimientos</p>
        <p>Para crear un juego de ahorcado en JavaScript, aplicarías una variedad de conocimientos y habilidades relacionadas con la programación y el desarrollo web.
          <br />
          <br />
          Debes tener un buen entendimiento de JavaScript para escribir el código que maneje la lógica del juego, como la selección de palabras, la verificación de letras 
          adivinadas y la actualización de la interfaz de usuario.
          <br />
          <br />
          <img src={ahorcado} className="img"/>
          <br />
          Presiona el botón para ir al proyecto.
        </p>
         <a href="https://github.com/elutin-2019276/Hangman-Game.git"> 
          <Button></Button>
        </a>
      </div>
      <div className="homework">
      <h2>Proyecto Web.</h2>
        <p>Este proyecto consistió en desarrollar tres páginas web: una dedicada a describir un hobby personal, otra para presentar nuestra biografía, y una tercera 
        para proponer un rediseño de la página principal de Kinal. El objetivo era crear un nuevo diseño para la página principal de Kinal utilizando un enfoque técnico y conciso.
        </p>
        <hr />
        <p className='conocimientos'>Conocimientos</p>
        <p>Este proyecto fue desafiante porque, hasta entonces, tenía un conocimiento básico de HTML y CSS. Realizarlo me obligó a ampliar mis conocimientos en estos temas, 
        lo que resultó en una mejora en mis habilidades para futuros proyectos.
          <br />
          <br />
          Utilizamos HTML y CSS para crear la página, y también implementamos un archivo CSS llamado "responsive" que ajusta el diseño de la página eliminando los bordes.
          <br />
          <br />
          <img src={kinal} className="img"/>
          <br />
          Presiona el botón para ir al proyecto.
        </p>
        <a href="https://github.com/elutin-2019276/Proyecto-Web.git"> 
          <Button></Button>
        </a> 
      </div>
      <div className="homework">
      <h2>Adoption System</h2>
        <p>Este proyecto es un sistema desarrollado con JavaScript, Mongoose, Express y MongoDBCompass para gestionar una tienda de adopción de mascotas. Implementa operaciones 
        CRUD y utiliza MongoDBCompass como gestor de base de datos no relacionales.
        </p>
        <hr />
        <p className='conocimientos'>Conocimientos</p>
        <p>Este proyecto sirvió como introducción al uso de un gestor de base de datos diferente a MySQL. La utilización de JavaScript junto con Thunder para la comunicación de 
        datos con la base de datos fue una experiencia nueva y enriquecedora para mi carrera.
          <br />
          <br />
          Utilizamos JavaScript, Thunder Client y MongoDBCompass para implementar un CRUD que permite almacenar datos enviados al sistema.
          <br />
          <br />
          Presiona el botón para ir al proyecto.
        </p>
        <a href="https://github.com/elutin-2019276/Laboratorio-No.2.git"> 
          <Button></Button>
         </a> 
      </div>
      <div className="homework">
      <h2>Proyecto Bimestral</h2>
        <p>Este proyecto consiste en desarrollar una API web con NodeJS para gestionar el registro de ventas, productos y otras operaciones comerciales de una empresa. 
        La aplicación se divide en dos secciones: administrador y cliente, cada una con funciones específicas.
        </p>
        <hr />
        <p className='conocimientos'>Conocimientos</p>
        <p>Este proyecto fue una oportunidad para explorar el uso de un gestor de base de datos distinto a MySQL. La integración de JavaScript con Thunder para la 
        comunicación de datos con la base de datos fue una experiencia novedosa que enriqueció mi carrera profesional.
          <br />
          <br />
          Utilizamos JavaScript, Thunder Client y MongoDBCompass para implementar un CRUD que permite almacenar datos enviados al sistema.
          <br />
          <br />
          Presiona el botón para ir al proyecto.
        </p>
        <a href="https://github.com/elutin-2019276/ProyectoFinal.git"> 
          <Button></Button>
         </a> 
      </div>
    </div>
  )
}