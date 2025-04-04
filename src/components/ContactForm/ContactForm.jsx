import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required("Обов'язково"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Формат: 123-45-67")
      .required("Обов'язково"),
  });

  
  const initialValues = {
    name: '',
    number: '',
  };

  
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values)); // Відправляємо у Redux
    actions.resetForm();          // Очищаємо форму після сабміту
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          Ім'я
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

        <label>
          Номер телефону
          <Field type="text" name="number" placeholder="123-45-67" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>

        <button type="submit">Додати контакт</button>
      </Form>
    </Formik>
  );
}
