import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Submissionprovider } from './contextapiorserverapi/SubmissionContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Submissionprovider>
      <App />
    </Submissionprovider>
  </StrictMode>
)
