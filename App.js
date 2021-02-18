import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const App = () => {
  const [user, setUser] = useState(null)
  return (
    <>
      <View style={styles.scrollView}>
        <Text>Login status: {user ? user.email : 'Logged out'}</Text>
        <Button title="Log in" />
        <Button title="Sign up" />
        <Button title="Log out" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
