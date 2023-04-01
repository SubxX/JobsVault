import { View } from "react-native";
import { SIZES } from "../constants";

const Container = ({
  children,
  style = {},
}: {
  children?: any;
  style?: any;
}) => (
  <View
    style={[{ paddingLeft: SIZES.large, paddingRight: SIZES.large }, style]}
  >
    {children}
  </View>
);

export default Container;
