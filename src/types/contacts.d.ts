export type ContactInput = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type Contact = {
  name: string;
  email: string;
  phoneNumber: string;
  isEditing: boolean;
};

export type ContactsProps = {
  contacts: Contact[];
  onPressEdit: (contactId: string) => void;
  onPressDelete: (contactId: string) => void;
  onSubmitEdit: (contactId: string, input: ContactInput) => void;
  onPressAdd: () => void;
  onSubmitAdd: (input: ContactInput) => void;
  addVisible?: boolean;
};
