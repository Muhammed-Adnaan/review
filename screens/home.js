import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default function Home(){
    return(
        <View style = {styles.container}>
            <Text> home screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 24
    }

});