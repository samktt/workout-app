import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

interface GraphButtonProps {
  label: string;
  onPress: () => void;
  active: boolean;
  backgroundColor?: string;
  textColor?: string;
}

const GraphButton: React.FC<GraphButtonProps> = ({
  label,
  onPress,
  active,
  backgroundColor = "#1F2830",
  textColor = "#F1F2F3",
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          { backgroundColor: active ? "#D9EAFF" : "#1F2830" },
        ]}
        onPress={onPress}
      >
        <Text
          style={[styles.buttonText, { color: active ? "#000" : "#F1F2F3" }]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    width: 54,
    height: 26,
    borderRadius: 7,
  },
});

export default GraphButton;
