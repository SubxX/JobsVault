import { View } from "react-native";

type Props = {
  style?: any;
  children: any;
};

const FlexBox = ({ style = {}, children }: Props) => (
  <View
    style={[
      {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      },
      style,
    ]}
  >
    {children}
  </View>
);

export default FlexBox;
