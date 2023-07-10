import { Command } from "commander";

const program = new Command();

import {
  addContact,
  getContactById,
  listContacts,
  removeContact,
  updateContactBtId,
} from "./db/contacts.js    ";

// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log("allContacts", allContacts);
    case "get":
      const getbyId = await getContactById(id);
      return console.log("id", id);
    case "add":
      const result = await addContact(name, email, phone);
      return console.log("result", result);
    case "remove":
      const remove = await removeContact(id);
      return console.log("remove", remove);
    case "update":
      const update = await updateContactBtId(id, name, email, phone);
      return console.log("update", update);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWH" });
// invokeAction({
//   action: "add",
//   name: "Kattie",
//   email: "kattt@lumus.net",
//   phone: "(548) 223-7854",
// });

// invokeAction({
//   action: "update",
//   id: "AeHIrLTr6JkxGE6SN-0Rw",
//   name: "Kattie",
//   email: "kattt@lumus.net",
//   phone: "(548) 223-7854",
// });

invokeAction({ action: "remove", id: "AeHIrLTr6JkxGE6SN-0Rw" });
