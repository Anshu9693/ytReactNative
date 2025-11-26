import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Alert,
} from 'react-native';
import React, { useState } from 'react';

const CreateScreen = ({ data, setdata }) => {
  const [ItemName, setItemName] = useState('');
  const [ItemStock, setItemStock] = useState('');
  const [isAdded, setisAdded] = useState(false);
  const [edditItemId, setedditItemId] = useState(null)

  const handleCreateProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: ItemName,
      stock: parseInt(ItemStock),
    };
    setdata([...data, newProduct]);
    setItemName('');
    setItemStock('');
    setisAdded(false);
  };

  const deleteHandler = (id) =>{
    const newData = data.filter((item) => item.id !== id);
    setdata(newData);
  }

  const handleEddit = (item) =>{
    setisAdded(true);
    setItemName(item.name);
    setItemStock(item.stock.toString());
    setedditItemId(item.id);
  }

  const handleUpdateProduct = () => {
    setdata(data.map((item) =>
      item.id === edditItemId
        ? { ...item, name: ItemName, stock: Number(ItemStock) }
        : item
    ));
    setisAdded(false);
    setItemName('');
    setItemStock('');
    setedditItemId(null);
  }

  return (
    <View>
      <Text>Create your Product Stock </Text>

      <View>
        <TextInput
          placeholder="Product Name"
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginVertical: 10,
            borderRadius: 5,
          }}
          value={ItemName}
          onChangeText={item => setItemName(item)}
        />
        <TextInput
          placeholder="Stock Amount"
          keyboardType="numeric"
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginVertical: 10,
            borderRadius: 5,
          }}
          value={ItemStock}
          onChangeText={item => setItemStock(item)}
        />

        <Pressable
          style={{
            backgroundColor: 'green',
            padding: 15,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 10,
          }}
          onPress={() => {
          {isAdded?handleUpdateProduct(): handleCreateProduct()}
            Alert.alert(
              'Product Created',
              `Name: ${ItemName}\nStock: ${ItemStock}`,
            );
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            {isAdded ? "Edit Product" : "Create Product"}
          </Text>
        </Pressable>
      </View>
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
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>All items in the stock</Text>
          
        </View>

        <View >
          {/* {data.map((item) => (
            <View key={item.id} style={[{flexDirection:'row', justifyContent:'space-between', padding:10, borderBottomWidth:1, borderColor:'#ccc'},item.stock > 20 ? {backgroundColor:"#B3F2C9",}:null,item.stock <=20 ?{backgroundColor:"#FFA8A6"}:null]}>
                <Text>{item.name}</Text>
                <Text>{item.stock}</Text>
              </View>
            ))} */}

          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
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
                <Text>{item.name}</Text>
                <Text>{item.stock}</Text>
                <View
                  style={{ flexDirection: 'row', gap: 10,  gap:20 }}
                >
                  <Pressable
                  onPress={()=>{
                    handleEddit(item);
                  }}                  
                  >
                    <Text 
                    style={{color:"black",fontSize:16}}>Edit</Text>
                  </Pressable>
                  <Pressable 
                  onPress={()=>{
                    deleteHandler(item.id);
                  }}
                  >
                    <Text style={{color:"black",fontSize:16}} >delete</Text>
                  </Pressable>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
