import { TouchableOpacity, View, Text } from 'react-native'
import React from 'react'

interface Props {
  title: string;
  handlePress: () => void;
  containerStyle: string;
  textStyles: string;
  isLoading: boolean;
};
const CustomButton = ({title, handlePress, containerStyle, isLoading, textStyles}: Props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] 
        justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}>
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
          {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton