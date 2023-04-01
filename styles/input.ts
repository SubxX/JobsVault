import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, SHADOWS } from "../constants";

const inputStyles = StyleSheet.create({
    wrapper: {
        position: 'relative'
    },
    input: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#fff",
        borderRadius: SIZES.xSmall,
        ...SHADOWS.small,
    },
    icon: {

        position: "absolute",
        top: "50%",
        transform: [{ translateY: -10 }],
        zIndex: 2,
    },
    leftIcon: {
        left: 10,
        width: SIZES.large,
        height: SIZES.large,
    },
    rightIcon: {
        width: SIZES.large,
        height: SIZES.large,
        right: 10,
    }
});

export default inputStyles;