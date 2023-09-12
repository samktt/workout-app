import React from "react";
import { Text as RNText, StyleSheet, TextProps } from "react-native";
import { useFonts } from "expo-font";

const customFontRegular = "Poppins-Regular";
const customFontBold = "Poppins-Bold";

const Text: React.FC<MyAppTextProps> = (props) => {
  const [fontsLoaded] = useFonts({
    [customFontRegular]: require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
    [customFontBold]: require("../../assets/fonts/Poppins/Poppins-Bold.ttf"), // Load your bold font
  });

  if (!fontsLoaded) {
    return null;
  }

  const { style, fontWeight, ...restProps } = props;

  const fontFamily = fontWeight === "bold" ? customFontBold : customFontRegular;

  return (
    <RNText style={[styles.defaultText, { fontFamily }, style]} {...restProps}>
      {props.children}
    </RNText>
  );
};

interface MyAppTextProps extends TextProps {
  children: React.ReactNode;
  fontWeight?: "normal" | "bold";
}

const styles = StyleSheet.create({
  defaultText: {},
});

export default Text;
