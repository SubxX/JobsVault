import { buttonStyles } from "../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
} from "react-native";

type Props = {
  icon: ImageSourcePropType;
  onPress?: ((event: GestureResponderEvent) => void) & (() => void);
  style?: any;
};

const IconButton = ({ icon, onPress, style = {} }: Props) => (
  <TouchableOpacity style={[buttonStyles.iconButton, style]} onPress={onPress}>
    <Image source={icon} resizeMode="cover" style={buttonStyles.icon} />
  </TouchableOpacity>
);

export default IconButton;
