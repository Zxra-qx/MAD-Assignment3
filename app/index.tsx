
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.content}>
        <Text style={styles.title}>Employee Forms App</Text>

        <Text style={styles.subtitle}>
          Select a form to get started.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push('/employee')}
        >
          <Text style={styles.buttonText}>
            Employee Information
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => router.push('/signup')}
        >
          <Text style={styles.buttonText}>
            Sign Up
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => router.push('/signin')}
        >
          <Text style={styles.buttonText}>
            Sign In
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
    padding: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaaaaa',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#ff375f',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
