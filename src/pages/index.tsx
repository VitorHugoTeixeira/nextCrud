import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ClientCollection from '../backend/db/ClientCollection'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import ClientRepository from '../core/ClientRepository'

export default function Home() {

  const [client, setClient] = useState<Client>(Client.void())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')


  const repo: ClientRepository = new ClientCollection()

  useEffect(selectAll, [])
  
  function selectAll(){
    repo.selectAll().then(clients => {
      setClients(clients)
      setVisible('table')
    })
    
  }

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  async function excludedClient(client: Client) {
    await repo.delete(client)
    selectAll()
  }

  function newClient() {
    setClient(Client.void())
    setVisible('form')
  }

  async function saveClient(client: Client) {
     repo.save(client)
     selectAll()
  }


  return (
    <div className={`
    flex justify-center items-center h-screen bg-gradient-to-r 
    from-blue-500   to-purple-500 text-white`}>

      <Layout title='Cadastro Simples'>
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className='mb-4' onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table listClients={clients} selectedClient={selectedClient} excludedClient={excludedClient}></Table>
          </>
        ) : (
          <Form didClientChange={saveClient} client={client} canceled={() => setVisible('table')} />
        )}
      </Layout>
    </div>
  )
}





