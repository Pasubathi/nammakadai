import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { BlurView } from "@react-native-community/blur";

const RebderCardDetails = ({recepieItem}) =>{
    return(
        <View style={{flex: 1}} >
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}} >
                <Text style={{
                    width: '70%',
                    color: COLORS.white,
                    ...FONTS.h3,
                    fontSize: 18
                }}
                >
                    {recepieItem.name}
                </Text>
                <Image 
                    source={recepieItem.isBookmark ? icons.bookmarkFilled: icons.bookmark}
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: SIZES.base,
                        tintColor: COLORS.darkGreen
                    }}
                />
                <Text 
                    style={{
                        color: COLORS.lightGray,
                        ...FONTS.body4
                    }}
                >{recepieItem.duration} | {recepieItem.serving} </Text>
            </View>
        </View>
    )
}

const RecipieCardInfo = ({recepieItem}) =>{
    if(Platform.OS === "ios")
    {
        return(
            <BlurView 
                blurAmount={10}
                blurType='dark'
                overlayColor=""
                style={styles.recepieCard}
            >
                <RebderCardDetails recepieItem={recepieItem} />
            </BlurView>
        )
    }else {
        return(
            <View 
                style={{...styles.recepieCard, backgroundColor: COLORS.transparentDarkGray}}
            >
                <RebderCardDetails recepieItem={recepieItem} />
            </View>
        )
    }
}

const TopProductCard = ({
    containerStyle,
    recepieItem,
    onPress
}) =>{
        return(
            <TouchableOpacity 
                style={{
                    height: 310,
                    width: 250,
                    marginTop: SIZES.radius,
                    marginRight: 20,
                    borderRadius: SIZES.radius,
                    ...containerStyle
                }}
                onPress={onPress}>
                    <Image 
                        source={recepieItem.image}
                        resizeMode="cover"
                        style={styles.Img}
                        />
                <View style={styles.label}>
                    <Text style={styles.labelTitle}> {recepieItem.category} </Text>
                </View>
                <RecipieCardInfo recepieItem={recepieItem} />
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    recepieCard:{
        position: 'absolute',
        bottom: 60,
        left: 10,
        right: 10,
        height: 100,
        paddingHorizontal: SIZES.base,
        paddingVertical: SIZES.radius,
        borderRadius: SIZES.radius
    },
    Img:{
        width: 250,
        height: 250,
        borderRadius: SIZES.radius
    },
    label:{
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: COLORS.transparentGray,
        paddingVertical: 5,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    },
    labelTitle: {
        color: COLORS.white,
        ...FONTS.h4
    }
})

export default TopProductCard;