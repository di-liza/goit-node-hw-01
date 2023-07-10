// contacts.js

import fs from "fs/promises";

/*
 * Розкоментуй і запиши значення
 * const contactsPath = ;
 */
import path from "path";
const contactsPath = path.resolve("db", "contacts.json");
// const path = require("path");
// const contactsPath = (__dirname, path);

// TODO: задокументувати кожну функцію
export async function listContacts() {
  const contacts = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(contacts);
  // ...твій код. Повертає масив контактів.
}

export function getContactById(contactId) {
  return console.log("getContactById");
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

export function removeContact(contactId) {
  return console.log("removeContact");
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

export function addContact(name, email, phone) {
  return console.log("addContact");
  // ...твій код. Повертає об'єкт доданого контакту.
}
