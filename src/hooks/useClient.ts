import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTableOrForm from "./useTableOrForm"

export default function useClients(){
  
  const {displayForm, displayTable, tableVisible, formVisible} = useTableOrForm() 

  const [client, setClient] = useState<Client>(Client.void())
  const [clients, setClients] = useState<Client[]>([])


  const repo: ClientRepository = new ClientCollection()

  useEffect(selectAll, [])
  
  function selectAll(){
    repo.selectAll().then(clients => {
      setClients(clients)
      displayTable()
    })
    
  }

  function selectedClient(client: Client) {
    setClient(client)
    displayForm()
  }

  async function excludedClient(client: Client) {
    await repo.delete(client)
    selectAll()
  }

  function newClient() {
    setClient(Client.void())
    displayForm()
  }

  async function saveClient(client: Client) {
     repo.save(client)
     selectAll()
  }


  return {
      saveClient,
      newClient,
      excludedClient,
      selectedClient,
      selectAll,
      client,
      clients,
      tableVisible, 
      displayTable
  }
}