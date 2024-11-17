import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author, data } = action.payload;
      state.books.push({
        id: data,
        title,
        author,
        pageCount: data
      });
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    clearBooks: (state) => {
      state.books = [];
    }
  }
});

export const { addBook, removeBook, clearBooks } = booksSlice.actions;

// Selectors
export const selectAllBooks = (state) => state.books.books;
export const selectBookById = (state, bookId) => 
  state.books.books.find(book => book.id === bookId);

export default booksSlice.reducer;