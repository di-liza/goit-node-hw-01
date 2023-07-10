import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";
const contactsPath = path.join("db", "contacts.json");

// TODO: задокументувати кожну функцію

const updateContactsStorage = async (contacts) => {
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};
export async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

export async function getContactById(contactId) {
  const allContacts = await listContacts();
  return allContacts.find(({ id }) => id === String(contactId)) || null;
}

export async function removeContact(contactId) {
  const allContacts = await listContacts();
  const index = allContacts.findIndex(({ id }) => id === String(contactId));
  if (index === -1) return null;
  const [result] = allContacts.splice(index, 1);
  await updateContactsStorage(allContacts);
  return result;
}

export async function addContact(name, email, phone) {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  allContacts.unshift(newContact);
  await updateContactsStorage(allContacts);
  return newContact;
}

export async function updateContactBtId(id, name, email, phone) {
  const allContacts = await listContacts();
  const contactIndex = allContacts.findIndex((c) => c.id === id);
  if (contactIndex === -1) return null;
  allContacts[contactIndex] = {
    id,
    name,
    email,
    phone,
  };
  await updateContactsStorage(allContacts);
  return allContacts[contactIndex];
}
