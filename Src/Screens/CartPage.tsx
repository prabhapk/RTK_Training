import {
    View,
    Text,
    FlatList,
    Image,
    ActivityIndicator,
    Touchable,
    TouchableOpacity,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {useDispatch, useSelector} from 'react-redux';
  import {AppDispatch, RootState} from '../redux/store';
  import {SearchUser, setLoading, setPage} from '../redux/features/LoginSlice';
  import {
    GetAllFunds,
    toggleWishlist,
    toggleAddCart,
  } from '../redux/features/CounterSlice';
  import Icon from 'react-native-vector-icons/AntDesign';
  const CartPage = () => {
    const {page, isLoading} = useSelector((state: RootState) => state.login);
    const {data} = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch<AppDispatch>();
  
    const handleWishlist = (id: number) => {
      dispatch(toggleWishlist(id));
    };

    const cartItems = useSelector((state: any) =>
        state.counter.data.filter((item: any) => item.isAddedCart)
      );
  
    const handleAddCart = (id: number) => {
      dispatch(toggleAddCart(id));
    };
  
    const renderData = ({item}: any) => {
      return (
        <>
        <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          flex: 1,
          marginTop: 10,
        }}>
          <Image
            source={{uri: item.thumbnail}}
            style={{
              width: '50%',
              height: 250,
              resizeMode: 'contain',
              backgroundColor: 'lightgray',
              borderRadius: 20,
              marginHorizontal: 20,
            }}
          />
          <TouchableOpacity
            style={{position: 'absolute', top: 10, right: "48%"}}
            onPress={() => handleWishlist(item.id)}>
            {item.isWishlisted ? (
              <Icon name="heart" size={30} color="#900" />
            ) : (
              <Icon name="heart" size={30} color="#fff" />
            )}
          </TouchableOpacity>
          <View style={{
            justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 10,
              flex: 1,
              marginTop: 10,
            }}>
          <View >
            <Text>{item.title}</Text>
            <Text style={{fontWeight: 'bold'}}>Rs.{(item.quantity * item.price).toFixed(2)}</Text>
          </View>
        
          <View style={{flexDirection: 'row', backgroundColor: "red", borderRadius: 10, padding: 10, width: "100%", justifyContent: 'space-between',marginBottom: 50}}>
          <Text>-</Text>
          <Text>{item.quantity}</Text>
          <Text>+</Text>
          </View>

          </View>

       
          </View>
         
         
        
        </>
      );
    };
    const renderFooter = () => {
      if (!isLoading) return null;
      return <ActivityIndicator style={{marginVertical: 10}} />;
    };
  
    const loadMoreData = async () => {
      if (!isLoading) {
        dispatch(setLoading(true));
        dispatch(setPage());
        await dispatch(SearchUser());
      }
    };
    return (
      <View style={{marginTop: 50, flex: 1}}>
        <FlatList
          data={cartItems}
          renderItem={renderData}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  
  export default CartPage;
  