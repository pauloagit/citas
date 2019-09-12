import React, { useState } from 'react';

function App() {
    // useState retorna 2 funciones
    const [citas, guardarCitas] = useState([]);

    console.log(citas);

    return(
        <h1>Hola!!</h1>
    )
}

export default App;