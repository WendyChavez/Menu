import React from 'react';

/*import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';*/




//import {MenuCafe} from './components/cafe';
//import {MenuBurritos} from './components/burritos';
import {RegistroExitoso} from './components/RegistroExitoso';
import {UsuarioExistente} from './components/UsuarioExistente';
import {ErrorConfirmacion} from './components/ErrorConfirmacion';
import {URLInvalida} from './components/URLInvalida';
import {ErrorRestablecerContraseña} from './components/ErrorRestrablecerContraseña';
import {RestablecerContraseña} from './components/RestablecerContraseña';
import {UsarioInexistente} from './components/UsuarioInexistente';


/*
{RegistroExitoso ()}
{UsuarioExistente()}
{ErrorConfirmacion()}
{URLInvalida()}
{ErrorRestablecerContraseña()}

{RestablecerContraseña()}



*/

function App() {
  return (

    <div >
{UsarioInexistente()}



 


    </div>
  );
}

export default App;
