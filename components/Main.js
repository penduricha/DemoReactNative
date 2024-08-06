import React from 'react';
import { View, StyleSheet, ScrollView,Text } from 'react-native';
import Header from './Header';

export default function Main() {
  return (
    <ScrollView style={styles.containerView}>
      <Header />
      <View style={styles.container}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 150,
          width: '100%',
          marginTop: 30,
          height: 10,
          
        }}>
          <View style={styles.sectionView}>
            <Text style={{color: '#8F8F8F',fontSize: 20, fontWeight: 'bold',height: 40}}>Dashboard</Text>
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={{
            flex: 1,
            margin: 10,
            backgroundColor: '#08b49b',
            height: 150,
            marginTop: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
            {/* Se doi thanh data json */}
            <Text style={{fontSize: 20, color: 'white', textAlign:'center',marginTop:10}}>13% higher yesterday</Text>
            <Text style={{fontSize: 30, color: 'white', textAlign:'center'}}>1,287,687</Text>
            <Text style={{fontSize: 20, color: 'white', textAlign:'center'}}>Today's visits</Text>
          </View>
          <View style={{
            flex: 1,
            margin: 10,
            backgroundColor: '#d53c4c',
            height: 150,
            marginTop: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
            <Text style={{fontSize: 20, color: 'white', textAlign:'center',marginTop:10}}>$117,212 before tax</Text>
            <Text style={{fontSize: 30, color: 'white', textAlign:'center'}}>141,291</Text>
            <Text style={{fontSize: 20, color: 'white', textAlign:'center'}}>Today's sales</Text>
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={{
              flex: 1,
              margin: 10,
              backgroundColor: '#1769bf',
              height: 150,
              marginTop: 50,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
              <Text>3</Text>
          </View>
          <View style={{
              flex: 1,
              margin: 10,
              backgroundColor: '#1e2c3b',
              height: 150,
              marginTop: 50,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
              <Text>4</Text>
            </View>
        </View>
        <View style={styles.rowViewChart}>

        </View>
        <View style={styles.rowViewChart}>

        </View>
        <View style={styles.rowViewChart}>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: '100%',
    marginTop: 20,
  },
  sectionView: {
    flex: 1,
    margin: 10,
  },
  rowViewChart:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: '95%',
    height:'60%',
    marginTop: 40,
    backgroundColor:'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

