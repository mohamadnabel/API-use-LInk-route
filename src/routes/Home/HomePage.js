import React, { useEffect, useState } from "react";
function HomePage() {
  const [FechData, SetData] = useState([]);
  const FechDataHome = async () => {
    const url =
      "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d118966d8fmsh62c4af0eb79214fp1b4c9djsn62a2d79ff62b",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const Data = await response.json();
      console.log(Data);

      if (Data && Data.hints && Data.hints.length > 0) {
        SetData(Data.hints);
      } else {
        SetData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FechDataHome();
  }, []);

  return (
    <div className="Home-Countener">
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Album example</h1>
            <p class="lead text-body-secondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <a href="#" class="btn btn-primary my-2">
                Main call to action
              </a>
              <a href="#" class="btn btn-secondary my-2">
                Secondary action
              </a>
            </p>
          </div>
        </div>
      </section>
      {FechData.map((Item, Index) => {
        return (
          <div key={Index}>
            <div class="album py-5 bg-body-tertiary">
              <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <div class="col">
                    <div class="card shadow-sm">
                      <svg
                        class="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        // xmlns={Item.food.image}
                        role="img"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <image
                          href={Item.food.image}
                          width="100%"
                          height="100%"
                        ></image>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
                      </svg>
                      <div class="card-body">
                        <p class="card-text" key={Index}>
                          {Item.food.label}
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-body-secondary">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
