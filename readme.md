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