import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { RootStackParamList } from '.';
import OneStackNavigator from './stack-one-navigator';
import TwoStackNavigator from './stack-two-navigator';

export type TabNavigatorParamList = {
  OneTab: undefined;
  TwoTab: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;
}

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabNavigator({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="OneTab"
        component={OneStackNavigator}
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tab.Screen
        name="TwoTab"
        component={TwoStackNavigator}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
});
