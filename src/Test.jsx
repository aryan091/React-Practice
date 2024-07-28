import React, { useState , useEffect } from 'react'
import axios from 'axios'
const Test = (props) => {

    const [input , setInput] = useState("")
    const [errorText , setErrorText] = useState("")
    const [fact , setFact] = useState("")
    const [subval, setSubval] = useState("")

    const fetchDev = async () => {
        try {
            const response = await axios.get(`https://catfact.ninja/fact`);
            console.log(response.data)
            setFact(response.data.fact)
        } catch (error) {
            setErrorText(`Error fetching data: ${error}`)
            console.error('Error fetching data:', error);
        }
    }

    const handleClick = () =>{
        fetchDev()
    }

    useEffect(()=>{
        fetchDev()
    },[])

    const handleInputClick = () => {
        setSubval(input)
    }
    const handleChange = (e) => {
        setInput(e.target.value)
    }
  return (
    <>
    <div>Testing the component : {props.value} </div>
   
    <input type="text" value={input} onChange={handleChange}/>
    <div>See Input text : {input}</div>
    <button onClick={handleInputClick}>Submit</button>
    <button onClick={handleClick}>Click to get User Details</button>
    {errorText ? errorText : fact}
    <div>
        Submitted val is : {subval}
    </div>

    </>
  )
}

export default Test