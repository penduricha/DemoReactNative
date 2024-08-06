import React,{ useState } from 'react';
import { View, Text, StyleSheet,ScrollView,Image,TextInput } from 'react-native';

export default function Header() {
    // useState
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (newSearchText) => {
      setSearchText(newSearchText);
    };
    return (
      <View style={{
        backgroundColor: '#2E3A49',
        height: 120,
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../assets/logo.svg')}
              style={{width: 30,height: 30, marginLeft: 10}}
            />
            <Text style={{ color: 'white', fontSize: 20, marginLeft: 16,fontWeight: 'bold' }}>Vue Admin Template</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                source={require('../assets/menuBarIconOutput.png')}
                style={{width: 30,height: 30, marginRight: 10}}
              />
          </View>

        </View>      
        <View style={{ alignItems: 'center' }}>
          <TextInput
            style={{
              width: '80%',
              height: 30,
              borderColor: '#989CAC',
              borderWidth: 1,
              paddingHorizontal: 10,
              backgroundColor:'#989CAC',
              marginTop: 15,
            }}
            placeholder="Search"        
            onChangeText={handleSearchTextChange}
            value={searchText}
          />
        </View>
      </View>
    )
  }