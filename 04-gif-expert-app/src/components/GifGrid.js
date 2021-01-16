import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({category}) => {
    
    const { data: images, loading } = useFetchGifs(category);
    // const [count, setCount] = useState(0);

    return (
        <>
            <h3>{ category }</h3>

            {/* forma de mostrar loading con un if sin ser ternario */}
            { loading && <p>Loading</p> }

            <div className="card-grid">
                {/* <h3>{ count }</h3>
                <button onClick={ () => setCount(count + 1)}></button> */}
                    { 
                        images.map( img => (
                            <GifGridItem key={ img.id } {...img}/>
                        )) 
                    }
            </div>
        </>
    )
}

export default GifGrid

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
