import { useCallback } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ContactsProps } from '../types/contacts';
import AddButton from './AddButton';
import ContactForm from './ContactForm';
import Spacer from './styled/Spacer';

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  textContainer: {
    marginRight: 16,
    width: 150,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  updateButton: {
    padding: 10,
    backgroundColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 12,
    minWidth: 80,
    alignItems: 'center',
    marginRight: 16,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: '#564256',
    borderWidth: 1,
    borderRadius: 12,
    minWidth: 80,
    alignItems: 'center',
  },
  deleteText: {
    color: 'white',
  },
  contentText: {
    overflow: 'hidden',
  },
  addButtonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 32,
  },
  list: {
    width: '90%',
  },
});

const ContactList = (props: ContactsProps) => {
  const {
    addVisible,
    contacts,
    onPressEdit,
    onPressDelete,
    onSubmitEdit,
    onPressAdd,
    onSubmitAdd,
  } = props;

  // I've used the name as contactId for simplicity, in a real life situation this would not be the case

  const renderItem = useCallback(({ item: { name, email, phoneNumber } }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.contentText}>
            {name}
          </Text>
          <Text numberOfLines={1} style={styles.contentText}>
            {email}
          </Text>
          <Text numberOfLines={1} style={styles.contentText}>
            {phoneNumber}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => onPressEdit(name)}>
            <View style={styles.updateButton}>
              <Text>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressDelete(name)}>
            <View style={styles.deleteButton}>
              <Text style={styles.deleteText}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }, []);

  const renderEditItem = useCallback(
    ({ item: { name, email, phoneNumber } }) => (
      <View>
        <ContactForm
          values={{ name, email, phoneNumber, isEditing: true }}
          onSubmit={(values) => onSubmitEdit(name, values)}
        />
      </View>
    ),
    []
  );

  return (
    <FlatList
      data={contacts}
      renderItem={({ item }) =>
        item.isEditing ? renderEditItem({ item }) : renderItem({ item })
      }
      style={styles.list}
      keyExtractor={({ name }, index) => {
        return `${name}-${index}`;
      }}
      ItemSeparatorComponent={() => <Spacer md />}
      ListFooterComponent={() => (
        <>
          {addVisible ? (
            <>
              <Spacer sm />
              <ContactForm onSubmit={onSubmitAdd} />
            </>
          ) : (
            <View style={styles.addButtonContainer}>
              <AddButton text="+ Add Contact" onPress={onPressAdd} />
            </View>
          )}
        </>
      )}
    />
  );
};

export default ContactList;
