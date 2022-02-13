import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClients from '../hooks/useClient'

export default function Home() {

  const {tableVisible, displayTable, client, clients, newClient, saveClient, excludedClient, selectedClient} = useClients()

  return (
    <div className={`
    flex justify-center items-center h-screen bg-gradient-to-r 
    from-blue-500   to-purple-500 text-white`}>

      <Layout title='Cadastro Simples'>
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className='mb-4' onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table listClients={clients} selectedClient={selectedClient} excludedClient={excludedClient}></Table>
          </>
        ) : (
          <Form didClientChange={saveClient} client={client} canceled={displayTable} />
        )}
      </Layout>
    </div>
  )
}





