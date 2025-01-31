
import { Fragment } from 'react';
import { Groups } from '@screens/Groups';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <Fragment >
       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Groups />
    </Fragment>
  );
}


