import React from 'react';

import cad from '../img/cad.png'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export const paginaconfirmacion = () => {
    return (


        <div class="other myDiv">
            <br />
            <br />
            <br />
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-9">
                        <div class="card shadow-lg">
                            <div class="card-body p-4 p-md-5 centrado">
                                <b><p class="registro"> Cad&Lan</p></b>
                                <img src={cad} width="150" height="150" className="rounded mx-auto d-block mt-4 mb-3" alt="" loading="lazy" />
                                <br />
                                <br />
                                <a href="" class="btn btn-primary btn-lg">REGISTRO EXITOSO</a>
                                <br />
                                <br />
                                <p>Ahora su cuenta esta lista para usarse</p>
                                <br />
                                <br />
                            </div>
                        </div>
                        <br />
                        
                                <br />
                                <br />
                                <br />
                                
                    </div>
                </div>
            </div>
        </div>

    );
}