import { Alert } from 'react-native'
import { useState, useEffect } from 'react'

const useAppWrite = (fn) => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
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

        fetchData();
    }, [])

    return { data };
}

export default useAppWrite;