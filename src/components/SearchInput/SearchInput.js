import React from 'react';
import { useForm } from "react-hook-form";

import { SearchInputField } from './styles';

export default function SearchInput({ setQuerySearch }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.query);
    setQuerySearch(data.query);
  }

  return (
    <form method="GET" onSubmit={handleSubmit(onSubmit)}>
      <SearchInputField
        type="text"
        placeholder="Search"
        aria-label="Search (press enter)"
        name="query"
        ref={ register }/>
    </form>
  )
}
