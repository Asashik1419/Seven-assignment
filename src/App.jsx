import './App.css'
import Navbar from './document/htmlAndCss/Navbar'
import Document from './document/Document'
import InProgress from './InProgress/InProgress'
import Componenet from './Component/Componenet'
import Footer from './Footer/Footer'
import { Suspense, useState } from 'react'
import Complet from './complet/Complet'


const fetchtikit = async () => {
  const res = await fetch("/tikit.json")
  return res.json()
}


function  App() {
  const tikitPromise = fetchtikit()


const [inprogressIssues, setInprogressIssues] = useState([])

const handleInprogress = (issue)=>{
    setInprogressIssues([...inprogressIssues, issue])
}

const [selectedTicket, setSelectedTicket] = useState([]);



  return (
    <>
      <Navbar />
      <InProgress inprogressIssues={inprogressIssues} />




      {/* Box without onClick */}
      

      <div className="max-w-[1200px] mx-auto mb-20 mt-10">
        <div className="flex gap-10">

          {/* Left Section */}
          <div className="flex-1"> <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}> <Componenet handleInprogress={handleInprogress} selectedTicket={selectedTicket}  setSelectedTicket={setSelectedTicket} tikitPromise={tikitPromise}></Componenet>
           </Suspense> </div>

          {/* Right Section */}
          <div className="w-[400px]">
            <Complet selectedTicket={selectedTicket} />
          </div>

        </div>
      </div>
      
      <Footer />
      <Document />
    </>
  )
}

export default App