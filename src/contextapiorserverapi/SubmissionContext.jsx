import { createContext, useState, useEffect } from 'react'
import { TbSquareRoundedLetterJFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
export const SubmissionContext = createContext()

export function SubmissionProvider({ children }) {
  // const navigate =useNavigate()
  const [submission, setAllSubmission] = useState([])
  const addSubmission = (newData) => {
    setAllSubmission((prev) => [...prev, newData])
  }
 const loggedinUser=JSON.parse(localStorage.getItem('loggedinuser'))  || null
  const [user, setUser] = useState(loggedinUser)
 
  useEffect(() => { 
    if (user) {
      localStorage.setItem('loggedinuser', JSON.stringify(user)) 
      
    }
    else {
      localStorage.removeItem('loggedinuser')
    }

    }, [user])
    
  
  
  return (
    <SubmissionContext.Provider value={{ submission, addSubmission, user , setUser }}>
      {children}
    </SubmissionContext.Provider>
  )
}
