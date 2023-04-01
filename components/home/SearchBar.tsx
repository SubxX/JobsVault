import { icons } from "../../constants";
import { inputStyles } from "../../styles";
import { View, Text, SafeAreaView, TextInput, Image } from "react-native";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <View style={inputStyles.wrapper}>
      <Image
        source={icons.search}
        style={[inputStyles.icon, inputStyles.leftIcon]}
      />
      <TextInput placeholder="Search" style={[inputStyles.input]} />
      <Image
        source={icons.filter}
        style={[inputStyles.icon, inputStyles.rightIcon]}
      />
    </View>
  );
};

export default SearchBar;
