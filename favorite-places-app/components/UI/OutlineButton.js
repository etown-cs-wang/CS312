import { StyleSheet, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/colors";

function OutlineButton({ icon, children, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons
        style={styles.icon}
        name={icon}
        size={18}
        color={Colors.primary500}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: Colors.primary500,
  },
});
