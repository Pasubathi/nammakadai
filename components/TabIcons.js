import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../constants";

const TabIcons = ({focus, icon}) =>{
    return(
        <View style={styles.container}>
            <Image source={icon} 
                resizeMode={'contain'}
                style={{
                    width: 28,
                    height: 28,
                    tintColor: focus?COLORS.darkGreen: COLORS.gray
                }}
            />
            {
                focus && (
                    <View style={styles.focused} />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        height: 80,
        width: 50
    },
    focused:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 5,
        backgroundColor: COLORS.darkGreen,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    }
});

export default TabIcons;