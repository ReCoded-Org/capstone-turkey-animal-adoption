import React from "react";
import SearchResults from "./SearchResults";
import { Container, Row, Col } from "react-bootstrap";
import "./Search.css";

const Search = ({ searchGuests }) => {
  return (
    <Container>
      <Row className="searchContainer py-5">
        <Col sm={12}>
          {searchGuests && (
            <>
              <h1>{searchGuests.searchGuestsTitle.title}</h1>
              <Row className="mt-5 items">
                {searchGuests.guestsResults.map((result) => (
                  <SearchResults
                    key={result.id}
                    img={result.img}
                  />
                ))}
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Search;