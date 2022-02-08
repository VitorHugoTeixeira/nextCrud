import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'

export default function Home() {
  
  const clients = [
    new Client('Vitor', 22, '1'),
    new Client('Vitoria', 25, '2'),
    new Client('Vitoriano', 23, '3'),
    new Client('Vitoriana', 24, '4')
  ]
  
  
  return (
    <div className={`
    flex justify-center items-center h-screen bg-gradient-to-r 
    from-blue-500   to-purple-500 text-white`}>

    <Layout title='Cadastro Simples'><Table clients={clients}></Table></Layout>
      
    </div>
  )
}
