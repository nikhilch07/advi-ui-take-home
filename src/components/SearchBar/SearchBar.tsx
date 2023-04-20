import React from "react";
import SearchBar from "material-ui-search-bar";
import type {Props} from './SearchBar.types';

const SearchBox = ({ searchText, handleChange, handleSearch, onCancelSearchRequest}: Props) => {
    return (
        <SearchBar
            onChange={(newValue) => handleChange(newValue)}
            onRequestSearch={handleSearch}
            onCancelSearch={onCancelSearchRequest}
            value={searchText}
        />
    )
}

export default SearchBox;