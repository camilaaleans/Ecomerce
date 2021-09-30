import {prendas} from './data.js'

const card = document.querySelector('#cards')

LoadPrendas(prendas)

function LoadPrendas(prendas){
    card.innerHTML=''
    prendas.ForEach(data =>{
       const item = document.createElement('div')

       item.innerHTML= 
       <div class="tab-pane fade show active container" id="pills-profile" role="tabpanel"
       aria-labelledby="pills-profile-tab">
       <h2 class="h4 m-4 text-primary text-center">Productos</h2>

             
       <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
           <div class="card" style="width: 18rem; ">
               <img src="(data.image)" alt="card-image-top"> </img>
               <div class="card shadow mb-1 bg-white rounded text-black ">
                   <h5 class="card title">(name)</h5>
                   <p class="card-text">Lenceria única como tú</p>
                   <a href="#" class="btn btn-primary"> Compra ahora</a>
                   <div class="card shadow mb-1 bg-black rounded text-white" style="width: 16rem;">           
                   </div> 
               </div>
           </div>
       </div>
   </div>
       

       card.appendChild(item)

    {};
     }) }
     function addformularioToSystem(pNombreyApellido, pTelefono, pCorreo, pMensaje){

        var formulario ={
            NombreyApellido : pNombreyApellido,
            telefono:pTelefono, 
            correo: pCorreo,
            mensaje: pMensaje
        };
        console.log(formulario);
        formularioList.push(nuevo);
        LocalStoreeFormularioList(formularioList)
    }
    
    function getFormularioList() {
        var storedList= localStorage.getItem('LocalFormulario');
        if(storedList== null)
        formularioList =[];
        else{
            formularioList = JSON.parse(storedList);
        }
    
        return formularioList
    }
    
    function LocalStoreeFormularioList(plist){
        localStorage.setItem('LocalFormulario', JSON.stringify(plist))
    }
     