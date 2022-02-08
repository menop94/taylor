import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Contact, ContactInput } from '../types/contacts';
import AddButton from './AddButton';

const styles = StyleSheet.create({
  formContainer: {
    borderColor: '#96939B',
    borderWidth: 1,
    padding: 12,
    borderRadius: 16,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#564256',
    marginBottom: 12,
    minWidth: '90%',
    maxWidth: '90%',
  },
  submitButtonContainer: {
    // width: '-40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ContactForm = ({
  values,
  onSubmit,
  formContainerStyle,
}: {
  values?: Contact;
  onSubmit: ({ name, email, phoneNumber }: ContactInput) => void;
  formContainerStyle?: any;
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (typeof values !== 'undefined') {
      setName(values.name);
      setEmail(values.email);
      setPhoneNumber(values.phoneNumber);
    }
  }, []);

  const onValueChange = (key: string) => (value: string) => {
    switch (key) {
      case 'name': {
        setName(value);

        break;
      }

      case 'email': {
        setEmail(value);

        break;
      }

      case 'phone': {
        setPhoneNumber(value);

        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <View
      style={StyleSheet.flatten([styles.formContainer, formContainerStyle])}
    >
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={onValueChange('name')}
        placeholder={'Name'}
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={onValueChange('email')}
        placeholder={'Email'}
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={onValueChange('phone')}
        placeholder={'Phone Number'}
        keyboardType="decimal-pad"
      />
      <View style={styles.submitButtonContainer}>
        <AddButton
          onPress={() => onSubmit({ name, email, phoneNumber })}
          text={'Submit'}
        />
      </View>
    </View>
  );
};

export default ContactForm;
