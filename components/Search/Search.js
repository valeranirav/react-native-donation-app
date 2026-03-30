import React from 'react';

import { useRef, useState } from 'react';
import { Pressable, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import style from './style';
import { scaleFontSize } from '../../assets/styles/scaling';

const Search = ({ onSearch = () => {}, placeholder = 'Search' }) => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const handleSearch = value => {
    setSearch(value);
    onSearch(value);
  };

  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={scaleFontSize(22)}
      />
      <TextInput
        ref={textInputRef}
        style={style.searchInput}
        placeholder={placeholder}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
};

Search.PropTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
