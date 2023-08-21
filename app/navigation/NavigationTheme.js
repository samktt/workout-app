import { DefaultTheme } from "@react-navigation/native";
import theme from "../config/theme";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.backgroundColor,
  },
};
