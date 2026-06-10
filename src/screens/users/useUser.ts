import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

type Users = {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
    address: {
        address: string,
        street: string,
        city: string
    }

};

const useUser = () => {
    const [isLoading, setLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false;)
    const [data, setData] = useState<Users[]>([]);
    const [filterdata, setFilterData] = useState<Users[]>([]);
    const handleSearch = (search: string) => {
        const query = search.toLowerCase();

        if (query != '') {
            setFilterData(
                data.filter(
                    item =>
                        item.name.toLowerCase().includes(query) ||
                        item.email.toLowerCase().includes(query)
                )
            );
        } else {
            setFilterData(data);
        }

    }
    const refresh = () => {
        setIsRefreshing(true);
        getUser();
        setIsRefreshing(false);
    }
    const getUser = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = (await response.json());
            setData(json);
            setFilterData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUser();

    }, []);
    return {
        refresh,
        filterdata,
        handleSearch,
        isLoading,
        isRefreshing
    }
}

export default useUser