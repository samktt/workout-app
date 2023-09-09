import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Rect } from "react-native-svg";
import { ReText } from "react-native-redash";

import theme from "../config/theme";

const AnimatedRect = Animated.createAnimatedComponent(Rect);

type ProgressBarProps = {
  progress: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const screenWidth = Dimensions.get("window").width; // Get the screen width
  const horizontalPadding = 30;
  const width = screenWidth - horizontalPadding * 2; // Subtract padding

  const height = 7;
  const backOpacity = 1;
  const backColor = "#1E272D";
  const frontOpacity = 1;
  const frontColor = theme.colors.primary;
  const borderRadius = 5;
  const textLabel = " OF ";
  const duration = 1000;
  const maxLength = 100;
  const title = "Calorie Goal";

  const halfRect = maxLength;
  const sharedProgress = useSharedValue(0);

  useEffect(() => {
    sharedProgress.value = withTiming(progress, { duration });
  }, [progress]);

  const animatedProps = useAnimatedProps(() => ({
    width: (Math.round(progress * width) / maxLength) * sharedProgress.value,
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(sharedProgress.value * progress)}`;
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{ flex: 1, color: "white" }}>{title}</Text>
        <ReText style={{ color: "white" }} text={progressText} />
        <Text style={{ color: "white" }}>
          {textLabel}
          {maxLength}
        </Text>
      </View>
      <Svg height={height} width={width}>
        <G origin={`${halfRect}, ${halfRect}`}>
          <Rect
            x="0%"
            y="0%"
            width={width}
            height={height}
            fill={backColor}
            rx={borderRadius}
            opacity={backOpacity}
          />
          <AnimatedRect
            x="0%"
            y="0%"
            animatedProps={animatedProps}
            height={height}
            fill={frontColor}
            rx={borderRadius}
            opacity={frontOpacity}
          />
        </G>
      </Svg>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    alignItems: "center",
    marginBottom: 10,
  },
  textContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
