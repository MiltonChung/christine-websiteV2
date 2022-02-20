import * as React from "react";
import { Link } from "react-router-dom";
import WhyAreYouCrying from "../assets/images/whyAreYouCrying6.png";

const Films = () => {
  // sanity call here to fetch data

  return (
    <main id="films">
      <h2>Films I Made</h2>

      <div className="films-showcase">
        <div className="film">
          <Link className="film-img" to="/films/1">
            <img src={WhyAreYouCrying} alt="" />
            <div className="overlay">
              <span>Why are you crying?</span>
            </div>
          </Link>
          <p className="film-caption">Why are you crying? (2019)</p>
        </div>

        <Link className="film" to="/films/2">
          <img
            className="film-img"
            src={WhyAreYouCrying}
            alt="Why are you crying"
          />
          <p className="film-caption">Why are you crying? (2019)</p>
        </Link>

        <Link className="film" to="/films/3">
          <img
            className="film-img"
            src={WhyAreYouCrying}
            alt="Why are you crying"
          />
          <p className="film-caption">Why are you crying? (2019)</p>
        </Link>

        <Link className="film" to="/films/4">
          <img
            className="film-img"
            src={WhyAreYouCrying}
            alt="Why are you crying"
          />
          <p className="film-caption">Why are you crying? (2019)</p>
        </Link>
      </div>
    </main>
  );
};

export { Films };