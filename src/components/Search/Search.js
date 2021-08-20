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
    // console.log(searchItem)
    return setSearchresults(searchItem)
  }
  return (
    <Container>
      <Row className="searchContainer py-5">
        <h1>{searchGuests.searchGuestsTitle.title}</h1>
        <Col sm={12}>
        <form onSubmit={submitHandle} className="searchForm">
          <input type="text" name="location" value={search.location} onChange={changeHandle} placeholder="Location"/>
          <input type="text" name="age" value={search.age} onChange={changeHandle} placeholder="Age"/>
          <input type="text" name="breed" value={search.breed} onChange={changeHandle} placeholder="Breed" />
          <input type="text" name="gender" value={search.gender} onChange={changeHandle} placeholder="Gender" />
          <button type="submit">
            <FaSearch size={27} className="searchIcon" />
          </button>
        </form>
        </Col>
        <Col sm={12}>
          <Row className="mt-5 items">
            {searchResults.map(result => {
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
            })}
            
            {/* {searchGuests.guestsResults.filter((item) =>
              {
                if(search === "") {
                return item
                } else if (item.location.includes(search) && item.age.includes(search) && item.breed.includes(search) && item.gender.includes(search)) {
                  return item
                }
              }
            ).map((result) => {
              return (
                <SearchResults
                key={result.id}
                img={result.img}
                petLocation={result.location}
                petAge={result.age}
                petBreed={result.breed}
                petGender={result.gender}
              />
              )
              })} */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;