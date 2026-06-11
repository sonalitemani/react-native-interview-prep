import { View, Text, FlatList, ActivityIndicator, SafeAreaViewBase, TextComponent, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import User from './User';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '@react-navigation/elements';
import useUser from './useUser';



const UsersList = () => {

    const { refresh, isLoading, handleSearch, filterdata, isRefreshing, searchText, setSearchText } = useUser();


    if (isLoading) {
        return (

            <SafeAreaView >
                <ActivityIndicator />
            </SafeAreaView>
        )

    } {
        return (

            <SafeAreaView >

                <TextInput value={searchText} onChangeText={(item) => { setSearchText(item) }} style={{ backgroundColor: 'white', margin: 20, padding: 20 }} placeholder='search text' ></TextInput>


                <FlatList
                    refreshing={isRefreshing}
                    onRefresh={() => refresh()}
                    data={filterdata}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <User user={item} />
                    )}
                />

            </SafeAreaView>

        )
    }
}

export default UsersList