import Container from 'react-bootstrap/Container';
import { Cardcategory } from '../Components/Category/Cardcategory';
import { Navcategory } from '../Components/Category/Navcategory';
export const Categoryproducts=()=>{
    return(
        <>
        <Container>
            <Navcategory/>
            <Cardcategory/>
        </Container>
        </>
    )
}