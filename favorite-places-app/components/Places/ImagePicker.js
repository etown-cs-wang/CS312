import { useState } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import {
    launchCameraAsync,
    useCameraPermissions,
    PermissionStatus
} from 'expo-image-picker';
import { Colors } from '../../constants/colors';

function ImagePicker() {
    const [pickedImageUri, setPickedImageUri] = useState();
    const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

    function verifyPermissions() {
        if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            requestPermission();

            return false;
        }
    }

    async function takeImageHandler() {

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });

        console.log(image);
        console.log(image.assets[0].uri);
        setPickedImageUri(image.assets[0].uri);
    }

    let imagePreview = <Text>No image taken yet.</Text>;

    if (pickedImageUri) {
        imagePreview = <Image source={{ uri: pickedImageUri }} style={styles.image} />;
    }

    return (
        <View >
            <View style={styles.imagePicker}>{imagePreview}</View>
            <Button title="Take Image" onPress={takeImageHandler} />
        </View>
    );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePicker: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200,
        marginVertical: 8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: Colors.primary500,
    },
    image: {
        width: '100%',
        height: '100%',
    }
});
