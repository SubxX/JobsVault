import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants";

const button = StyleSheet.create({
    iconButton: {
        width: SIZES.xxLarge,
        height: SIZES.xxLarge,
        borderRadius: SIZES.small / 1.25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: SIZES.large,
        height: SIZES.large,
        borderRadius: SIZES.small / 1.25,
    }

});

export default button;
