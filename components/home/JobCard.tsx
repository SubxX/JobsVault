import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants";
import { Dimensions } from "react-native";
import FlexBox from "../FlexBox";

type Props = {
  style?: any;
};

const JobCard = ({ style = {} }: Props) => {
  const width = Dimensions.get("window").width / 1.5;

  return (
    <TouchableOpacity>
      <View
        style={[
          {
            borderRadius: SIZES.xSmall,
            backgroundColor: "#fff",
            padding: SIZES.medium,
            width,
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
          <View>
            <Text>Graphic Design</Text>
            <Text style={{ fontSize: SIZES.xSmall, color: COLORS.gray }}>
              $50-90k/year
            </Text>
          </View>
        </FlexBox>

        <Text style={{ marginTop: SIZES.medium }}>Odama Studio</Text>
        <View style={{ height: 3 }} />
        <FlexBox style={{ justifyContent: "space-between" }}>
          <Text style={{ fontSize: SIZES.xSmall + 1, color: COLORS.gray2 }}>
            Indonesia
          </Text>
          <Text style={{ fontSize: SIZES.xSmall + 1, color: COLORS.gray2 }}>
            Fulltime
          </Text>
        </FlexBox>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;
