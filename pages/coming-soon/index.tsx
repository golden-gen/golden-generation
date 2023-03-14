import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const register = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`https://golden-api-napf.onrender.com/api/v1/reg/student`, email)
      .then((res) => {
        setIsLoading(false);
        console.log({ res });
        toast(res.data.message, {
          type: "success",
        });
      })
      .catch((error) => {
        setIsLoading(false);

        toast(error.data.message, {
          type: "error",
        });
      });
  };
  return (
    <div className="page">
      <div className="countdown-col col">
        <div className="time middle">
          <span>
            <div id="days">1</div> Days
          </span>
          <span>
            <div id="hours">0</div> Hours
          </span>
          <span>
            <div id="minutes">0</div> Minutes
          </span>
          <span>
            <div id="seconds">0</div> Seconds
          </span>
        </div>
      </div>
      <div className="newsletter-col col">
        <div className="newslatter middle">
          <h1>We Are Coming Soon</h1>
          {/* <h4>Subscribe to get notification when we start</h4> */}
          {/* <form>
            <input
              type="text"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="button"
              className="newslatter-button"
              onClick={register}
              disabled={isLoading}
            >
              Subscribe
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
