import { Button } from "./Button.jsx";

export const PracticeContent = () => {
  return (
    <div className="practice-content">
      <div className="homework">
        <h1>Agenda Web.</h1>
        <p>Este proyecto consiste en una aplicación de agenda desarrollada en JavaScript que permite crear, editar y eliminar notas.
        </p>
        <hr />
        <p className='conocimientos'>Conocimientos.</p>
        <p>Este proyecto me permitió ampliar mis conocimientos en JavaScript, CSS y HTML, mejorando así mi comprensión del lenguaje 
        de programación.
          <br />
          <br />
          Presione el link para ir al documento.
        </p>
        {/* */}
          <Button>Ir al documento</Button>
        {/* </a> */}
      </div>
      <div className="homework">
        <h1>Academy Control.</h1>
        <p>Este proyecto fue mi primera experiencia oficial en el desarrollo de aplicaciones con conexión a una base de datos, 
          utilizando JavaScript, NodeJS, MongoDBCompass, Express y Mongoose.
        <hr />
        </p>
        <p className='conocimientos'>Conocimientos.</p>
        <p>Este proyecto me permitió adquirir experiencia en la conexión a una base de datos utilizando JavaScript puro, NodeJS y MongoDBCompass. Aprendí a realizar 
          consultas de una manera diferente, dado que MongoDBCompass es una base de datos NoSQL.
          <br />
          <br />
          Presione el link para ir al documento.
        </p>
         <a href="https://github.com/elutin-2019276/PMA_Laboratorio-PS-2.git">
          <Button>Ir al documento</Button>
        </a> 
      </div>
      <div className="homework">
        <h1>Gestor de opiniones.</h1>
        <p>Este proyecto fue mi segunda experiencia oficial en el desarrollo de aplicaciones con conexión a una base de datos, utilizando JavaScript, NodeJS, 
          MongoDBCompass, Express y Mongoose.
        </p>
        <hr />
        <p className='conocimientos'>Conocimientos.</p>
        <p>En este proyecto, adquirí experiencia en la conexión a una base de datos utilizando JavaScript puro, NodeJS y MongoDBCompass. Aprendí a realizar 
          consultas de una manera nueva, dado que MongoDBCompass es una base de datos NoSQL.
          <br />
          <br />
          Presione el link para ir al documento.
        </p>
        {/* <a href="https://github.com/myac-2022020/ControlOpinions.git"> */}
          <Button>Ir al documento</Button>
        {/* </a> */}
      </div>
    </div>
  );
};
