import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PreloadPage from 'src/containers/PreloadPage';
import SignUpPage from 'src/containers/SignUpPage';
import LogInPage from 'src/containers/LogInPage';
import { ButtonBack, ScreenTitle } from 'src/components/_shared';
import colors from 'src/constants/colors';
import PAGES from 'src/navigation/constants';
import { texts } from 'src/translations';

const Stack = createStackNavigator();

const defaultNavigatorStyles = () => ({
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomColor: colors.transparent,
    elevation: 0,
    shadowOpacity: 0,
  },
  cardStyle: {
    backgroundColor: colors.white,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ {
        ...defaultNavigatorStyles(),
      } }>
        <Stack.Screen name={PAGES.PreloadPage} component={ PreloadPage } options={ () => ({ header: () => null }) } />
        <Stack.Screen
          name={PAGES.SignUpPage}
          component={ SignUpPage }
          options={ ({ navigation }) => ({
            headerRight: () => <ButtonBack onPress={ () => navigation.goBack() } />,
            headerLeft: () => <ScreenTitle title={texts.createAnAccount}/>,
            title: null,
          }) } />
        <Stack.Screen
          name={PAGES.LogInPage}
          component={ LogInPage }
          options={ ({ navigation }) => ({
            headerRight: () => <ButtonBack onPress={ () => navigation.goBack() } />,
            headerLeft: () => <ScreenTitle title={texts.welcome}/>,
            title: null,
          }) } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
