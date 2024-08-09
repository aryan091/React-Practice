import React from 'react'
import useFetchData from './hooks/useFetchData'
import AuthHOC from './AuthHOC';

const Posts = () => {

    const url = "https://jsonplaceholder.typicode.com/posts";

    const {data , loading , error} = useFetchData(url);

    if(loading)
    {
        return(
            <p>Loading the Data</p>
        )
    }

    if(error)
    {
        return(
            <p>{error}</p>
        )
    }

  return (
    <div>
        <h1>
            Posts
        </h1>

        <ul>

            {
                data && data.map((post) => (
                    <li key={post.id}>
                        
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>

                    </li>
                ))
            }

        </ul>
        </div>
  )
}

export default AuthHOC(Posts)