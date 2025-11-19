import { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { getCurrentPositionAsync } from "expo-location";

import OutlineButton from "../UI/OutlineButton";

function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState(null);

  async function getLocationHandler() {
    console.log("Getting location...");

    const response = await getCurrentPositionAsync();
    console.log(response);
    setPickedLocation({
      lat: response.coords.latitude,
      lng: response.coords.longitude,
    });
  }

  let locationPreview = <Text>No Location picked yet.</Text>;

  // if (pickedLocation) {
  //   locationPreview = <Image source={{ uri: {} }} style={styles.image} />;
  // }

  return (
    <View>
      <View>
        <Text>Location Preview</Text>
      </View>
      <View>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Get Location
        </OutlineButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({});
