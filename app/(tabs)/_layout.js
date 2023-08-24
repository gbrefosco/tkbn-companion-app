import { Tabs } from 'expo-router';

export default function TabRoutesLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    header: false,
                    title: 'Inicio'
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    header: false,
                    title: 'Perfil'
                }}
            />
        </Tabs>
    )
}