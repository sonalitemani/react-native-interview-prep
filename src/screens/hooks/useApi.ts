import { useEffect, useState } from 'react';

const useApi = <T,>(
    apiFunction: () => Promise<T>
) => {

    const [loading, setLoading] =
        useState(true);

    const [data, setData] =
        useState<T | null>(null);

    const [error, setError] =
        useState<string | null>(null);

    const fetchData = async () => {
        try {

            setLoading(true);
            setError(null);

            const result =
                await apiFunction();

            setData(result);

        } catch (err) {

            setError(
                err instanceof Error
                    ? err.message
                    : 'Something went wrong'
            );

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        loading,
        error,
        refetch: fetchData
    };
};

export default useApi;