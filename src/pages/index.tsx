import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'

export default function Home() {

  const [client, setClient] = useState<Client>(Client.void())
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const listClients = [
    new Client('Vitor', 22, '1'),
    new Client('Vitoria', 25, '2'),
    new Client('Vitoriano', 23, '3'),
    new Client('Vitoriana', 24, '4')
  ]

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function excludedClient(client: Client) {
    console.log(client.name)
  }

  function newClient() {
    setClient(Client.void())
    setVisible('form')
  }

  function saveClient(client: Client) {
    console.log(client)
    setVisible('table')
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
            <Table listClients={listClients} selectedClient={selectedClient} excludedClient={excludedClient}></Table>
          </>
        ) : (
          <Form didClientChange={saveClient} client={client} canceled={() => setVisible('table')} />
        )}
      </Layout>
    </div>
  )
}





