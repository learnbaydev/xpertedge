// pages/Search.js
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { BsX } from 'react-icons/bs'; // Import close icon
import styles from './SearchBar.module.css';
import courseData from '@/Data/NavbarData/tabData.json';
import { useRouter } from 'next/router';
import { FaStar } from "react-icons/fa";

const Search = () => {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement your search logic here if needed
    console.log('Search button clicked');
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
    setQuery(e.target.value);
    setShowDropdown(true);
    // Your search logic here
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
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);


  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.searchContainer} ${isMobileView ? styles.mobileView : ''}`}>
      <div className={styles.destopview}>
      <div className={`${styles.input} ${isMobileView ? styles.mobileInput : ''}`} ref={dropdownRef}>
        <BiSearch className={styles.searchIcon} onClick={handleInputClick} />
        <input
          className={styles.inputStyle}
          type="text"
          placeholder={`Search ${isMobileView ? '' : 'free courses and topics you want to learn'}`}
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
          
          <span className={styles.popular}>Popular Courses</span>
          {courseData.map((course) => (
            <div
              className={styles.dropdownItem}
              key={course.id}
              onClick={() => handleClick(course.url)}
            >
              <div className={styles.courseInfo}>
                <h4>{course.title}</h4>
                <div className={styles.dropdowncol}>
                  <ul className={styles.ul}>
                    <li className={styles.duration}>Duration: {course.Duration}</li>
                    <li className={styles.rating}> {course.rating} <FaStar className={styles.iconstar}/></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
      <div className={styles.containertwo}>
      <form role="search" method="get" className={`${styles['search-form']}`} onSubmit={handleSearch}>
        <label>
          <input
            type="search"
            className={`${styles['search-field']}`}
            placeholder="Search …"
            value=""
            name="s"
            title="Search for:"
          />
        </label>
        <input type="submit" className={`${styles['search-submit']}`} value="Search" />
      </form>
    </div>
      
    </div>
  );
};

export default Search;
