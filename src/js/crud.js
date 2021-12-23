const urlCrud ='https://reqres.in/api/users';

export const getUsuario = async(id)=>{

    const resp = await fetch(`${urlCrud}/${id}`);
    const {data}  = await resp.json();
    return data;
}

export const crearUsuario = async(usuario)=>{
    const resp = await fetch(urlCrud,{

        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'content-type':'application/json',
        }
    });

    return await resp.json();
}
export const actualizarUsuario = async(id,usuario)=>{
    const resp = await fetch(`${urlCrud}/${id}`,{

        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'content-type':'application/json',
        }
    });

    return await resp.json();
}
export const borrarUsuario = async(id)=>{

    const resp = await fetch(`${urlCrud}/${id}`,{

        method: 'DELETE',
    });
    return (resp.ok)?  'eliminado':'no se realizo';

}