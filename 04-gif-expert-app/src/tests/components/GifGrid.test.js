import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />', () => {
    const category = 'One Punch';

    test('debe de mostrarse correctamente', () => {

        //moquea los datos que devuelve dicha función
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid  category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const imgs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];
        
        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });

        const wrapper = shallow(<GifGrid  category={category} />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
    });


})