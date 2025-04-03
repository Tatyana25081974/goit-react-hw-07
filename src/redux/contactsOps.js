import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://67ee9ed6c11d5ff4bf7a58a4.mockapi.io';


// 🔹 Операція 1: Завантаження всіх контактів
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data; // повертаємо масив контактів
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// 🔹 Операція 2: Додавання контакту
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data; // повертаємо новий обʼєкт
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// 🔹 Операція 3: Видалення контакту
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
