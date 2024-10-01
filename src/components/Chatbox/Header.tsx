import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import BotInfo from './BotInfo';
import WavyHeader from './WavyHeader';

type HeaderProps = {
  name: string;
  navigation?: any;
  customStyles?: any;
};

// ===========================================================================
// ===========================================================================
// ===========================================================================
// I started creating the BotInfo component in the header. So I need to move 
// it into its own component. The header should just be a container mostly. 
// ===========================================================================
// ===========================================================================
// ===========================================================================

const Header: React.FC<HeaderProps> = ({ navigation, name, customStyles }) => {
  // Your header component code here
  return (
    <View style={styles.container}>
      <WavyHeader customStyles={styles.svgCurve} />
      <View style={styles.headerContainer}>
      <BotInfo name="My Bot" description="This is my bot"/>


      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 10
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 35
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  },
});



// const Header = ({ navigation }: { navigation: any }) => {
  //   return (
    //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //       <TouchableOpacity onPress={() => navigation.goBack()}>
    //         <Text>Back</Text>
    //       </TouchableOpacity>
    //       <Text style={{ marginLeft: 10 }}>Header</Text>
    //     </View>
//   );
// };

export default Header;