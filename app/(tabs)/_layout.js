import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Tabs } from 'expo-router'
import { BottomNavigation } from 'react-native-paper'

export default function TabRoutesLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          header: () => {},
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          header: () => {},
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account" size={size} color={color} />
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          header: () => {},
          title: 'Configurações',
        }}
      />
    </Tabs>
  )
}
