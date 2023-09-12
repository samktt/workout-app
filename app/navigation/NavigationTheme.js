import { DefaultTheme } from "@react-navigation/native";
import theme from "../config/Theme";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.backgroundColor,
  },
};
