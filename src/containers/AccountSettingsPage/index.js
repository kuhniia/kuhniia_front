import React from 'react';
import UI from 'src/components/AccountSettingsPage';
import { logOut } from 'src/redux/navigationController/actions';
import { useDispatch } from 'react-redux';

const AccountSettingsPage = () => {
  const dispatch = useDispatch();
  const selectPreloadPage = () => dispatch(logOut());

  return <UI selectPreloadPage={selectPreloadPage} />;
};

export default AccountSettingsPage;
