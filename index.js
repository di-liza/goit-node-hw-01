import { Command } from "commander";

const program = new Command();

import {
  addContact,
  getContactById,
  listContacts,
  removeContact,
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
      return console.log("getbyId", getbyId);
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
