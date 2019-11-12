import React from 'react';
import logo from './logo.svg';
import './App.css';
import SongList from './components/SongList';
import BookListProvider from './contexts/BookContext';
import BookList from './components/BookList';
import FormBook from './components/FormBook';

function App() {
  return (
    <div className="App">
      <BookListProvider>
            <BookList/>
            <FormBook/>
      </BookListProvider>
    </div>
  );
}

export default App;
