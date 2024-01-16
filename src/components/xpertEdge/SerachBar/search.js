// pages/Search.js
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsX } from "react-icons/bs"; // Import close icon
import styles from "./SearchBar.module.css";
import searchData from "@/Data/NavbarData/TabData.json"; // Import your data file
import { useRouter } from "next/router";

const Search = () => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement your search logic here if needed
    console.log("Search button clicked");
  };

  const handleInputClick = () => {
    setShowDropdown(true);
  };

  const handleCloseClick = () => {
    setShowDropdown(false);
  };

  const handleClick = (url) => {
    setShowDropdown(false);
    router.push(url);
  };

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    setQuery(e.target.value);
    setShowDropdown(true);

    // Implement your search logic here (e.g., filter data based on search term)
    const results = getSearchResults(searchTerm);

    // Update the search results state
    setSearchResults(results);

    // Show the dropdown only if there are results
    setShowDropdown(results.length > 0);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to determine if it's a mobile view
    const checkIsMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Initial check
    checkIsMobileView();

    // Event listener for window resize
    const handleResize = () => {
      checkIsMobileView();
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${styles.searchContainer} ${
        isMobileView ? styles.mobileView : ""
      }`}
    >
      <div className={styles.destopview}>
        <div
          className={`${styles.input} ${
            isMobileView ? styles.mobileInput : ""
          }`}
          ref={dropdownRef}
        >
          <BiSearch className={styles.searchIcon} onClick={handleInputClick} />
          <input
            className={styles.inputStyle}
            type="text"
            placeholder={`Search ${
              isMobileView ? "" : "free courses and topics you want to learn"
            }`}
            value={query}
            onChange={handleChange}
            onClick={handleInputClick}
          />
          {isMobileView && showDropdown && (
            <button className={styles.closeButton} onClick={handleCloseClick}>
              <BsX />
            </button>
          )}
        </div>

        {showDropdown && (
          <div className={styles.dropdown}>
            <span className={styles.popular}>Popular Free Courses</span>
            {searchResults.map((result) => (
              <div
                className={styles.dropdownItem}
                key={result.id}
                onClick={() => handleClick(result.url)}
              >
                <a href={result.url}>
                  <div className={styles.courseInfo}>
                    <h4>{result.title}</h4>
                    {/* Display other result information as needed */}
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.containertwo}>
  <form
  onClick={handleInputClick} 
    role="search"
    method="get"
    className={`${styles["search-form"]}`}
    onSubmit={handleSearch}
  >
    <label>
      <input
      onClick={handleInputClick} 
        type="search"
        className={`${styles["search-field"]}`}
        placeholder="Search …"
        value=""
        name="s"
        title="Search for:"
      />
    </label>
    {isMobileView && showDropdown && (
      <button className={styles.closeButton} onClick={handleCloseClick}>
        <BsX />
      </button>
    )}
    {isMobileView && showDropdown && (
      <div className={styles.dropdown}>
        <span className={styles.popular}>Popular Free Courses</span>
        {searchResults.map((result) => (
          <div
            className={styles.dropdownItem}
            key={result.id}
            onClick={() => handleClick(result.url)}
          >
            <a href={result.url}>
              <div className={styles.courseInfo}>
                <h4>{result.title}</h4>
                {/* Display other result information as needed */}
              </div>
            </a>
          </div>
        ))}
      </div>
    )}
    <input
      type="submit"
      className={`${styles["search-submit"]}`}
      value="Search"
      onClick={handleInputClick} 
    />
     {isMobileView && showDropdown && (
      <div className={styles.dropdown}>
        <span className={styles.popular}>Popular Free Courses</span>
        {searchResults.map((result) => (
          <div
            className={styles.dropdownItem}
            key={result.id}
            onClick={() => handleClick(result.url)}
          >
            <a href={result.url}>
              <div className={styles.courseInfo}>
                <h4>{result.title}</h4>
                {/* Display other result information as needed */}
              </div>
            </a>
          </div>
        ))}
      </div>
    )}
      {isMobileView && showDropdown && (
      <button className={styles.closeButton} onClick={handleCloseClick}>
        <BsX />
      </button>
    )}
  </form>
</div>

    </div>
  );
};

export default Search;

// Helper function to filter data based on search term
const getSearchResults = (searchTerm) => {
  // Convert the search term to lowercase for case-insensitive search
  const searchTermLowerCase = searchTerm.toLowerCase();

  // Filter the data based on the search term
  const results = searchData.filter((item) =>
    item.title.toLowerCase().includes(searchTermLowerCase)
  );

  return results;
};
