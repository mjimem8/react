import { shallow } from "enzyme";
import React from 'react';
import AddCategory from "../../components/AddCategory";
import '@testing-library/jest-dom'

describe('Pruebas en <AddCategory />', () => {
    //simula una funcion con jest
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setcategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setcategories={setCategories} />);
    })

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        //se le pasa valor cuando lanza el evento
        input.simulate('change', {target: { value }});

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('NO debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() {} })
        
        //comprueba la NO llamada de esa función
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo'; 
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        //Se llama con cualquier tipo de función
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');
    })


});