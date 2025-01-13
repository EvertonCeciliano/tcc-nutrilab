import React from 'react';
import { View, TextInput, Image } from 'react-native';
import { styles } from './styles';

interface InputProps {
    type: 'email' | 'password' | 'name';
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    imageUrl?: string;
}

export const Input = ({ type, placeholder, value, onChangeText, imageUrl }: InputProps) => {
    return (
        <View style={styles.container}>
            {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={type === 'password'}
                keyboardType={type === 'email' ? 'email-address' : 'default'}
            />
        </View>
    );
};