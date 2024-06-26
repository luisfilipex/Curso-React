import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }) {
    const handleRemoveClick = () => {
        handleRemoveRepo(repo.id);
    }

    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver Repositório</a><br/>
            <a href="#" className="remover" onClick={handleRemoveClick}>Remover</a>
            <hr />
        </ItemContainer>
    );
}

export default ItemRepo;
