import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import { ColorSpace } from "react-native-reanimated";
import { COLORS, dummyData, FONTS, SIZES, images, icons } from "../constants";

const Home = () =>{

    function renderHeader(){
        return(
            <View style={styles.headerContainer}>
                <View style={styles.headerSection} >
                    <Text style={styles.headerTitle}> Hey Yuvan</Text>
                    <Text style={styles.headerDetails}> Hey what you look hear today</Text>
                </View>
                <TouchableOpacity>
                    <Image 
                            source={images.profile}
                            style={styles.profile}
                        />
                </TouchableOpacity>
            </View>
        )
    }

    function renderSearch(){
        return(
            <View style={styles.searchContainer}>
                <Image source={icons.search} style={styles.searchIcon} />
                <TextInput 
                    style={styles.searchInput}
                    placeholder={'Search Nambakadai'}
                    placeholderTextColor={COLORS.gray}
                />
            </View>
        )
    }

    function renderSeeRecipieCard()
    {
        return(
            <View style={styles.card}>
                <View style={styles.cardCon}>
                    <Image source={images.recipe} style={{width: 80, height: 80}} />
                </View>
                <View style={styles.cardCon1}>
                    <Text style={styles.cardCon1Text}>
                        You have following products that you have't tried yet
                    </Text>
                    <TouchableOpacity style={{marginTop: 10}} >
                        <Text style={styles.seeMore} >See More Products</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderLendingSection(){
        return(
            <View style={{marginTop: SIZES.radius}}>
                <Text style={{marginHorizontal: SIZES.padding, ...FONTS.h2}}> Top Prodcuts</Text>
                <FlatList 
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem = {({item, index})=>{
                        return(
                            <Text>{item.name}</Text>
                        )
                    }}
                />
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={dummyData.categories}
                keyExtractor={(item)=> item.id.toString()}
                keyboardDismissMode={'on-drag'}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderHeader()}
                        {renderSearch()}
                        {renderSeeRecipieCard()}
                        {renderLendingSection()}
                    </View>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.white
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal: SIZES.radius,
        height: 80
    },
    headerSection:{
        flex: 1
    },
    headerTitle:{
        color: COLORS.darkGreen,
        ...FONTS.h2
    },
    headerDetails:{
        marginTop: 3,
        color: COLORS.gray,
        ...FONTS.body3
    },
    profile:{
        width: 40,
        height: 40,
        borderRadius: 20
    },
    searchContainer:{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray
    },
    searchIcon:{
        width: 20,
        height: 20,
        color: COLORS.gray
    },
    searchInput:{
        marginLeft: SIZES.radius,
        ...FONTS.body3,
        flex: 1,
    },
    card:{
        flexDirection: 'row',
        marginTop: SIZES.radius,
        marginHorizontal: SIZES.padding,
        borderRadius: 10,
        backgroundColor: COLORS.lightGreen
    },
    cardCon:{
        width: 100,
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardCon1:{
        flex: 1,
        paddingVertical: SIZES.radius
    },
    cardCon1Text:{
        width: "70%",
        ...FONTS.body4
    },
    seeMore:{
        color: COLORS.darkGreen,
        ...FONTS.h4,
        textDecorationLine: 'underline'
    }
})

export default Home;