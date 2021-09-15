import React from 'react';
import { CardBody, Container } from 'reactstrap';
import './css/styles.css';

function App() {
  return (
    <Container>
      <div className ="body m-5">
        
        <div className="card-header">
            bienvenue sur E-Fandray
        </div> 

        <div className="card-body">
          
        </div>

        <div className="card-message">
          <input className="input-message" type="input" placeholder="tapez votre message ici ..." />
        </div>

        <div className="card-footer">
          je suis tojo andy Ramiandrarivo IGGLIA 3 n°53
        </div>

      </div>
    </Container>
  )

}

export default App;
