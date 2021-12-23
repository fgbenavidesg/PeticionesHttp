//import { init } from "./js/chistes-page";
//init();
//import { init } from "./js/usuarios-page";
//init();

import  * as crud  from './js/crud';

crud.getUsuario(1).then(console.log);
crud.crearUsuario({
    name : 'fernando',
    job:'carpitenro'
}).then(console.log);

crud.actualizarUsuario(1,{

    name: 'melisa',
    job: 'developer',
}).then(console.log)
crud.borrarUsuario(1).then(console.log);