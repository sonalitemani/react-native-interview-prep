import { Text, Pressable } from 'react-native'
import React from 'react'
import { MessageCircle } from 'lucide-react-native';
import ReusableBottomSheet from '../hooks/reUseableBottomSheet';


const Post = ({ item, isModalVisible, setModalVisible }: PostProps) => {

    return (
        <Pressable style={{
            margin: 10,
            padding: 10,
            borderColor: 'back',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingHorizontal: 20,
        }}>
            <Text style={{ fontWeight: "bold" }}>{item?.title ?? 'neha'}</Text>
            <Text >{item?.body}</Text>

            <Pressable onPress={() => setModalVisible(true)}><MessageCircle /></Pressable>;
            <ReusableBottomSheet
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
            />
        </Pressable>
    )
}

export default Post