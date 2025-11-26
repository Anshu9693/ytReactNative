import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import AllItems from './AllItems';
import CreateScreen from './CreateScreen';


const HomeScreen = () => {

  const [view, setSiew] = useState(0);

  const [data, setdata] = useState([
    { id: 1, name: "Rice", stock: 90 },
    { id: 2, name: "Wheat Flour", stock: 18 },
    { id: 3, name: "Milk", stock: 44 },
    { id: 4, name: "Eggs", stock: 20 },
    { id: 5, name: "Bread", stock: 10 }
  ])
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.btnContainer}>
        <Pressable style={[styles.btn, view ===0 ?{backgroundColor:"green"}  :null]}  onPress={()=>{setSiew(0)}}>
          <Text style={[styles.btnText,view ===0 ? {color:"white"}:null]}>All items</Text>
        </Pressable>
        <Pressable style={[styles.btn,view===1 ? {backgroundColor:'green'} :null]}  onPress={()=>{setSiew(1)}}>
          <Text style={[styles.btnText,view===1?{color:"white"}:null]}>Low Stock </Text>
        </Pressable>
        <Pressable style={[styles.btn,view===2 ? {backgroundColor:'green'} :null]}  onPress={()=>{setSiew(2)}} >
          <Text style={[styles.btnText,view===2?{color:"white"}:null]}>Create</Text>
        </Pressable>
      </View>

      {view ===0 && <AllItems data={data}></AllItems>}
      {view ===1 && <AllItems data={data.filter((item) => item.stock <= 20)}  ></AllItems>}
      {view ===2 && <CreateScreen data={data} setdata={setdata} ></CreateScreen>}

      {}

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    color: "black",
    margin: 10,
  },
  btnContainer: {
  width: "100%",
  margingRight: 10,
  flexDirection: "row",
  justifyContent: "space-evenly",
  },
  btn: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 7,
    width: "25%",
    alignItems: "center",
    
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
