import React, { useState } from "react";
import SearchResults from "./SearchResults";
import { Container, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./Search.css";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

const Search = ({ searchGuests, gender }) => {
  const [searchResults, setSearchresults] = useState(
    searchGuests.guestsResults
  );

  const formik = useFormik({
    initialValues: {
      location: "",
      age: "",
      breed: "",
      gender: "",
    },
    onSubmit: (values) => {
      const checkAge = (age) => {
        switch (values.age.toLowerCase()) {
          case "<3":
            return Number(age) < 3;
          case ">3":
            return Number(age) >= 3;
          case "All":
            return Number(age) < 3 && Number(age) >= 3;
          default:
            return true;
        }
      };
      const searchItem = searchGuests.guestsResults.filter((item) => {
        return (
          item.location.toLowerCase() === values.location.toLowerCase() &&
          checkAge(item.age) &&
          item.breed.toLowerCase() === values.breed.toLowerCase() &&
          item.gender.toLowerCase() === values.gender.toLowerCase()
        );
      });
      return setSearchresults(searchItem);
    },
  });

  const Error = () => {
    return (
      <Col sm={12} className="loadPage">
        <h4>{t("searchPage.notFound")}</h4>
        <img
          src="https://timesofindia.indiatimes.com/photo/67586673.cms"
          className="w-100 searchCatLogo"
          alt="searchCatLogo"
        />
      </Col>
    );
  };

  const { t } = useTranslation();

  return (
    <Container>
      <Row className="searchContainer py-5">
        <h1>{t("searchPage.title")}</h1>
        <Col sm={12}>
          <form onSubmit={formik.handleSubmit} className="searchForm">
            <label htmlFor="location"></label>
            <select
              id="location"
              name="location"
              value={formik.values.location}
              {...formik.getFieldProps("location")}
            >
              <option value="Select Location">{t("searchPage.option0")}</option>
              {searchGuests.locationCities.map((city) => (
                <option>{city}</option>
              ))}
            </select>
            <label htmlFor="age"></label>
            <select
              id="age"
              name="age"
              value={formik.values.age}
              {...formik.getFieldProps("age")}
            >
              <option value="Select Age">{t("searchPage.option1")}</option>
              {searchGuests.searchAge.map((age) => (
                <option>{age}</option>
              ))}
            </select>
            <label htmlFor="breed"></label>
            <select
              id="breed"
              name="breed"
              value={formik.values.breed}
              {...formik.getFieldProps("breed")}
            >
              <option value="Select Breed">{t("searchPage.option2")}</option>
              {searchGuests.searchBreed.map((breed) => (
                <option>{breed}</option>
              ))}
            </select>
            <label htmlFor="gender"></label>
            <select
              id="gender"
              name="gender"
              value={formik.values.gender}
              {...formik.getFieldProps("gender")}
            >
              <option value="Select Gender">{t("searchPage.option3")}</option>
              {gender.map((gender) => (
                <option>{gender.gender0}</option>
              ))}
            </select>
            <button type="submit">
              <FaSearch size={27} className="searchIcon" />
            </button>
          </form>
        </Col>
        <Col sm={12}>
          <Row className="mt-5 items">
            {searchResults.length > 0 ? (
              searchResults.map((result) => {
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
                );
              })
            ) : (
              <Error />
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
