import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {SearchUser, setLoading, setPage} from '../redux/features/LoginSlice';
import {
  GetAllFunds,
  toggleWishlist,
  toggleAddCart,
  increment
} from '../redux/features/CounterSlice';
import Icon from 'react-native-vector-icons/AntDesign';

const Home = ({navigation}:any) => {
  const {page, isLoading} = useSelector((state: RootState) => state.login);
  const {data} = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();
  const callApi = () => {
    dispatch(GetAllFunds());
  };

  const handleWishlist = (id: number) => {
    dispatch(toggleWishlist(id));
  };

  const handleAddCart = (id: number) => {
    dispatch(toggleAddCart(id));
  };

  useEffect(() => {
    callApi();
  }, []);
  const renderData = ({item}: any) => {
    return (
      <View>
        <Image
          source={{uri: item.thumbnail}}
          style={{
            width: '90%',
            height: 250,
            resizeMode: 'contain',
            backgroundColor: 'lightgray',
            borderRadius: 20,
            marginHorizontal: 20,
          }}
        />
        <TouchableOpacity
          style={{position: 'absolute', top: 10, right: 25}}
          onPress={() => handleWishlist(item.id)}>
          {item.isWishlisted ? (
            <Icon name="heart" size={30} color="#900" />
          ) : (
            <Icon name="heart" size={30} color="#fff" />
          )}
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 10,
            flex: 1,
            marginTop: 10,
          }}>
          <Text>{item.title}</Text>
          <Text style={{fontWeight: 'bold'}}>Rs.{item.price}</Text>
        </View>
        {item.isAddedCart ? (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'pink',
              height: 50,
              borderRadius: 10,
              marginHorizontal: 20,
              marginVertical: 10,
            }}
            onPress={() => { navigation.navigate("CartPage");}}>
            <Text>Go To Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'pink',
              height: 50,
              borderRadius: 10,
              marginHorizontal: 20,
              marginVertical: 10,
            }}
            onPress={() => handleAddCart(item.id)}>
            <Text>Add To Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  const renderFooter = () => {
    if (!isLoading) return null;
    return <ActivityIndicator style={{marginVertical: 10}} />;
  };

  const loadMoreData = async () => {
    if (!isLoading) {
      dispatch(setLoading(true));
      dispatch( increment());
    }
  };
  return (
    <View style={{marginTop: 50, flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderData}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderFooter}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default Home;
