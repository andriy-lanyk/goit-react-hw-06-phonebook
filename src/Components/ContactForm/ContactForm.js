import React, { useState } from "react";
import PropTypes from "prop-types";

import { Form, Label, Btn } from "./ContactForm.styles";

function ContactForm({ submit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function getValue(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  }

  function handleChange(e) {
    e.preventDefault();
    submit(name, number);
    reset();
  }

  function reset() {
    setName("");
    setNumber("");
  }

  return (
    <Form onSubmit={handleChange}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={getValue}
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
          onChange={getValue}
        />
      </Label>
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
}

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ContactForm;
