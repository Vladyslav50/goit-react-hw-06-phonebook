import React from 'react';
import { useSelector } from 'react-redux';
import css from '../App.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}</span>: <b>{contact.number}</b>{' '}
            <button className={css.add_btn} type="button" onClick={() => null}>
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};
