import React from "react";
import PropTypes from "prop-types";

import { Form, Label, Btn } from "./ContactForm.styles";

function ContactForm({ submit, change, number, name }) {
  return (
    <Form onSubmit={submit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={change}
          value={name}
        />
      </Label>
      <Label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={change}
        />
      </Label>
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
}

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactForm;
