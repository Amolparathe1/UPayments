import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {
  getProductList,
  Categories,
  getProductById,
  CategoriesById,
} from '../api/api';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Home = (props: any) => {
  console.log(props.store);
  const [products, setProducts] = useState(props.store.ProductReducer.Product);
  const [category, setCategory] = useState(props.store.ProductReducer.category);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortProducts, setSortProducts] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    //set product and category
    setProducts(props.store.ProductReducer.Product);
    setCategory(props.store.ProductReducer.category);
  }, [props]);

  useEffect(() => {
    //sort product list by category
    if (selectedCategory !== 'All') {
      let product = products.filter(el => el.category !== selectedCategory);
      console.log('product', product);
      setSortProducts(product);
    } else {
      setSortProducts(products);
    }
  }, [selectedCategory, props]);

  useEffect(() => {
    //call api when app start
    props.getProductList();
    props.Categories();
    // props.getProductById();
    // props.CategoriesById();
  }, []);
  const navToProductDetails = (data: any) => {
    navigation.navigate('Details', {data: data});
  };
  return (
    <SafeAreaView>
      {/* Render category */}
      <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={category}
        renderItem={item => {
          console.log(item);
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
                      item.item.name === selectedCategory ? 'black' : 'white',
                  }}>
                  {item.item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {/* Render List of Product  */}
      <FlatList
        // horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={sortProducts}
        numColumns={2}
        renderItem={item => {
          console.log(item);
          return (
            <TouchableOpacity onPress={() => navToProductDetails(item.item)}>
              <View
                style={{
                  height: height * 0.3,
                  width: width * 0.45,
                  marginHorizontal: width * 0.05,
                }}>
                <Image
                  style={{height: height * 0.25, width: width * 0.35}}
                  source={{
                    uri: item.item.avatar,
                  }}
                />
                <Text>{item.item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={<View style={{height: 100}}></View>}
      />
      <View
        style={{
          position: 'absolute',
          right: 20,
          bottom: 60,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#23A77E',
            height: 42,
            width: 42,
            borderRadius: 21,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}
          // onPress={() => {
          // }}
        >
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
