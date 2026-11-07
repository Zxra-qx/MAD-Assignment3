import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

const employeeSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, 'Full name is required.')
    .min(2, 'Enter at least 2 characters.')
    .max(80, 'Enter no more than 80 characters.'),

  email: z
    .string()
    .trim()
    .min(1, 'Work email is required.')
    .max(254, 'Enter no more than 254 characters.')
    .email('Enter a valid email address.'),

  phone: z
    .string()
    .trim()
    .min(1, 'Phone number is required.')
    .max(20, 'Enter no more than 20 characters.')
    .regex(
      /^(?:\+?1[ .-]?)?(?:\(\d{3}\)|\d{3})[ .-]?\d{3}[ .-]?\d{4}$/,
      'Enter a 10-digit phone number, like 403-555-0142.'
    ),

  department: z
    .string()
    .trim()
    .min(1, 'Department is required.')
    .min(2, 'Enter at least 2 characters.')
    .max(60, 'Enter no more than 60 characters.'),

  jobTitle: z
    .string()
    .trim()
    .min(1, 'Job title is required.')
    .min(2, 'Enter at least 2 characters.')
    .max(60, 'Enter no more than 60 characters.'),
});

type EmployeeData = z.infer<typeof employeeSchema>;

const fields = [
  {
    name: 'fullName',
    label: 'Full Name',
    placeholder: 'Enter your full name',
    autoComplete: 'name',
    autoCapitalize: 'words',
  },
  {
    name: 'email',
    label: 'Work Email',
    placeholder: 'name@example.com',
    keyboardType: 'email-address',
    autoComplete: 'email',
    autoCapitalize: 'none',
    autoCorrect: false,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    placeholder: '403-123-4567',
    keyboardType: 'phone-pad',
    autoComplete: 'tel',
  },
  {
    name: 'department',
    label: 'Department',
    placeholder: 'Enter your department',
    autoCapitalize: 'words',
  },
  {
    name: 'jobTitle',
    label: 'Job Title',
    placeholder: 'Enter your job title',
    autoCapitalize: 'words',
  },
] as const;

export default function EmployeeScreen() {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<EmployeeData>({
    resolver: zodResolver(employeeSchema),
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      department: '',
      jobTitle: '',
    },
  });

  function onSubmit(data: EmployeeData) {
    Alert.alert(
      'Validation Successful',
      `Employee information for ${data.fullName} passed validation.`
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Employee Information</Text>
        <Text style={styles.subtitle}>All fields are required.</Text>

        {fields.map(({ name, ...inputProps }) => (
          <Controller
            key={name}
            name={name}
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <FormInput
                {...inputProps}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={error?.message}
              />
            )}
          />
        ))}

        <FormButton
          title="Submit Employee Information"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || isSubmitting}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#aaaaaa',
    fontSize: 16,
    marginBottom: 24,
  },
});
