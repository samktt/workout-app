import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
  showGradient?: boolean;
}

const Screen: React.FC<ScreenProps> = ({
  children,
  style,
  showGradient = true,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={styles.view}>
        {showGradient && (
          <LinearGradient
            colors={["black", "#14212D"]}
            style={styles.background}
          />
        )}
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
});
