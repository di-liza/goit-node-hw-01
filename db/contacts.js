import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";
const contactsPath = path.join("db", "contacts.json");

// TODO: задокументувати кожну функцію
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

  return allContacts;
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
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
  fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return newContact;
  // ...твій код. Повертає об'єкт доданого контакту.
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

  fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return allContacts[contactIndex];
}
