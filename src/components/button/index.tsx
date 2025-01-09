import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

interface ButtonProps {
    text: string,
    img?: any,
    onPress: () => void,
}
export function Button({ text, img, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        {img && <Image source={img} />}
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
