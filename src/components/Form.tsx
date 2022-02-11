import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client
    didClientChange?: (client: Client) => void
    canceled?: () => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client.name ?? '')
    const [age, setAge] = useState(props.client.age ?? 0)
   
    return (
        <div>
            {id ? (
                <Input text="Código" value={id} readOnly className="mb-5" />
            ) : false}
            <Input text="Nome" value={name} didValueChange={setName} className="mb-5" />
            <Input text="Idade" value={age} type="number" didValueChange={setAge} />
            <div className="flex justify-end mt-7">
                <Button className="mr-2" color="blue" onClick={() => props.didClientChange?.(new Client(name, +age, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.canceled}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}