import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { CarContext } from "./CarContext";

export default function CarinputComponent() {
    const { setCarros } = useContext(CarContext)
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [alert, setAlert] = useState(false)

    const addCarro = () => {
        if(marca && modelo){
            setCarros(prevCarros => [...prevCarros, {marca, modelo}])
            setMarca('')
            setModelo('')
        }else{
            setAlert(true)
        }
    }

    return (
        <View>
            <TextInput value={marca} onChangeText={setMarca} placeholder="Marca do Carro" />
            <TextInput value={modelo} onChangeText={setModelo} placeholder="Modelo do Carro" />
            <Button title="Adicionar" onPress={addCarro}/>

            {alert && <Text>Preencha todos os campos</Text>}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})