import React, { createContext, useState} from 'react'

const CarContext = createContext();

export function CarProvider( { children } ){
    //criando o estado carros que vai ser compartilhado entre os outros componentes
    const [cars, setCars] = useState([]);

    //children fala para o contexto que ele terá uns componentes que vão utilizar dos valores que ele for gerenciar
    return (
        <CarContext.Provider value={{ carros, setCarros }}>
            {children}
        </CarContext.Provider>
    )
}

export  { CarContext }
