import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.card}>
      <p className={css.text}>
        <strong>{contact.name}</strong>: {contact.number}
      </p>
      <button className={css.button} onClick={handleDelete}>
        Видалити
      </button>
    </div>
  );
}
