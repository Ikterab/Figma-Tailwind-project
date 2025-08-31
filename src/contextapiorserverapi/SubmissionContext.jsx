import React from "react";
import { useState, createContext } from "react";
export const SubmissionContext = createContext()

export function Submissionprovider({children}) {
    const [submission, setAllSubmission] = useState([])
    const addSubmission = (newData) => {
        setAllSubmission((prev) => [...prev, newData])
        
    }
    return (
        <SubmissionContext.Provider value={{ submission, addSubmission }}>
            {children}
        </SubmissionContext.Provider>
    )

}