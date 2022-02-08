import Client from "../core/Client";

interface TableProps{
    clients: Client[]

    
}


export default function Table(props){
    return (
        <table>
            <tr>
                <td>Código</td>
                <td>Nome</td>
                <td>Idade</td>
            </tr>
        </table>
    )
}