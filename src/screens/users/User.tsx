import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { rootName } from '../../routes/routeNames/rootName';
import { RootStack } from '../../routes/RootStack';

const User = ({ user }: any) => {
    const navigation = useNavigation();
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