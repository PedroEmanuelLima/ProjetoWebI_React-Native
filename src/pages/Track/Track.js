import React, { useEffect, useState } from 'react';
import { View, Image, StatusBar, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { styles } from './Styles';
import MapView, { Marker } from 'react-native-maps';

import { apiRastreio, apiInfoLocation } from '../../config';

const typeInformations = {
  load: false,
  descricao: '',
  unidade: {
    endereco: {
      cidade: '',
      uf: '',
    }
  }
};

const typeLocation = {
  load: false,
  latitude: '',
  longitude: '',
}

export const Track = () => {

  const [trackCode, setTrackCode] = useState('');
  const [informations, setInformations] = useState(typeInformations)
  const [location, setLocation] = useState(typeLocation)

  const getLocation = () => {
    apiRastreio.get(trackCode)
      .then(res => {
        const data = res.data.objetos[0].eventos[0];
        setInformations({
          load: true,
          descricao: data.descricao.trim(),
          unidade: {
            endereco: {
              cidade: data.unidade.endereco.cidade.trim(),
              uf: data.unidade.endereco.uf.trim(),
            }
          },
        });
      }).catch(er => {
        alert(er);
      })
  }

  useEffect(() => {
    if (informations.load) {
      apiInfoLocation.get(`?name=${informations.unidade.endereco.cidade}&admin1=${informations.unidade.endereco.uf}`)
        .then(({data}) => {
          setLocation({
            load:true,
            longitude: data.results[0].longitude,
            latitude: data.results[0].latitude,
          })
        })
    }

  }, [informations.load])

  return (
    <View style={{flex:1}}>
      <StatusBar
        style = "auto"
        hidden = {false}
        backgroundColor = "rgb(3,147,213)"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      
      <View style={styles.containerSearch}>
        <Searchbar
            style={styles.searchBar}
            placeholder="Insira o código da encomenda..."
            onChangeText={setTrackCode}
            onSubmitEditing={getLocation}
            value={trackCode}
        />
      </View>
      { (informations.load  && location.load)
        ?
          <>
              <View style={styles.viewStatus}>
                <Text style={styles.textStatus}>{informations.descricao}</Text>
              </View>
              <MapView
              style={{flex: 1}}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 3,
                longitudeDelta: 2
              }}
            >
              { location.load && 
                <Marker
                  coordinate={{ latitude : location.latitude , longitude : location.longitude }}
                />
              }
            </MapView>
            
          </>
        :
          <View style={{flex:1, height: '100%', width: '100%'}}>
              <Image style={{alignSelf:"center", }} 
              resizeMode='contain' 
              source={require('./../../assets/rastreio.png')}/>
          </View>
      }

      
    </View>
  );
}