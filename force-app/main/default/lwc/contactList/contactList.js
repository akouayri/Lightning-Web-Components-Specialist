import { LightningElement, wire } from "lwc";
import FIRST_NAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LASTNAME_FIELD from "@salesforce/schema/Contact.LastName";
import EMAIL_FIELD from "@salesforce/schema/Contact.Email";
import getContacts from "@salesforce/apex/ContactController.getContacts";
const COLUMNS = [
  {
    label: "Contact FirstName",
    fieldName: FIRST_NAME_FIELD.fieldApiName,
    type: "text"
  },
  {
    label: "Last Name",
    fieldName: LASTNAME_FIELD.fieldApiName,
    type: "text"
  },
  {
    label: "Email",
    fieldName: EMAIL_FIELD.fieldApiName,
    type: "email"
  }
];
export default class contactList extends LightningElement {
  columns = COLUMNS;
  @wire(getContacts)
  contacts;
}
