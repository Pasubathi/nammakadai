import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
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
    }
})

export default Home;