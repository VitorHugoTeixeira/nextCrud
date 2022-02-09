import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'

export default function Home() {

  const listClients = [
    new Client('Vitor', 22, '1'),
    new Client('Vitoria', 25, '2'),
    new Client('Vitoriano', 23, '3'),
    new Client('Vitoriana', 24, '4')
  ]

  function selectedClient(client: Client) {
    console.log(client.name)
  }

  function excludedClient(client: Client) {
    console.log(client.name)
  }
  return (
    <div className={`
    flex justify-center items-center h-screen bg-gradient-to-r 
    from-blue-500   to-purple-500 text-white`}>

      <Layout title='Cadastro Simples'><Table listClients={listClients}
      selectedClient={selectedClient} excludedClient={excludedClient}></Table></Layout>

    </div>
  )
}
