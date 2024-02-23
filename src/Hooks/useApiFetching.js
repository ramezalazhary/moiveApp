import { useEffect, useState } from "react"
import { fetchDataFromApi } from "../utils/api"




const useApiFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading("loading...")
        setError(null)
        setData(null)

        fetchDataFromApi(url)
            .then((res) => {

                setData(prev => res)

            }).catch((error) => {

                setError(error)

            })


        setLoading(false)

    }, [url])


    return { error, data, loading }
}


export default useApiFetch