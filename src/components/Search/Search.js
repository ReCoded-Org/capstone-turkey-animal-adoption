import React, { useState } from "react";
import SearchResults from "./SearchResults";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./Search.css";
import { useFormik } from 'formik';

const Search = ({ searchGuests }) => {

  const [searchResults, setSearchresults] = React.useState([])

  const formik = useFormik({
    initialValues: {
      location: "",
      age: "",
      breed: "",
      gender: "",
    },
    onSubmit: values => {
      const searchItem = searchGuests.guestsResults.filter(item => {
        return (
          item.location
            .toLowerCase()
            .includes(
              values.location.toLowerCase()
            ) &&
          item.age
            .toLowerCase()
            .includes(
              values.age.toLowerCase()
            ) &&
          item.breed
            .toLowerCase()
            .includes(
              values.breed.toLowerCase()
            ) &&
          item.gender
            .toLowerCase()
            .includes(
              values.gender.toLowerCase()
            )
        )
      })
      return setSearchresults(searchItem)
      // return JSON.stringify(values, null, 2);
    },
  });

  const LoadingPage = () => {
    return (
      <Col sm={12} className="loadPage">
        <h4>Start Searching Now and Discover New Friends</h4>
        <h6>They are waiting for their new home</h6>
        <img src="https://timesofindia.indiatimes.com/photo/67586673.cms" className="w-100 searchCatLogo" />
      </Col>
    );
  };

  return (
    <Container>
      <Row className="searchContainer py-5">
        <h1>{searchGuests.searchGuestsTitle.title}</h1>
        <Col sm={12}>
          <form onSubmit={formik.handleSubmit} className="searchForm">
            <label htmlFor="location"></label>
            <select id="location" name="location" value={formik.values.location} {...formik.getFieldProps('location')}>
              <option value="Select Location">Select Location</option>
              {searchGuests.locationCities.map(city => <option>{city}</option>)}
            </select>

            <label htmlFor="age"></label>
            <input
              id="age"
              type="text"
              placeholder="age"
              {...formik.getFieldProps('age')}
            />

            <label htmlFor="breed"></label>
            <select id="breed" name="breed" value={formik.values.breed} {...formik.getFieldProps('breed')}>
              <option value="Select Breed">Select Breed</option>
              {searchGuests.searchBreed.map(breed => <option>{breed}</option>)}
            </select>

            <label htmlFor="gender"></label>
            <select name="gender" value={formik.values.gender} {...formik.getFieldProps('gender')}>
              <option value="Select Gender">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>

            <button type="submit">
              <FaSearch size={27} className="searchIcon" />
            </button>
          </form>
        </Col>
        <Col sm={12}>
          <Row className="mt-5 items">
            {searchResults.length > 0 ? searchResults.map(result => {
              return (
                <SearchResults
                  key={result.id}
                  img={result.img}
                  location={result.location}
                  age={result.age}
                  breed={result.breed}
                  gender={result.gender}
                  name={result.name}
                />
              )
            }) : <LoadingPage />}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;