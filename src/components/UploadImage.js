import { View, Avatar} from 'native-base'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export function UploadImage({ selectedImage, placeholderImageSource, onPress, ...rest }) {
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : {uri: placeholderImageSource}

  return (
    <View position="relative" overflow="hidden" {...rest}>
      <Avatar source={imageSource} size="lg" />
      <View
        position="absolute"
        bottom={0}
        opacity={0.5}
        backgroundColor="gray.100"
        width="100%"
      >
        <TouchableOpacity
          onPress={onPress}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 5,
            paddingTop: 3
          }}
        >
          <AntDesign name="camera" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}