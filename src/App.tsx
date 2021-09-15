import React from 'react';
import { CardBody, Container } from 'reactstrap';
import { Inputfield } from './components/Inputfield';
import './css/styles.css';

function App() {
  return (
    
    <form className ="body m-5">
      
      <div className="card-header">
          bienvenue sur E-Fandray
      </div> 

      <div className="card-body">
        ici cours le furret le furret du bois jolie
      </div>

      <div className="card-message">
        <Inputfield  />
      </div>

      <div className="card-footer">
        je suis tojo andy Ramiandrarivo IGGLIA 3 n°53
      </div>

    </form>
    
  )

}

export default App;
