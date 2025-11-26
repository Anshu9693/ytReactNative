import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const AllItems = ({ data }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          borderBottomWidth: 2,
          borderColor: 'black',
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Items name</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Amount</Text>
      </View>

      <View>
        {/* {data.map((item) => (
        <View key={item.id} style={[{flexDirection:'row', justifyContent:'space-between', padding:10, borderBottomWidth:1, borderColor:'#ccc'},item.stock > 20 ? {backgroundColor:"#B3F2C9",}:null,item.stock <=20 ?{backgroundColor:"#FFA8A6"}:null]}>
            <Text>{item.name}</Text>
            <Text>{item.stock}</Text>
          </View>
        ))} */}

        <FlatList
  data={data}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          borderBottomWidth: 1,
          borderColor: '#ccc',
          gap: 20,
          marginBottom:10,
                    borderRadius:4
          

        },
        item.stock > 20 && { backgroundColor: '#B3F2C9' },
        item.stock <= 20 && { backgroundColor: '#FFA8A6' },
      ]}
    >
      <Text >{item.name}</Text>
      <Text>{item.stock}</Text>
    </View>
  )}
/>

      </View>
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({});
