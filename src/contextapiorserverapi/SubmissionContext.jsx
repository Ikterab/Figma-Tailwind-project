import { createContext, useState, useEffect } from 'react'
import { TbSquareRoundedLetterJFilled } from 'react-icons/tb'
export const SubmissionContext = createContext()

export function Submissionprovider({ children }) {
  const [submission, setAllSubmission] = useState([])
  const [user, setUser] = useState(null)
  const addSubmission = (newData) => {
    setAllSubmission((prev) => [...prev, newData])
  }
    // useEffect(()=>{

    // }, [])
    
  return (
    <SubmissionContext.Provider value={{ submission, addSubmission }}>
      {children}
    </SubmissionContext.Provider>
  )
}
