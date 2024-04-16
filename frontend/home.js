import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('./homescreenback.jpg')}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to BudgetBuddy!</Text>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Settings')}
            style={[styles.button, styles.settingsButton]}
            labelStyle={styles.buttonLabel}
          >
            Settings
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('BudgetOverview')}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Budget Overview
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Assistant')}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Assistant Page
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('BudgetOverview2')}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            BudgetOverview2
          </Button>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Login')}
            style={styles.logoutButton}
            labelStyle={styles.buttonLabel}
          >
            Log Out
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center', // Center content for a better visual impact
  },
  content: {
    flex: 1,
    justifyContent: 'space-around', // Evenly space children vertically
    alignItems: 'center',
  },
  title: {
    color: '#ffffff', // White color for the text for better contrast
    fontSize: 28, // Larger font size for the title
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Text shadow for better readability
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 50, // Space from the buttons
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
    marginBottom: 10,
    elevation: 3, // Adds shadow
  },
  settingsButton: {
    // Extra style for the Settings button if needed
  },
  logoutButton: {
    borderColor: '#ffffff', // White border for contrast
    borderWidth: 1,
    marginTop: 10,
  },
  buttonLabel: {
    color: '#333333', // Dark text for readability on light buttons
    fontSize: 16, // Bigger font size for button labels
  }
  // ... rest of your styles
});

export default HomeScreen;
