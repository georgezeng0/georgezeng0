import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'

function App() {
  const { isLoading, isSetup } = useGlobalContext();

  if (isLoading) return <main className='section'>
    
  <Loading/>  

</main>
  
  return <main className='section'>
    
      {isSetup? <SetupForm />: <Modal/>}   
    
  </main>
}

export default App
