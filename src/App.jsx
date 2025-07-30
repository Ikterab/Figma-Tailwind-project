import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './Elements/navbar'
import { Advertisement } from './Elements/Advertisement'
import { Carbrand } from './Elements/companies'
import { Offers } from './Elements/whochoose'
import { Rentals } from './Elements/rentaldeal'
import { Testimonial } from './Elements/Testimonial'
import { DownloadeApp } from './Elements/downloadeapp'
import { Footer } from './Elements/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Advertisement />
        {/* <Carbrand />
        <Offers />
        <Rentals />
        <Testimonial />
        <DownloadeApp/>
      <Footer/> */}
      </div> 
    </>
  )
}

export default App














{/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}