import { Contact, ContactInput } from './contacts';

export type State = {
  contacts: Contact[];
};

type ActionType = 'create' | 'initiate-update' | 'delete' | 'perform-update';

type ActionPayload = {
  contactId?: string;
  data?: ContactInput;
};

export type Action = {
  type: ActionType;
  payload: ActionPayload;
};
