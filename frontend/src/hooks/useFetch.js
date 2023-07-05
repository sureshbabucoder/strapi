import {useState,useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            try{
                const response = await fetch(url);
                const json= await response.json();
                setData(json.data);
                setLoading(false);
            }catch(e){
                setError(e)
                setLoading(false);
            }
        }

        fetchData()
    },[url])

  return {loading,error,data}
}

export default useFetch