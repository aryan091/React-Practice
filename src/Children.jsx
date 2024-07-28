/* eslint-disable react/prop-types */
import React from 'react'

const Children = ({getDataFromChild}) => {

    const [name, setName] = React.useState('')
    const sendData = function (e) {
        e.preventDefault()
        getDataFromChild(name)
    }

  return (
    <>
    <div>Children Component</div>
    <label htmlFor="name">
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={sendData}>SEND</button>
    </label>
    </>
  )
}

export default Children