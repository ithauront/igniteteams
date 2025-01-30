import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { Groups } from './src/screens/Groups';

export default function App() {
  return (
    <Fragment >
      <StatusBar style="auto" />
      <Groups />
    </Fragment>
  );
}


