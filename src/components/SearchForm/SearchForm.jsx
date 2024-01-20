import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo } from 'components/redux/slice';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  // state = {
  //   query: '',
  // };

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = e => {
    // const { query } = this.state;

    e.preventDefault();
    const todo = {
      id: nanoid(),
      text: query,
    };
    dispatch(addTodo(todo));

    setQuery('');
  };
  // const { query } = this.state;

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
