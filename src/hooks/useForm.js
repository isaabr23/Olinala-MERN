import { useState } from "react"

// El useForme recibe un objeto el cual queremos manipular
export const useForm = (initialState = {}) => {
    
    const [formState, setFormState] = useState(initialState);
    // console.log(formState)

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    // Para borrar lo introducido en la caja una vez que se agrega a la lista
    const reset = () => {
        setFormState(initialState);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        reset,
    };
}