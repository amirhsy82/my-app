import { StatusBar } from "expo-status-bar";
import {Link} from 'expo-router'
import { ScrollView,Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
///
 import { images } from '../constants'
 ///

export default function App() {
    return(
       <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center h-full px-4">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />

                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode="contain"
                    />

                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">
                            Discover Endless Possibilities with {''}
                            <Text className="text-secondary-200">
                                Aora!
                            </Text>
                        </Text>

                        <Image
                           source={images.path}
                           className="w-[100px] h-[170px] absolute -buttom-2 -right-3"
                           resizeMode="contain"
                        />  
                    </View>
                        <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                            Where creativity meets innovation:
                            embark on a journy of limits exploration with Aora!
                        </Text>
                </View>
            </ScrollView>
       </SafeAreaView>
    )
}
