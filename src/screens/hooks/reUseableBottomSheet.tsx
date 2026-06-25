import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ReactNativeModal from 'react-native-modal'

const ReusableBottomSheet = ({ isModalVisible, setModalVisible }: {
    isModalVisible: boolean,
    setModalVisible: (value: boolean) => void
}) => {

    return (
        <ReactNativeModal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}>
            <View style={{ flex: 1 }}>
                <Text>I am the modal content!</Text>
            </View>

        </ReactNativeModal>

    )
}

export default ReusableBottomSheet