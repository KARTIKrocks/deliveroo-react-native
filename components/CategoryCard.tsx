import { Text, TouchableOpacity, Image } from 'react-native'
import React, { PropsWithChildren } from 'react'

type CategoryCardProps = PropsWithChildren<{
  imgUrl: string
  title: string
}>

const CategoryCard = ({ imgUrl, title }: CategoryCardProps) => {
  return (
    <TouchableOpacity className=' mr-2'>
      <Image
        source={{ uri: imgUrl }}
        className="h-20 w-20 rounded"
      />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard