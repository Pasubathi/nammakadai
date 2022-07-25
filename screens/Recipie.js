import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { BlurView } from "@react-native-community/blur";

const HEADER_HEIGHT = 350;

const RecipeCreatorCardDetail = ({ selectedRecipe }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          marginLeft: 20,
        }}
      >
        <Image
          source={selectedRecipe?.author?.profilePic}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: COLORS.lightGray2,
            ...FONTS.body4,
          }}
        >
          Recipe by:
        </Text>
        <Text style={{ color: COLORS.white2, ...FONTS.h3 }}>
          {selectedRecipe?.author?.name}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: COLORS.lightGreen1,
        }}
      >
        <Image
          source={icons.rightArrow}
          style={{
            width: 15,
            height: 15,
            tintColor: COLORS.lightGreen1,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const RecipeCreatorCardInfo = ({ selectedRecipe }) => {
    if (Platform.OS === "ios") {
      return (
        <BlurView
          blurType="dark"
          overlayColor=""
          blurAmount={10}
          style={{
            flex: 1,
            borderRadius: SIZES.radius,
          }}
        >
          <RecipeCreatorCardDetail selectedRecipe={selectedRecipe} />
        </BlurView>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.transparentBlack9,
          }}
        >
          <RecipeCreatorCardDetail selectedRecipe={selectedRecipe} />
        </View>
      );
    }
  };

const Recipie = () =>{

    const scrollY = useRef(new Animated.Value(0)).current;
    const route = useRoute();
    const navigation = useNavigation();
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(()=>{
        const {recipie} = route.params;
        setSelectedRecipe(recipie);
    }, [])

    function renderHeader(){
        return(
            <View style={styles.headerContainer}>
                <Animated.View style={{
                    ...styles.headerConData,
                    opacity: scrollY.interpolate({
                        inputRange: [HEADER_HEIGHT-100, HEADER_HEIGHT-70],
                        outputRange: [0, 1]
                    }),
                }}>
                    <Animated.View style={{
                        ...styles.headerContainer2,
                        opacity: scrollY.interpolate({
                            inputRange: [HEADER_HEIGHT-100, HEADER_HEIGHT-50],
                            outputRange: [0, 1]
                        }),
                        transform:[{
                            translateY: scrollY.interpolate({
                                inputRange: [HEADER_HEIGHT-100, HEADER_HEIGHT-50],
                                outputRange: [50, 0],
                                extrapolate: 'clamp'
                            })
                        }]
                    }}>
                        <Text style={styles.recipeBy}> Recipe By: </Text>
                        <Text style={styles.recipeTitle}>{selectedRecipe?.author?.name}</Text>
                    </Animated.View>
                    <TouchableOpacity style={styles.headerContainer3} onPress={()=> navigation.goBack()} >
                        <Image 
                            source={icons.back}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerContainer4} >
                        <Image 
                            source={selectedRecipe?.isBookmark? icons.bookmarkFilled: icons.bookmark}
                            style={styles.icon1}
                        />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        )
    }

    function renderRecipeCardHeader()
    {
        console.log("selectedRecipe", selectedRecipe);
        return(
            <View style={styles.cardHeader}>
                <Animated.Image 
                    source={selectedRecipe?.image}
                    resizeMode='contain'
                    style={{
                        height: HEADER_HEIGHT,
                        width: "200%",
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [-HEADER_HEIGHT/2, 0, HEADER_HEIGHT*0.75]
                                })
                            },
                            {
                               scale: scrollY.interpolate({
                                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                outputRange: [2, 0, 0.75]
                            })
                            }
                        ]
                    }}
                />
                <Animated.View
                    style={{
                        position: "absolute",
                        bottom: 10,
                        left: 30,
                        right: 30,
                        height: 80,
                        transform: [
                        {
                            translateY: scrollY.interpolate({
                            inputRange: [0, 170, 250],
                            outputRange: [0, 0, 100],
                            extrapolate: "clamp",
                            }),
                        },
                        ],
                    }}
                    >
                    <RecipeCreatorCardInfo selectedRecipe={selectedRecipe} />
                    </Animated.View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Animated.FlatList 
                data={selectedRecipe?.ingredients}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator = {false}
                ListHeaderComponent={
                    <View>
                        {renderRecipeCardHeader()}
                    </View>
                }
            />
            {renderHeader()}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white
    },
    headerContainer:{
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        height: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding,
        paddingBottom: 10
    },
    headerContainer2:{
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        height: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    headerContainer3:{
        position: 'absolute',
        height: 35,
        width: 35,
        borderRadius: 18,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.lightGray,
        backgroundColor: COLORS.transparentBlack5
    },
    headerContainer4:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 35,
    },
    headerConData: {
        position: 'absolute',
        Top: 100,
        left: 0,
        right: 0,
        height: 0,
        backgroundColor: COLORS.black
    },
    recipeBy: {
        color: COLORS.lightGray2,
        ...FONTS.body4
    },
    recipeTitle:{
        color: COLORS.white2,
        ...FONTS.h3
    },
    backIcon:{
        width: 15,
        height: 15,
        tintColor: COLORS.lightGray
    },
    icon1:{
        width: 30,
        height: 30,
        tintColor: COLORS.darkGreen
    },
    cardHeader:{
        marginTop: -1000,
        padding: 1000,
        alignItems: 'center',
        overflow: 'hidden'
    }
})

export default Recipie;