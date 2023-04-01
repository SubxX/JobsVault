import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SHADOWS, SIZES, icons } from "../../constants";
import FlexBox from "../FlexBox";
import IconButton from "../IconButton";

type Props = {
  style?: any;
};

const JobCardMinimal = ({ style = {} }: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          {
            borderRadius: SIZES.xSmall,
            backgroundColor: "#fff",
            padding: SIZES.medium,
            ...SHADOWS.small,
          },
          style,
        ]}
      >
        <FlexBox style={{ gap: 10 }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 9999,
              backgroundColor: COLORS.white,
            }}
          />
          <View style={{ flex: 1 }}>
            <Text>Graphic Design</Text>
            <Text
              style={{
                fontSize: SIZES.xSmall,
                color: COLORS.gray2,
                marginTop: 8,
              }}
            >
              Odama Studio {"\u25CF"} Fulltime
            </Text>
          </View>

          <IconButton icon={icons.share} />
        </FlexBox>
      </View>
    </TouchableOpacity>
  );
};

export default JobCardMinimal;
