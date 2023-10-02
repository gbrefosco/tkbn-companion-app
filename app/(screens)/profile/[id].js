import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function Profile() {
	const { id: profileId } = useLocalSearchParams()

	return (
		<View>
			<Text>Perfil: {profileId}</Text>
		</View>
	)
}