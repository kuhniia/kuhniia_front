import React from 'react';
import UI from 'src/components/SignUpPage';

const SignUpPage = () => {
  const onSignUpPress = async (userInputData) => {
    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInputData),
      });

      const json = await response.json();
      __DEV__ && console.log('Response', json);
    } catch (e) {
      __DEV__ && console.error('Error', e);
    }
  };

  return <UI onSignUpPress={onSignUpPress} />;
};

export default SignUpPage;
