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
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import {connect} from 'react-redux';
import InstanceToken from '../../util/axiostoken';
import {Urls} from '../../util/url';
import {
  getProductList,
  Categories,
  getProductById,
  CategoriesById,
} from '../api/api';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Product = (props: any) => {
  const [category, setCategory] = useState(
    props.store.ProductReducer.categoryList,
  );
  const [productTitle, setProductTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigation = useNavigation();

  const addNewProduct = async () => {
    if (
      link !== '' &&
      selectedCategory !== '' &&
      description !== '' &&
      productTitle !== '' &&
      price
    ) {
      const data = {
        avatar: link,
        category: selectedCategory,
        description: description,
        name: productTitle,
        price: price,
        developerEmail: 'amolparathe@gmail.com',
      };
      // await props.addNewProduct(data);
      InstanceToken.post(Urls.products, data)
        .then(response => {
          console.log('############ response', response);
          if (response.status === 201) {
            navigation.goBack();
          } else {
            Alert.alert(response.data.message);
          }
        })
        .catch(error => {
          console.log('############ err', error.response);
        });
    } else {
      Alert.alert('Please add all data');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* add new Product */}

        <View
          style={{
            marginHorizontal: width * 0.025,
          }}>
          <TextInput
            style={{marginVertical: 10, width: width}}
            label="Product Title"
            value={productTitle}
            onChangeText={text => setProductTitle(text)}
          />
          <TextInput
            style={{marginVertical: 10, width: width}}
            label="Product Price"
            value={price}
            onChangeText={text => setPrice(text)}
          />
          <TextInput
            style={{marginVertical: 10, width: width}}
            label="Product Description"
            value={description}
            multiline={true}
            onChangeText={text => setDescription(text)}
          />
          <TextInput
            style={{marginVertical: 10, width: width}}
            label="Product Image Link"
            value={link}
            multiline={true}
            onChangeText={text => setLink(text)}
          />
          {/* Render category */}
          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            data={category}
            renderItem={item => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedCategory(item.item.name)}>
                  <View
                    style={{
                      width: 'auto',
                      marginHorizontal: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                      borderRadius: 10,
                      backgroundColor:
                        item.item.name === selectedCategory ? 'white' : 'black',
                    }}>
                    <Text
                      style={{
                        color:
                          item.item.name === selectedCategory
                            ? 'black'
                            : 'white',
                      }}>
                      {item.item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <TouchableOpacity
            onPress={() => {
              addNewProduct();
            }}
            style={{
              height: 40,
              width: 70,
              backgroundColor: 'black',
              alignSelf: 'center',
              marginVertical: 50,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const mapStateToProps = (state: any) => ({
  store: state,
});

const mapDispatchToProps = {
  getProductList,
  Categories,
  getProductById,
  CategoriesById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
