import { View, Text } from 'react-native'
import React from 'react'

const UserDetail = ({ route: { params } }: any) => {
    console.log(params?.user?.name);
    const user = params?.user;
    return (
        <View>
            <Text>{user?.name}</Text>
            <Text>{user?.email}</Text>
        </View>
    )
}

export default UserDetail