import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe("Pruebas en GifItem",()=>{
const title = "One Punch Man";
const url = "https://www.onepunchman.com/";

    test('Debe hacer match con el snapshot',()=>{
       const {container} = render(<GifItem title={title} url={url}/>)
        expect( container ).toMatchSnapshot();
    })

    test('Debe mostar la imagen con el url y el ALT indicado', () => {
     render(<GifItem title={title} url={ url }/>)
        // expect(screen.getByRole('img').alt).toBe(title);
        // expect(screen.getByRole('img').src).toBe(url)
        const {src ,alt } = screen.getByRole('img');
        expect ( src ).toBe( url )
        expect ( alt ).toBe( title )

})

test('Debe mostrar el titulo en el componente',()=>{
    render( <GifItem title={ title} url={ url }/>)
    expect(screen.getByText( title )).toBeTruthy();
})
})