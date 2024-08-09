import axios from "axios";
import { useEffect, useState } from "react";

function useFetchData(url)
{
    const [loading , setLoading] = useState(false);
    const [data , setData] = useState([]);
    const [error , setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data , loading , error }
}

export default useFetchData