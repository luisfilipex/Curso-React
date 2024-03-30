import React, { useState } from "react";

const App = () => {
    const [usuario, setUsuario] = useState("");
    const [usuarios, setUsuarios] = useState(["Pablo", "José", "Manoel"]);

    const adicionarUsuario = () => {
        if (usuario.trim() !== "") {
            setUsuarios([...usuarios, usuario]);
            setUsuario("");
        }
    };

    const removerUsuario = (index) => {
        const novosUsuarios = [...usuarios];
        novosUsuarios.splice(index, 1);
        setUsuarios(novosUsuarios);
    };

    return (
        <div className="App">
            <h1>Lista de pessoas</h1>
            <div>
                <input 
                    value={usuario}
                    onChange={(event) => setUsuario(event.target.value)}
                />
                <button onClick={adicionarUsuario}>Adicionar</button>
            </div>
            <hr />
            {usuarios.map((item, index) => (
                <div key={index}>
                    <p>{item}</p>
                    <button className="remove" onClick={() => removerUsuario(index)}>Remover</button>
                </div>
            ))}
        </div>
    );
};

export default App;
