import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";
const CategoryCard = ({
    containerStyle,
    categogryItem,
    onPress
}) =>{
        return(
            <TouchableOpacity 
                style={{
                    ...styles.container,
                    ...containerStyle
                }}
                onPress={onPress}>
                    <Image 
                        source={categogryItem.image}
                        resizeMode="cover"
                        style={styles.img}
                    />
                <View style={styles.details}>
                    <Text style={styles.labelTitle}> {categogryItem.name} </Text>
                    <Text style={styles.labelInfo}> {categogryItem.duration} |  {categogryItem.serving}</Text>
                </View>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
   container:{
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2
   },
   img:{
        width: 100,
        height: 100,
        borderRadius: SIZES.radius
   },
   details:{
        width: "65%",
        paddingHorizontal: 20
   },
   labelTitle:{
        flex: 1,
        ...FONTS.h2
   },
   labelInfo:{
        color: COLORS.gray,
        ...FONTS.body4
   }
})

export default CategoryCard;