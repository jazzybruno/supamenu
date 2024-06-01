import { restaurants as imported } from '@/assets/data'
import Expandable from '@/components/core/Expandable'
import { ThemedText } from '@/components/core/ThemedText'
import { ArrowIcon } from '@/components/icons'
import Restaurant from '@/components/in_screens/Restaurant'
import { Colors } from '@/constants/Colors'
import useColorScheme from '@/hooks/useColorScheme'
import { cn } from '@/utils/cn'
import { FontAwesome5 } from '@expo/vector-icons'
import { useEffect } from 'react'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { Pressable, ScrollView, TextInput, View } from 'react-native'
import { useAuth } from '@/contexts/AuthProvider'
import { getAuthorizedAxiosInstance } from '@/utils/axios.util'

const Restaurants = () => {
  const router = useRouter();
  const colorScheme = useColorScheme()
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [ restaurants , setRestaurants ] = React.useState(imported)

  // fetching details of restaurants 
  const {user , token } = useAuth()
  const authenticatedAxiosInstance = getAuthorizedAxiosInstance(token!)
  if(!token || !user) return router.push('/login')

  useEffect(() => {
      try {
        authenticatedAxiosInstance.get(`/restaurant/`).then((res) => {
          // console.log(res.data.data)
          setRestaurants(res.data.data)
        }).catch((error) => {
          console.log(error)
        })
      } catch (error) {
        console.log(error);
    }
  },[restaurants])

  return (
    <View className='flex-1'>
      <View className="flex p-2 pb-1 flex-row justify-between items-center">
        <Pressable
          onPress={() => router.back()}
          className="flex w-9 h-9 rounded-full justify-center items-center flex-col p-2 border border-primary"
          style={{ transform: [{ rotate: "180deg" }] }}
        >
          <ArrowIcon size={20} />
        </Pressable>
        <View className="flex-row flex-1 ml-4 items-start justify-between">
          <ThemedText className={cn(" font-bold text-lg", isExpanded ? "hidden" : '')}>Restaurants</ThemedText>
          <Expandable
            onExpand={(exp) => setIsExpanded(exp)}
            // style={{backgroundColor: Colors[colorScheme].background}}
            className={cn(' flex-row p-2', isExpanded ? ' flex-1 bg-gray-400/10 ' : '')} rightSection={<FontAwesome5 name="search" size={20} color={Colors.primary} />}>
            <TextInput autoFocus className='flex-1' placeholder="Search ..." onChangeText={(e)=>{
               console.log(e)
            }} />
          </Expandable>
        </View>
      </View>
      <ScrollView className='flex-1 flex-col'>
        {restaurants.map((item, i) => (
          <Restaurant restaurant={item} key={i} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Restaurants