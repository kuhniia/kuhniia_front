import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import configureStore from 'src/redux/store';

// PAGES
import PreloadPage from 'src/containers/PreloadPage';
import SignUpPage from 'src/containers/SignUpPage';
import LogInPage from 'src/containers/LogInPage';
import MainPage from 'src/containers/MainPage';
import AccountSettingsPage from 'src/containers/AccountSettingsPage';

import { ButtonBack, ScreenTitle, AvatarWithSignature } from 'src/components/_shared';
import colors from 'src/constants/colors';
import PAGES from 'src/navigation/constants';
import { texts } from 'src/translations';

const Stack = createStackNavigator();
const store = configureStore();

const defaultNavigatorStyles = () => ({
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomColor: colors.transparent,
    elevation: 0,
    shadowOpacity: 0,
    height: 55,
  },
  cardStyle: {
    backgroundColor: colors.white,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            ...defaultNavigatorStyles(),
          }}>
          <Stack.Screen
            name={PAGES.PreloadPage}
            component={PreloadPage}
            options={() => ({
              header: () => null,
            })}
          />
          <Stack.Screen
            name={PAGES.SignUpPage}
            component={SignUpPage}
            options={({ navigation }) => ({
              headerRight: () => <ButtonBack onPress={() => navigation.goBack()} />,
              headerLeft: () => <ScreenTitle title={texts.createAnAccount} />,
              title: null,
            })}
          />
          <Stack.Screen
            name={PAGES.LogInPage}
            component={LogInPage}
            options={({ navigation }) => ({
              headerRight: () => <ButtonBack onPress={() => navigation.goBack()} />,
              headerLeft: () => <ScreenTitle title={texts.welcome} />,
              title: null,
            })}
          />
          <Stack.Screen
            name={PAGES.MainPage}
            component={MainPage}
            options={({ navigation }) => ({
              headerRight: null,
              headerLeft: () => <AvatarWithSignature onPress={() => navigation.navigate(PAGES.AccountSettingsPage)} />,
              title: null,
              headerStyle: {
                height: 120,
              },
            })}
          />
          <Stack.Screen
            name={PAGES.AccountSettingsPage}
            component={AccountSettingsPage}
            options={({ navigation }) => ({
              headerRight: () => <ButtonBack onPress={() => navigation.goBack()} />,
              headerLeft: null,
              title: null,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
