import React from "react";

import {ButtonContainer} from './styled';
function Button ({onClick}){
    return(
        <ButtonContainer onClick={onClick}>
        Buscar
        </ButtonContainer>
    )
}

export default Button