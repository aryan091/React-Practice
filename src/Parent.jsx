import Children from "./Children"
import { useState } from 'react'
const Parent = () => {

    const[name, setName] = useState('')
    const getDataFromChild = function (data) {
        setName(data)
        console.log(data)
    }
    return (
        <div>
            Parent
            <Children getDataFromChild={getDataFromChild} />
            <p>Data from Children : {name}</p>
        </div>
    )

}
export default Parent