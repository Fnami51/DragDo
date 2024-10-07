import { styles } from './main.styles';
import { SafeAreaView } from 'react-native';
import Header from './components/Header';
import Area from './components/Area';
import { StatusBar } from 'expo-status-bar';

function Main() {
  return (
    <SafeAreaView style={styles.background}>
      <Header />
      <Area />
      <StatusBar style='auto'/>
    </SafeAreaView>
  );
}

export default Main;
