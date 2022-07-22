import { subirImagen } from "./http-provider";


const body = document.body;
let inputFile, imgfoto, divFoto;

const crearInputHtml = () =>{

    const http = `
        <h1 class="mt-5" >Subir Archivo</h1>
        <hr>
        <label>Selecciona una fotografia: </label>
        <input type='file' accept="image/png, image/jpeg">
        <br>
        <img id="foto" class="img-thumbnail" src="">
    `;

    const div = document.createElement('div');
    div.innerHTML = http;

    body.append( div );

    inputFile   = document.querySelector('input');
    imgfoto     = document.querySelector('#foto');
    

}

const crearAlert = ( url ) =>{

    const alert = `
        <div class="alert alert-primary m-5">
            <a id="urlFoto" >${url}</a>
        </div>
    `;

    const div1 = document.createElement('div');
    div1.innerHTML = alert;

    body.append( div1 );

    divFoto     = document.querySelector('#urlFoto');


}

const eventos = () => {
    inputFile.addEventListener('change', (event) => {

        const file = event.target.files[0];

        // console.log( file );
        subirImagen( file ).then( url => {
            imgfoto.src = url;
            // divFoto.setAttribute('href', url);
            crearAlert( url );
        });

    });

   
}

export const init = () =>{

    crearInputHtml();
    eventos();
}