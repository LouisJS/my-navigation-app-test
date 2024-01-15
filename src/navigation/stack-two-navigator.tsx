import { createStackNavigator } from '@react-navigation/stack';

import TabTwoScreen from '~/screens/two';

type TwoStackParamList = {
  Two: undefined;
};

const TwoStack = createStackNavigator<TwoStackParamList>();

const TwoStackNavigator = () => (
  <TwoStack.Navigator>
    <TwoStack.Screen name="Two" component={TabTwoScreen} />
  </TwoStack.Navigator>
);

export default TwoStackNavigator;
