import { Contact } from '../../../types/contacts';
import { Action, State } from '../../../types/state';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'initiate-update': {
      return {
        contacts: state.contacts.map((entry: Contact) =>
          entry.name === action.payload.contactId
            ? { ...entry, isEditing: true }
            : { ...entry }
        ),
      };
    }

    case 'perform-update': {
      return {
        contacts: state.contacts.map((entry: Contact) =>
          entry.name === action.payload.contactId
            ? { ...action.payload.data, isEditing: false }
            : { ...entry }
        ),
      };
    }

    case 'delete': {
      const newContacts = [...state.contacts];

      const res = newContacts.splice(
        newContacts.findIndex(
          (entry: Contact) => entry.name === action.payload.contactId
        ),
        1
      );

      return {
        contacts: newContacts,
      };
    }

    default: {
      return {
        contacts: [
          ...state.contacts,
          { ...action.payload.data, isEditing: false },
        ],
      };
    }
  }
};
