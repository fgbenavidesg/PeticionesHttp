//logica para peticiones
const jokeUrl='https://api.chucknorris.io/jokes/random';
const urlUsuarios='https://reqres.in/api/users?page=2';

//La API Fetch proporciona una interfaz JavaScript para acceder 
//y manipular partes del canal HTTP, tales como peticiones y respuestas. 
//async funcion que regresa una promesa
//promesa : es un objeto que representa la terminación o el fracaso de una operación asíncrona
export const obtenerChiste= async()=>{

    try {
            const resp = await fetch(jokeUrl);
            if(!resp.ok) throw 'no se pudo realizar la peticion';
            //return await resp.json();
            const {icon_url,id,value } = await resp.json();
            return {icon_url,id,value };

        } catch (error){

            throw error;
        }
}

export const obtenerUsuarios = async() =>{

    const resp = await fetch(urlUsuarios);
    const {data} = await resp.json();
            return data;
}











//200 todo bien     
/*fetch(jokeUrl).then(resp =>resp.json())
              .then(resp => {
                  console.log(resp.id, resp.value);
              });*/