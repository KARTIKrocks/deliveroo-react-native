## Process
- step 1: project initialized
  ```
  npx react-native init deliveroo
  cd deliveroo
  ```
- step 2: added tailwind dependencies
  ```
  npm install nativewind
  npm install --save-dev tailwindcss
  ```

  to create tailwind.config.js file run the following
  ```
  npx tailwindcss init
  ```

  add the following in tailwind.conf.js file,
  ```
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```

  open bebel.conf.js file and add the following
  ```
  module.exports = {
    plugins: ["nativewind/babel"],
    presets: ['module:metro-react-native-babel-preset'],
  };
  ```

  create app.d.ts file and add the following
  ```
  /// <reference types="nativewind/types" />
  ```

- step 3: added react-navigation dependencies
  ```
  npm install @react-navigation/native
  npm install react-native-screens react-native-safe-area-context
  ```

  wrap the whole app in NavigationContainer. Usually you'd do this in your entry file, such as index.js or App.tsx:

  here it is app.tsx
  ```
  import { StyleSheet, Text, View, StatusBar } from 'react-native'
  import React from 'react'
  import { NavigationContainer } from '@react-navigation/native';

  export default function App() {
    return (
      <NavigationContainer>
        <View>
          <Text>App</Text>
        </View>
      </NavigationContainer>
    )
  }

  const styles = StyleSheet.create({})
  ```

  Installing the native stack navigator library
  ```
  npm install @react-navigation/native-stack
  ```

  and update the App.tsx file with below and created HomeScreen component
  ```
  import React from 'react'
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import HomeScreen from './screens/HomeScreen';

  const Stack = createNativeStackNavigator();

  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  ```

- step 4: working on HomeScreen
  install react native heroicons
  ```
  npm i react-native-heroicons
  ```


  if you can not use this icons, do the following step
  ```
  npm install react-native-svg
  npm install react-native-svg-transformer
  ```
- step 5: working on HomeScreen
  ```
  import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
  import React, { useLayoutEffect } from 'react'
  import { useNavigation } from '@react-navigation/native'
  import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline'

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
              uri: "https:links.papareact.com/wru",
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

          {/* Features Rows  */}
          
        </ScrollView>

      </SafeAreaView>
    )
  }
  ```