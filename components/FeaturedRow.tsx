import { View, Text, ScrollView } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

type FeaturedRowProps = PropsWithChildren<{
  id: string
  title: string
  description: string
}>

const FeaturedRow = ({ id, title, description }: FeaturedRowProps) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className='tect-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards  */}
        <RestaurantCards id="123" imgUrl="https://links.papareact.com/wru" title="Yo! Sushi" rating={4.5} genre="Japanesse" address="123 main St" short_description="This is a Test description" dishes={[]} long={20} lat={0} />
        <RestaurantCards id="123" imgUrl="https://links.papareact.com/wru" title="Yo! Sushi" rating={4.5} genre="Japanesse" address="123 main St" short_description="This is a Test description" dishes={[]} long={20} lat={0} />
        <RestaurantCards id="123" imgUrl="https://links.papareact.com/wru" title="Yo! Sushi" rating={4.5} genre="Japanesse" address="123 main St" short_description="This is a Test description" dishes={[]} long={20} lat={0} />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow