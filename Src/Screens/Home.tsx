import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { SearchUser, setLoading, setPage } from '../redux/features/LoginSlice'

const Home = () => {
  const { page, data,isLoading } = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch<AppDispatch>();


  const renderData = ({ item }: any) => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10, flex: 1,
       marginTop: 50 }}>
        <Image source={{ uri: item.avatar_url }} style={{ width: 35, height: 35 }} />
        <Text>{item.login}</Text>
        <Text>{item.type}</Text>
      </View>
    )
  }
  const renderFooter = () => {
    if (!isLoading) return null;
    return <ActivityIndicator style={{ marginVertical: 10 }} />;
  };

  const loadMoreData = async () => {
    if (!isLoading) {
      dispatch(setLoading(true))
      dispatch(setPage())
      await dispatch(SearchUser())
    }
  };

  return (
    <View>

      <FlatList
        data={data}
        renderItem={renderData}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderFooter}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}

export default Home