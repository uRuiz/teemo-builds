import React from 'react';
import Select from 'react-select';
import './SearchBar.css';

export const SearchBar = ({ championsList, onChange }) => {

  return (
    <>
      <Select 
        className='select-dropdown' 
        options={championsList} 
        onChange={onChange} 
        name='championsList'
        placeholder='Select a champion'
      />
    </>
  )
}
