import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0});
    const {x, y} = coords;

    useEffect(() => {
        //se ejecuta cuando se renderiza el componente o cuando se modifica una propiedad que señalemos en el array del final

        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove)
        return () => {
            //se ejecuta cuando deja de mostrarse el componente
            //si no se borran las referencias el evento anterior va a seguir ejecutandose
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <div>
            <h3>Eres genial</h3>
            <p>x: {x}, y: {y}</p>
        </div>
    )
}
