import './App.css'
import Navbar from './document/htmlAndCss/Navbar'
import Document from './document/Document'
import InProgress from './InProgress/InProgress'
import Componenet from './Component/Componenet'
import Footer from './Footer/Footer'
import { Suspense } from 'react'
import Complet from './complet/Complet'



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

        
        
        {/* strt */}

        <div className="max-w-[1200px] mx-auto mt-10">
      <div className="flex gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Componenet tikitPromise={tikitPromise}></Componenet>
        </Suspense>
        </div>

        {/* Right Section */}
        <div className="w-[400px]">
          <Complet></Complet>
        </div>
      </div>
    </div>
        
        

          <Footer></Footer>

        

      <Document></Document>
      


    </>
  )
}

export default App