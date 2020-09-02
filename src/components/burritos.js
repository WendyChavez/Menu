import React from 'react';
//import logo from './logo.svg';


import logo from '../src/img/logob.jpg'
import sencillo from '../src/img/sencillo.jpg'
import especiales from '../src/img/especiales.jpg'
import champis from '../src/img/champis.jpg'
import combos from '../src/img/combos.jpg'
import promociones from '../src/img/promocion.png'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={ logo } width="400" height="250"  className="rounded mx-auto d-block mt-4 mb-3" alt="crepa" loading="lazy"/>
        <div className="container text-light">
        <h1 className="text-center"><span className="texto-naranja-degradado font-weight-bold">Menu</span></h1>
                <p className="text-center">Burritos, combos, promociones y mucho más...!!</p>
                
                
      
                <div className="card border-dark shadow">
                    <img src={sencillo} className="card-img" alt="Burritos sencillos" loading="lazy"/>
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">BURRITOS SENCILLOS</h5>
                    </div>
                </div>

                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Bistec</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Longaniza</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Campechano</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Al pastor</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chuleta</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Al pastor</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Pechuga</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$45</p></div>
                </div>
             
                <br/>
                <div className="card border-dark shadow">
                    <img src={especiales} className="card-img" alt="Waffles" loading="lazy"/>
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">ESPECIALES</h5>
                    </div>
                </div>
                
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Arrachera</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Chistorra</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Alambre</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$50</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Vegetariano (Champiñones, morrón, cebolla y queso)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Americano (Chistorra y arrachera)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$55</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Jumbo (Bistec, longaniza, arrachera, pechuga, morrón y cebolla)</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <br/>

                <div className="card border-dark shadow">
                    <img src={champis} className="card-img" alt="Burritos champis" loading="lazy"/>
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">BURRITOS CHAMPIS</h5>
                    </div>
                </div>

                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Champi pollo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Champi bistek</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Champi arrachera</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$75</p></div>
                </div>
                  
                <br/>
                <div className="card border-dark shadow">
                    <img src={combos} className="card-img" alt="Combos" loading="lazy"/>
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">COMBOS</h5>
                    </div>
                </div>

                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">1 burrito 1 papas 1 refresco por</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$70</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Combo arrachera</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Combo americano</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$80</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Combo champipollo</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$85</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Combo alambre</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$75</p></div>
                </div>
                  
                <br/>
                <div className="card border-dark shadow">
                    <img src={promociones} className="card-img" alt="Promociones" loading="lazy"/>
                    <div className="card-img-overlay m-0 p-0">
                        <h5 className="card-title text-center font-weight-bold p-3 bg-negro-alfa-75">PROMOCIONES</h5>
                    </div>
                </div>

                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Diaria: 2 burritos al pastor por</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$60</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Lunes: tres tortas por</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$75</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Martes: 2 burros de pastor y 1 de arrachera por </p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$105</p></div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-10 m-0 p-1"><p className="m-0 p-0">Jueves: 6 tacos 1 refresco de 2 litros por</p></div>
                    <div className="col-2 m-0 p-1"><p className="m-0 p-0">$105</p></div>
                </div>
               
                  
                <br/>
                <h1 className="text-center mt-5 mb-3"><span className="texto-naranja-degradado font-weight-bold">Ubicación</span></h1>
                <div className="embed-responsive embed-responsive-16by9 mb-5">
                <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Cruz%20Del%20Centuri%C3%B3n%2092,%20Burrer%C3%ADa%20Sat%C3%A9lite%20Mexico%20City+(Burrer%C3%ADa)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.add-map.net/'>www.add-map</a> <script type='text/javascript' src='script.js?id=bb08b21668fce288222d0494490e8ca06ce00af8'></script>
                </div>
                </div>
        </section>


      </header>
    </div>
  );
}

export default App;

