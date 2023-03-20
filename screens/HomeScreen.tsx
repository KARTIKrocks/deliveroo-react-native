import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-3'>

      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2 px-1'>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4 px-1'>
        <View className='flex-row items-center flex-1 space-x-2 bg-gray-200 px-2 py-0 rounded-md'>
          <MagnifyingGlassIcon size={20} color="#00CCBB" />
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
        </View>

        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>

      {/* Body  */}
      <ScrollView>
        {/* Categories  */}
        <Categories />

        {/* Features Rows  */}
        
      </ScrollView>

    </SafeAreaView>
  )
}