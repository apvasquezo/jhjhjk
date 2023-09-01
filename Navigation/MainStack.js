import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import NewsEvent from "../Componentes/NewsEvent";
import Consult from "../Componentes/Consult";
import Home from "../Componentes/Home";
import LoginScreen from "../Componentes/LoginScreen";
import Checkin from "../Componentes/checkin";
import ExitTime from "../Componentes/ExitTime";
import EntryTime from "../Componentes/EntryTime";

const stack=createNativeStackNavigator()

const MainStack = () => {
    return (      
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                name="LoginScreen" component={LoginScreen} />                
                <stack.Screen
                name="Checkin" component={Checkin} />                
                <stack.Screen                
                name="Home" component={Home} />
                <stack.Screen
                name="ExitTime" component={ExitTime} />
                <stack.Screen
                name="Consult" component={Consult} />   
                <stack.Screen
                name="NewsEvent" component={NewsEvent} />     
                <stack.Screen
                name="EntryTime" component={EntryTime} />                        
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;