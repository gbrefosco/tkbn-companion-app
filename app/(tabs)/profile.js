import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Profile() {
	return (
		<View>
			<Text>Profile</Text>
			<Link href="/profile/123"> Vai pro perfil específico </Link>
		</View>
	)
}