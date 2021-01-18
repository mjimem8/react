import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    //si tiene data devuelve el primer elemento de la data y sino devuelve undefined
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad</h1>
            <hr />

            {
                loading 
                ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{ quote }</p>
                        <footer className="blockquote-footer"> { author } </footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={ () => increment()}>
                Siguiente quote
            </button>

        </div>
    )
}
