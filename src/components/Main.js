import { useNavigate, useEffect } from "react-router-dom";
import "../assets/styles/Main.css";
import Navbar from "./Nav";

function Main() {
  const url = "https://server-mmr.onrender.com/";
  useEffect(() => {
    fetch(url).then((res) => {
      console.log(res);
    });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="homepage">
        <div className="homepage-context">
          <h1>
            Find the perfect <span>roommate today!</span>
          </h1>
          <p>
            Tell us what you are looking for and we will match
            <span>you with the roommate with similar habits as you.</span>
          </p>
          <button onClick={() => navigate("/signup")}>Get Started!</button>
        </div>
        <div className="shadow-box">
          <div className="homepage-image">
            <img
              src={require("../assets/images/roommates.png")}
              alt="roommates"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
