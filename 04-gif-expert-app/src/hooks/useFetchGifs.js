import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    //useEffect es muy util porque cuando utilizamos setCount por ejemplo
    //react ejecuta de nuevo todo el codigo del componente por lo cual podemos 
    //machacar valores que no queremos
    useEffect( () => {
        getGifs(category)
            .then(imgs => setState({
                data: imgs,
                loading: false
            }));
        //en el array señalamos las dependecias/logica por la cual
        //debe de ejecutarse getGifs
        //es decir sin dependencias getGifs se ejecutará solo una vez
        //pero hemos indicado que se ejecute la primera vez y cuando cambie de valor category
    }, [ category ]);

    return state;
}