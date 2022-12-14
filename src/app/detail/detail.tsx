import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Details = (props: any) => {
  const [product, setProduct] = useState(props.route.params.data);
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Render Details */}

        <View
          style={{
            height: height,
            width: width * 0.95,
            marginHorizontal: width * 0.025,
          }}>
          <Image
            style={{
              height: height * 0.4,
              width: width * 0.95,
              marginVertical: width * 0.025,
            }}
            source={{
              uri: product.avatar,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginVertical: 10,
              color: 'black',
            }}>
            {product.name}
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            {product.description}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Details;
