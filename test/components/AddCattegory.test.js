import {fireEvent, render, screen} from '@testing-library/react'
import { AddCategory } from '../../src/components';


describe('Pruebas en AddCattegory',  ()=>{

    test('debe cambiar el texto en el input', () => {
        render(<AddCategory onNewCategory={ ()=>{} }/>)
      
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target:{ value: 'saitama'}});
        screen.debug();

        expect(input.value).toBe('saitama')

    })
});