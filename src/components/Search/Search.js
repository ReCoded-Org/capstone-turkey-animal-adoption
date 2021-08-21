import React from "react";
import SearchResults from "./SearchResults";
import { Container, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = ({ searchGuests }) => {

  const [search, setSearch] = React.useState({
    location: "",
    age: "",
    breed: "",
    gender: "",
  })
  const [searchResults, setSearchresults] = React.useState([])

  const changeHandle = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const submitHandle = e => {
    // console.log(searchGuests.guestsResults)
    e.preventDefault()
      const searchItem = searchGuests.guestsResults.filter(item => {
        return (
          item.location
            .toLowerCase()
            .includes(
              search.location.toLowerCase()
            ) &&
          item.age
            .toLowerCase()
            .includes(
              search.age.toLowerCase()
            ) &&
          item.breed
            .toLowerCase()
            .includes(
              search.breed.toLowerCase()
          ) &&
          item.gender
            .toLowerCase()
            .includes(
              search.gender.toLowerCase()
          )
        )
      })
      return setSearchresults(searchItem)
  }

  const LoadingPage = () => {
    return (
      <Col sm={12} className="loadPage">
        <h4>Start Searching Now and Discover New Friends</h4>
        <h6>They are waiting for their new home</h6>
        <img src="https://timesofindia.indiatimes.com/photo/67586673.cms" className="w-100 searchCatLogo"/>
      </Col>
    );
  };

  return (
    <Container>
      <Row className="searchContainer py-5">
        <h1>{searchGuests.searchGuestsTitle.title}</h1>
        <Col sm={12}>
        <form onSubmit={submitHandle} className="searchForm">
          <input type="text" name="location" value={search.location} onChange={changeHandle} placeholder="Location"/>
          <input type="text" name="age" value={search.age} onChange={changeHandle} placeholder="Age"/>
          <input type="text" name="breed" value={search.breed} onChange={changeHandle} placeholder="Breed" />
          <select name="gender" onChange={changeHandle} value={search.gender}>
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