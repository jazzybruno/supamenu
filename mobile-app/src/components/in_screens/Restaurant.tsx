import { View, Text, Pressable , Image } from 'react-native'
import React from 'react'
import { ThemedText } from '../core/ThemedText'
import { Link, useRouter } from 'expo-router';

interface RestaurantProps {
    restaurant: any;
}

const Restaurant = ({ restaurant }: RestaurantProps) => {
    const router = useRouter();
    return (
        <Pressable onPress={()=> router.push(`/restaurant/${restaurant.id}`)}>
            <View className="p-3 bg-gray-400/10 rounded-md mt-3 flex-row items-center">
                <View className="w-24 h-24 rounded-md overflow-hidden">
                    <View className=" w-full h-full">
                        <Image className='w-full h-full object-cover' source={{
                            uri: restaurant.imageUrl
                        }} alt={restaurant.name} />
                    </View>
                </View>
                <View className="flex-1 ml-3">
                    <ThemedText className="font-bold">{restaurant.name}</ThemedText>
                    <ThemedText className="text-sm text-gray-400">Rating: {restaurant.rating}</ThemedText>
                    <ThemedText className="text-sm text-gray-400">Distance: {restaurant.address}</ThemedText>
                </View>
            </View>
        </Pressable>
    )
}

export default Restaurant