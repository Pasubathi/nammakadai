import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";
import { StyleSheet } from "react-native";
import { COLORS, icons } from "../constants";
import { TabIcons } from "../components";

const Tab = createBottomTabNavigator();
const Tabs = () =>{
    return(
       <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: styles.tabStyle,
                headerShown: false
            }}
       >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <TabIcons 
                            focus={focused}
                            icon={icons.home}
                        />
                    )
                }}
            />
            <Tab.Screen name="Search" component={Home} 
                 options={{
                    tabBarIcon: ({focused}) =>(
                        <TabIcons 
                            focus={focused}
                            icon={icons.search}
                        />
                    )
                }}
            />
            <Tab.Screen name="Bookmark" component={Home} 
                 options={{
                    tabBarIcon: ({focused}) =>(
                        <TabIcons 
                            focus={focused}
                            icon={icons.bookmark}
                        />
                    )
                }}
            />
            <Tab.Screen name="Settings" component={Home} 
                 options={{
                    tabBarIcon: ({focused}) =>(
                        <TabIcons 
                            focus={focused}
                            icon={icons.settings}
                        />
                    )
                }}
            />
       </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabStyle:{
        position:'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: COLORS.white,
        borderTopColor: 'transparent',
        height: 70
    }
})

export default Tabs;