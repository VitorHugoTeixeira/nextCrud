import Client from "../core/Client";

interface TableProps {
    listClients: Client[]
}


export default function Table(props: TableProps) {

    function renderHeader() {
        return (
            <tr>
                <td>Código</td>
                <td>Nome</td>
                <td>Idade</td>
            </tr>
        )
    }

    function renderData() {
        return props.listClients?.map((client, i) => {
            return (
                <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.age}</td>
                </tr>
            )
        })
    }


    return (
        <table>
            <thead>{renderHeader()}</thead>
            <tbody>{renderData()}</tbody>
        </table>
    )
}