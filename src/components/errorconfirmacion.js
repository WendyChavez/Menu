import React from 'react';

import cad from '../img/cad.png'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export const ErrorConfirmacion = () => {
    return (
        
        <div >
            <br />
            <br />
            <br />
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-9">
                        <div class="card shadow-lg">
                            <div class="card-body p-4 p-md-5 centrado">
                                <b><p class="registro"> ERROR DE CONFIRMACIÓN </p></b>
                                <br />

                                <b><p class="letra">Ocurrió un problema al intentar confirmar su cuenta, por favor contacte a soporte</p></b>
                                <br />
                                <br />
                                <b><p class="registro"> Cad&Lan</p></b>
                                <img src={cad} width="150" height="150" className="rounded mx-auto d-block mt-4 mb-3" alt="" loading="lazy" />
                                <br />
                             
                               
                            </div>
                        </div>
                        <br />
                       
                      
                    </div>
                </div>
            </div>
        </div>







    );

}