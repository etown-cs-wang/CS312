import { useState } from "react";
import { StyleSheet, View, Text, Image, Button, Alert } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/colors";

import OutlineButton from "../UI/OutlineButton";

function ImagePicker() {
  const [pickedImageUri, setPickedImageUri] = useState();
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

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
    imagePreview = (
      <Image source={{ uri: pickedImageUri }} style={styles.image} />
    );
  }

  return (
    <View>
      <View style={styles.imagePicker}>{imagePreview}</View>
      {/* <Button title="Take Image" onPress={takeImageHandler} />*/}
      <OutlineButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlineButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePicker: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    marginVertical: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: Colors.primary500,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
