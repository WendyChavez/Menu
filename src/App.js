import React from 'react';

/*import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';*/




//import {MenuCafe} from './components/cafe';
//import {MenuBurritos} from './components/burritos';
import {registroexitoso} from './components/registroexitoso';
import {usuarioexistente} from './components/usuarioexistente';
import {errorconfirmacion} from './components/errorconfirmacion';
import {URLinvalida} from './components/URLinvalida';
/*

{registroexitoso()}


 
  {errorconfirmacion()}

  {URLinvalida()}
*/

function App() {
  return (

    <div >
 {usuarioexistente()}




 


    </div>
  );
}

export default App;
