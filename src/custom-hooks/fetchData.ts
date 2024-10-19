import { useEffect, useState } from "react"
import fetchGetApi from "../services/api"

function useFetchData<T>(url: string) {
    const [data, setData] = useState<T>({} as T);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        (
           async () =>{
            try {
                const response = await fetchGetApi<T>(url);
                setData(response);
            } catch (err) {
                    setError(err as Error)
            } finally {
                setLoading(false);
            }
           }
        )()
     },[url]);

     return {data, error, loading};
} 

export default useFetchData;