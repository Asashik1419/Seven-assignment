import './App.css'
import Navbar from './document/htmlAndCss/Navbar'
import Document from './document/Document'
import InProgress from './InProgress/InProgress'
import Componenet from './Component/Componenet'
import Footer from './Footer/Footer'
import { Suspense } from 'react'



const fetchtikit = async () =>{
  const res = await fetch ("/tikit.json")
  return (res).json()
}

function App() {

  const tikitPromise = fetchtikit()


  return (
    <>
       
      <Navbar></Navbar>

      <InProgress></InProgress>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Componenet tikitPromise={tikitPromise}></Componenet>
        </Suspense>

          <Footer></Footer>

        

      <Document></Document>
      


    </>
  )
}

export default App