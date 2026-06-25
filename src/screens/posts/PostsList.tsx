import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import useApi from '../hooks/useApi'
import { getPosts } from '../services/postService'
import Post from './Post'
import { SafeAreaView } from 'react-native-safe-area-context'

const PostsList = () => {
    const { data, error, loading, refetch } = useApi(getPosts);
    const [isModalVisible, setModalVisible] = useState<Boolean>(false);


    if (loading) {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    } else if (error) {
        return (
            <SafeAreaView>
                <Text> Something went wrong.... !!!!!!</Text>
            </SafeAreaView>
        )
    } else {
        return (
            <FlatList
                refreshing={loading}
                onRefresh={() => refetch}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Post item={item} isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
                )}
            >
            </FlatList>
        )
    }


}

export default PostsList