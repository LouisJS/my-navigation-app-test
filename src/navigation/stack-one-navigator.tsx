import { createStackNavigator } from '@react-navigation/stack';

import OneScreen from '~/screens/one';
import ThreeScreen from '~/screens/three';

export type OneStackParamList = {
  One: undefined;
  Three: undefined;
};

const OneStack = createStackNavigator<OneStackParamList>();

const OneStackNavigator = () => (
  <OneStack.Navigator>
    <OneStack.Screen name="One" component={OneScreen} />
    <OneStack.Screen name="Three" component={ThreeScreen} />
  </OneStack.Navigator>
);

export default OneStackNavigator;
