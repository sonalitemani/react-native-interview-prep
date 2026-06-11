import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { rootName } from '../../routes/routeNames/rootName';
import { RootStack } from '../../routes/RootStack';
import useApi from '../hooks/useApi';
import { getUsers } from '../services/userService';
import { getPosts } from '../services/postService';

const User = ({ user }: any) => {
    const navigation = useNavigation();
    const usersApi = useApi(getUsers);
    const postsApi = useApi(getPosts);


    console.log(usersApi.data?.length)
    console.log(postsApi.data?.length)
    const handleDetail = () => {
        navigation.navigate(rootName.UserDetails, {
            user
        });
    }
    return (
        <Pressable onPress={handleDetail} style={{
            margin: 10,
            padding: 10,
            borderColor: 'back',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingHorizontal: 20,
        }}>
            <Text>{user.name ?? 'neha'}</Text>
            <Text style={{ fontWeight: "bold" }}>{user.email}</Text>
        </Pressable>
    )
}

export default User