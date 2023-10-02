import { Tabs } from 'expo-router'

export default function TabRoutesLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          header: () => {},
          title: 'Inicio',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          header: () => {},
          title: 'Perfil',
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
