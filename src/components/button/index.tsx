import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { s } from './styles';

interface ButtonProps {
  text: string;
  img?: any;
  color?: 'primary' | 'secondary';
  onPress: () => void;
}

export function Button({ text, img, onPress, color = 'primary' }: ButtonProps) {
  const buttonStyle = s[color] || s.primary;
  const textStyle = color === 'primary' ? s.primaryText : s.secondaryText;

  return (
    <TouchableOpacity style={[s.baseButton, buttonStyle]} onPress={onPress}>
      <View style={s.buttonContent}>
        {img && <Image style={s.img} source={img} />}
        <Text style={[s.text, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
