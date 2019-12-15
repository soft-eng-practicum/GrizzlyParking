import {observer} from 'mobx-react';
import {
  Dimensions,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {RootStoreContext} from '../stores/RootStore';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState, useEffect} from 'react';

const {width: WIDTH} = Dimensions.get('window');
const {height: HEIGHT} = Dimensions.get('window');

export const ProfilePage = observer(({navigation, ...props}) => {
  const RootStore = React.useContext(RootStoreContext);

  return (
    <View style={styles.background}>
      <View style={styles.logoView}>
        <Image
          style={styles.logo}
          source={require('../../lib/images/ggc-logo.png')}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.sectionTitle}>My Profile</Text>

        <View style={styles.sectionContainer}>
          <Text style={styles.ProfileText}>Account Email: Gname@ggc.edu</Text>
        </View>

        <View style={styles.legend}>
          <Text style={styles.sectionTitle}>Legend</Text>

          <View style={styles.legendView}>
            <Icon
              name={'ios-radio-button-on'}
              size={28}
              color={'#0ec91b'}
              style={styles.legendIcon}
            />
            <Text style={styles.legendText}>
              High chance of finding a parking space
            </Text>
          </View>

          <View style={styles.legendView}>
            <Icon
              name={'ios-radio-button-on'}
              size={28}
              color={'#d9d511'}
              style={styles.legendIcon}
            />
            <Text style={styles.legendText}>
              Medium chance of finding a parking space
            </Text>
          </View>

          <View style={styles.legendView}>
            <Icon
              name={'ios-radio-button-on'}
              size={28}
              color={'#d10d0d'}
              style={styles.legendIcon}
            />
            <Text style={styles.legendText}>
              Low chance of finding a parking space
            </Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => RootStore.CreateAccountDomain.login(navigation)}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: '#056f4b',
  },
  logo: {
    height: 50,
    resizeMode: 'contain',
    marginTop: 14,
  },
  logoView: {
    alignItems: 'center',
    borderColor: '#0A5A45',
    backgroundColor: 'white',
    width: WIDTH - 80,
    height: 90,
    borderWidth: 5,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  body: {
    backgroundColor: '#FFFFFF',
    width: WIDTH - 30,
    borderRadius: 30,
    borderColor: '#0A5A45',
    borderWidth: 5,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginTop: 10,
  },
  legend: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: WIDTH - 80,
    height: 200,
    borderColor: '#0A5A45',
    borderWidth: 2,
    margin: 20,
  },

  legendView: {
    flex: 1,
    flexDirection: 'row',
    //alignItems:'center',
    margin: 7,
    top: 10,
  },
  legendIcon: {
    bottom: 3,
    marginRight: 3,
  },
  legendText: {},
  ProfileText: {
    fontSize: 20,
  },
  button: {
    height: 50,
    width: 150,
    borderRadius: 10,
    margin: 15,
    backgroundColor: '#0A5A45',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
