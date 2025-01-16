import { Alert } from 'react-native'
import { useState, useEffect } from 'react'

const useAppwrite = (fn) => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fn();

            setData(response);

        } catch (error) {
            Alert.alert("Error", error.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => fetchData();

    return { data, isLoading, refetch };
}

export default useAppwrite;