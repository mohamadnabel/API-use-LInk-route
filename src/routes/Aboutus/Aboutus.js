import React from "react";
import Bissnusses from "../assintes/images.jpeg";
function AboiutUsPage() {
  return (
    <div className="AboiutUsPage-Counteners">
      {/* <h1>hello world</h1> */}
      <div class="row featurette">
        <div class="col-md-7">
          <br></br>
          <br></br>
          <h2 class="featurette-heading fw-normal lh-1">
            First featurette heading.{" "}
            <span class="text-body-secondary">It’ll blow your mind.</span>
          </h2>
          <p class="lead">
            Communicate the story of your business and why you started it.
            Describe the customers or the cause that your business serves.
            Explain your business model or how your products are made. Put a
            face to your business, featuring the founders or the people on your
            team. Incorporate persuasive content (e.g. an explainer video, data
            visualizations, links to blog posts) that might otherwise clutter
            your homepage..
          </p>
        </div>
        <div class="col-md-5">
          {/* <br></br> */}
          <br></br>
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)">
              <img src="../assintes/images.jpeg" />
            </rect>
            {/* <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
              500x500
            </text> */}
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AboiutUsPage;
