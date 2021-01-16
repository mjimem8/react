import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

    //para controlar el cambio del useEffect es esencial obtener el result.current antes o despues de waitForNextUpdate
    //ya que es como el que 'ejecuta' el useEffect
    test('debe de retornar el estado inicial', async() => {
        //hook virtual
        //useFetchGifs retorna el state de un hook
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One punch'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        //aqui no se ha ejecutado el useEffect
        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    });

    test('debe de retornar un arreglo de imagenes y el loading en false', async() => {

        //waitForNextUpdate espera cambios en el hook
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One punch'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
        
    });
});