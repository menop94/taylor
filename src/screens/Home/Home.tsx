import { useState, useReducer } from 'react';
import { Alert } from 'react-native';

import ContactList from '../../components/ContactList';
import { Container } from '../../components/styled/Container';
import Spacer from '../../components/styled/Spacer';
import { Title } from '../../components/styled/Title';
import { ContactInput } from '../../types/contacts';
import { initialState } from './state/initialState';
import { reducer } from './state/reducer';

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [addVisible, setAddVisible] = useState(false);

  const { contacts } = state;

  const onPressAdd = () => {
    setAddVisible(true);
  };

  const addContact = ({ name, email, phoneNumber }: ContactInput) => {
    dispatch({
      type: 'create',
      payload: {
        data: {
          name,
          email,
          phoneNumber,
        },
      },
    });

    setAddVisible(false);
  };

  const onPressEdit = (contactId: string) => {
    dispatch({
      type: 'initiate-update',
      payload: {
        contactId,
      },
    });
  };

  const onPressDelete = (contactId: string) => {
    Alert.alert('Delete', `Are you sure you want to remove ${contactId}?`, [
      { text: 'Cancel', onPress: () => {}, style: 'cancel' },
      {
        text: 'Yes',
        onPress: () => deleteContact(contactId),
        style: 'destructive',
      },
    ]);
  };

  const updateContact = (contactId: string, values: ContactInput) => {
    dispatch({
      type: 'perform-update',
      payload: {
        contactId,
        data: values,
      },
    });
  };

  const deleteContact = (contactId: string) => {
    dispatch({
      type: 'delete',
      payload: {
        contactId,
      },
    });
  };

  return (
    <Container>
      <Title>{'Contact List'}</Title>
      <Spacer md />
      <ContactList
        contacts={contacts}
        onPressDelete={onPressDelete}
        onPressEdit={onPressEdit}
        onPressAdd={onPressAdd}
        onSubmitEdit={updateContact}
        onSubmitAdd={addContact}
        addVisible={addVisible}
      />
    </Container>
  );
};

export default Home;
