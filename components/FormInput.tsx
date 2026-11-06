
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
} from 'react-native';

interface FormInputProps extends TextInputProps {
  label: string;
  error?: string;
}

export default function FormInput({
  label,
  error,
  style,
  ...props
}: FormInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        {...props}
        style={[
          styles.input,
          focused && styles.focusedInput,
          error ? styles.errorInput : null,
          style,
        ]}
        placeholderTextColor="#888888"
        onFocus={(event) => {
          setFocused(true);
          props.onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          props.onBlur?.(event);
        }}
      />

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  label: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#242424',
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#444444',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
  },
  focusedInput: {
    borderColor: '#ff375f',
  },
  errorInput: {
    borderColor: '#ff5555',
  },
  errorText: {
    color: '#ff5555',
    fontSize: 13,
    marginTop: 6,
  },
});
