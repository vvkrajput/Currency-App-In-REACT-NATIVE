/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import SnackBar from 'react-native-snackbar';

const currencyPerRupee={
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL: 0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.000004

} 

const App=()=>{
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue]= useState(0);
  const buttonPressed=(currency)=>{
    if(!inputValue){
      return SnackBar.show({
        text:'Please Enter a value',
        backgroundColor:'#EA7773',
        textColor:"#FFFFFF",
        duration: SnackBar.LENGTH_SHORT 
      })




    }
    let result = parseFloat(inputValue) * currencyPerRupee[currency]
    setResultValue(result.toFixed(2));


  }
  return(
<>
  <ScrollView style={styles.container}
  keyboardShouldPersistTaps="handled"
  contentInsetAdjustmentBehavior="automatic"
  >
    <SafeAreaView style={styles.container}>
    <Text style={styles.heading}>Currency Converter App</Text>


        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Value(in RS.)"
        placeholderTextColor="#c1c1c1"
        value={inputValue}
        onChangeText={(inputValue)=>
        setInputValue(inputValue)
        }></TextInput>


        </View> 
        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupee).map((currency)=>(
            <TouchableOpacity
            onPress={()=>buttonPressed(currency)}
            key={currency}
            style={styles.converterButton}>
            <Text style={styles.converterButtonText}>{currency}</Text>

            </TouchableOpacity>
          ))}
        </View>

    </SafeAreaView>
  </ScrollView>
</>
  )
}
export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1b262c",
},
resultContainer:{
  height:70,
  marginTop:80,
  justifyContent:"center",
  borderColor:"#bbe1fa",
  borderWidth:2,
  alignItems:"center",



},
resultValue:{
  fontSize:30,
  color:"#FFFFFF",
  fontWeight:"bold",

},
inputContainer:{
  height:70,
  marginTop:10,
  justifyContent:"center",
  alignItems:"center",
  borderWidth:2,
  borderColor:"#bbe1fa",


},
input:{
  textAlign:"center",
  color:'#FFFFFF',
  fontSize:25

},
convertButtonContainer:{
  flexDirection:"row",
  flexWrap:"wrap",
  marginTop:10,
},
temp:{
  color:"#FFFFFF",
},
converterButton:{
  alignItems:"center",
  justifyContent:"center",
  height:100,
  width:"33.3%",
  borderWidth:2,
  borderColor:"#bbe1fa",
  marginTop:10,
  backgroundColor:"#0f4c75"
},
converterButtonText:{
  color:"#FFF",
  fontSize:15,
},
heading:{
  color:"#FFFFFF",
  alignSelf:"center",
  marginTop:20,
  fontSize:20
}

})