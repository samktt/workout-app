import React from "react";
import { Text as RNText, StyleSheet, TextProps } from "react-native";
import { useFonts } from "expo-font";

const customFont = "Poppins-Regular";

const Text: React.FC<MyAppTextProps> = (props) => {
  const [fontsLoaded] = useFonts({
    [customFont]: require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RNText style={[styles.defaultText, props.style]}>{props.children}</RNText>
  );
};

interface MyAppTextProps extends TextProps {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: customFont,
  },
});

export default Text;
