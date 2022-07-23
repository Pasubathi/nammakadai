import React from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { COLORS, SIZES, images, FONTS } from "../constants";
import LinearGradient from "react-native-linear-gradient"
import { CustomButton } from "../components";
import { useNavigation } from "@react-navigation/native";

const Login = () =>{
    const navigation = useNavigation();

    function renderHeader()
    {
        return(
            <View style={styles.headerContainer}>
                <ImageBackground 
                    source={images.loginBackground}
                    resizeMode={'cover'}
                    style={styles.imageContainer}
                >
                    <LinearGradient 
                        start={{x:0, y:0}}
                        end={{x:0, y:1}}
                        colors={[COLORS.transparent, COLORS.black]}
                        style={styles.gradientContainer}
                    >
                        <Text style={styles.gradientTitle}>Get your Favorite from Farmer</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }

    function renderDetails()
    {
        return(
            <View style={styles.detailsContainer}>
                <Text 
                    style={styles.details}
                >
                    Get you expected fresh products directly from farmers with low price
                </Text>
                <View>
                    <CustomButton
                        buttonText={'Login'}
                        colors={[COLORS.darkGreen, COLORS.lime]}
                        buttonContainerStyle={styles.buttonStyle}
                        onPress={()=> navigation.navigate('Home')}
                    />
                    <CustomButton
                        buttonText={'Signup'}
                        colors={[]}
                        buttonContainerStyle={styles.signupBtn}
                        onPress={()=> navigation.navigate('Home')}
                    />
                </View>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            {renderHeader()}
            {renderDetails()}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.black
    },
    headerContainer:{
        height: SIZES.height > 700?"65%":"60%"
    },
    imageContainer:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    gradientContainer:{
        height: 200,
        justifyContent: 'flex-end',
        paddingHorizontal: SIZES.padding
    },
    gradientTitle:{
        width: "80%",
        color: COLORS.white,
        ...FONTS.largeTitle,
        lineHeight: 45
    },
    detailsContainer:{
        flex: 1,
        paddingHorizontal: SIZES.padding
    },
    details:{
        marginTop: SIZES.radius,
        width: "85%",
        color: COLORS.gray,
        ...FONTS.body3
    },
    buttonStyle:{
        paddingVertical: 18,
        borderRadius: 20,
    },
    signupBtn:{
        paddingVertical: 18,
        borderRadius: 20,
        marginTop: SIZES.radius,
        borderWidth: 1,
        borderColor: COLORS.darkLime
    }
})

export default Login;