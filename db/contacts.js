// contacts.js

import fs from "fs/promises";

/*
 * Розкоментуй і запиши значення
 * const contactsPath = ;
 */
import path from "path";
const contactsPath = path.join("db", "contacts.json");
// const path = require("path");
// const contactsPath = (__dirname, path);

// TODO: задокументувати кожну функцію
export async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
  // ...твій код. Повертає масив контактів.
}

export async function getContactById(contactId) {
  const allContacts = await listContacts();
  return allContacts.find(({ id }) => id === String(contactId));
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

export async function removeContact(contactId) {
  return console.log("removeContact");
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

export async function addContact(name, email, phone) {
  return console.log("addContact");
  // ...твій код. Повертає об'єкт доданого контакту.
}
