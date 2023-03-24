import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FiSearch } from "react-icons/fi";

interface searchBarProps {
  city: string;
  selectCity: Function;
  search: Function;
}

const SearchBar = (props: searchBarProps) => {
  const { city, selectCity, search } = props;

  return (
    <div className="searchBar">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search a city"
          aria-label="Search a city"
          aria-describedby="basic-addon2"
          value={city}
          onChange={(e) => selectCity(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => search()}
        >
          <FiSearch />
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
