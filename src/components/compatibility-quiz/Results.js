import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/Logo.png";
import defaultPhoto from "../../assets/images/no-image-available.png";
// import loaderImage from '../../assets/images/results-card-skeleton.png';
import "./Results.css";

function Results() {
  const [matchedUsers, setMatchedUsers] = useState([]);
  const { userId } = useParams();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true); // Start navigation state
    // Fetch matched users data from API
    axios
      .get(`https://server-mmr.onrender.com/dashboard/${userId}`)
      .then((response) => {
        console.log(response);
        const matchedUsersData = response.data.profiles;
        setMatchedUsers(matchedUsersData.slice(0, 10)); // Limit to first 10 users
      })
      .catch((error) => {
        console.error("Error fetching matched users:", error);
      })
      .finally(() => {
        setIsNavigating(false); // End navigation state
      });
  }, [userId]);

  // Convert an array buffer to a Base64 string
  function arrayBufferToBase64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  return (
    <div className="results-container">
      <div className="results-header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h2>MatchMyRoomie</h2>
        </div>
        <div className="nav">
          <Link to="/">My Matches</Link>
          <Link to="/">Saved</Link>
          <Link to="/">Messages</Link>
          <Link to="/">My Profile</Link>
        </div>
      </div>

      {/* <div className='results-inner-container'> */}
      <div
        className={`results-inner-container ${
          isNavigating ? "blur-overlay" : ""
        }`}
      >
        {matchedUsers.length > 0 ? (
          <div className="results">
            {matchedUsers.map((user) => (
              <div className="each-user" key={user._id}>
                <div className="user-profile">
                  <div className="user-profile-image-container">
                    {/* {user.photo ? ( */}
                    {user.photo && user.photo.data ? (
                      <img
                        src={`data:image/png;base64,${arrayBufferToBase64(
                          user.photo.data
                        )}`}
                        alt="User's profile shot"
                      />
                    ) : (
                      <img src={defaultPhoto} alt="No profile shot available" />
                    )}
                  </div>

                  {/* {user.photo && user.photo.type === 'Buffer' && (
                  <img src={`{data:image/jpeg;base64,${user.photo.data}`} alt="User's Photo" />
                )} */}
                  {/* {user.photo && (
                  <img src={`data:photo/jpeg;base64,${user.photo}`} alt="User's Photo" />
                )} */}
                </div>
                <div className="user-profile-info">
                  <h3 className="user-profile-title">
                    <span className="user-profile-name">
                      {user.firstName} {user.lastName}{" "}
                    </span>
                    <span className="user-profile-age-gender">
                      {user.age} {user.gender}
                    </span>
                  </h3>
                  <p className="user-profile-about">{user.about}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results-message">
            No matched results. Please try again later.
          </div>
        )}
      </div>
      {/* <div
         id='results-loader'
         className={isNavigating ? 'show-load' : ''}        
       >
         <p className='loader-text fade-in'>Searching for perfect roommate...</p>        
       </div> */}
      {/* {isNavigating && (
        <div id='results-loader' className='show-load'>
          <p className='loader-text fade-in'>
            Searching for perfect roommate...
          </p>
          <img src={loaderImage} alt='Loading...' />
          <img src={loaderImage} alt='Loading...' />
        </div>
      )} */}
      <div
        id="results-loader"
        className={isNavigating ? "show-load" : ""}
      ></div>
      <p className={`loader-text fade-in ${isNavigating ? "show-load" : ""}`}>
        Searching for perfect roommate...
      </p>
    </div>
  );
}

export default Results;
