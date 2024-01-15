import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { Pressable, Text, View } from 'react-native';

import EditScreenInfo from '../components/edit-screen-info';

import { RootStackParamList } from '~/navigation';
import { OneStackParamList } from '~/navigation/stack-one-navigator';
import { TabNavigatorParamList } from '~/navigation/tab-navigator';

// Props reçu pour l'ecran One de OneStack
type OneScreenProps = StackScreenProps<OneStackParamList, 'One'>;

// Props crée pour naviguer dans RootNavigation
type RootNavigationType = StackNavigationProp<RootStackParamList>;

// Props crée pour naviguer dans le TabNavigator
type TabNavigationType = BottomTabNavigationProp<TabNavigatorParamList>;

export default function OneScreen({ navigation }: OneScreenProps) {
  const { navigate } = useNavigation<RootNavigationType>();
  const { navigate: nav } = useNavigation<TabNavigationType>();

  return (
    <View className={styles.container}>
      <Text className={styles.title}>Tab One</Text>
      <View className={styles.separator} />
      <EditScreenInfo path="src/screens/one.tsx" />
      <Pressable onPress={() => navigate('Modal')} className={styles.button}>
        <Text>Go To Modal Screen de Root Stack</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Three')} className={styles.button}>
        <Text>Go To Three Screen de OneStack Stack</Text>
      </Pressable>
      <Pressable onPress={() => nav('TwoTab')} className={styles.button}>
        <Text>Go To Two Screen de Two Stack</Text>
      </Pressable>
    </View>
  );
}

const styles = {
  container: 'items-center flex-1 justify-center',
  separator: 'h-[1px] my-7 w-4/5 bg-gray-200',
  title: 'text-xl font-bold',
  button: 'p-4 border rounded',
};
