import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import food_items from "./data/food_items.json";
import foodCategory from "./data/food_categories.json";

// import Carousel from "../components/Carousel";
import { ToastContainer } from "react-toastify";
import Card from "../components/Card";
export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      {/* Carousel */}
      <div>
        <div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            style={{ objectFit: "contain !important" }}
          >
            <div className="carousel-inner" id="carousel">
              <div className="carousel-caption" style={{ zIndex: "10" }}>
                <div className="d-flex justify-content-center">
                  {" "}
                  <input
                    className="form-control me-2 w-75"
                    type="search"
                    style={{ backgroundColor: "#EEF5FF", color: "#161A1F" }}
                    placeholder="Search in here..."
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  <button
                    className="btn  text-white searchButton "
                    // style={{
                    //   padding: "8px 16px",
                    //   border: "none",
                    //   borderRadius: "5px",
                    //   // backgroundColor: "#FB641B",
                    // }}
                    onClick={() => {
                      setSearch("");
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="carousel-item active">
                <img
                  src="https://source.unsplash.com/random/900x700?food"
                  className="d-block w-100"
                  style={{ filter: "brightness(90%)", objectFit: "cover" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/random/900x700?biryani"
                  className="d-block w-100"
                  style={{ filter: "brightness(90%)", objectFit: "cover" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/random/900x700?barbeque"
                  className="d-block w-100"
                  style={{ filter: "brightness(90%)", objectFit: "cover" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/random/900x700?cake"
                  className="d-block w-100"
                  style={{ filter: "brightness(90%)", objectFit: "cover" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/random/900x700?burger"
                  className="d-block w-100"
                  style={{ filter: "brightness(90%)", objectFit: "cover" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/random/900x700?pizza"
                  className="d-block w-100"
                  style={{ filter: "brightness(90%)", objectFit: "cover" }}
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Card Display for all the food category */}
      <div className="container">
        {foodCategory &&
        Array.isArray(foodCategory) &&
        foodCategory.length > 0 ? (
          foodCategory.map((data) => {
            return (
              <div key={data.id} className="row">
                {" "}
                {/* Assigning key to outer div */}
                {/* Name of the Food Category */}
                <div className="fs-3 m-3" style={{ color: "#161A1F" }}>
                  {data.CategoryName}
                </div>
                <hr
                  id="hr-success"
                  style={{
                    height: "4px",
                    backgroundImage:
                      "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))",
                  }}
                ></hr>
                {food_items &&
                Array.isArray(food_items) &&
                food_items.length > 0 ? (
                  food_items
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filteredItem) => {
                      return (
                        <div
                          key={filteredItem.id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            foodName={filteredItem.name}
                            item={filteredItem}
                            options={filteredItem.options[0]}
                            ImgSrc={filteredItem.img}
                          ></Card>
                        </div>
                      );
                    })
                ) : (
                  <div className="text-center mt-5 text-black">
                    <p>Loading...</p>
                    <p>
                      Please wait while we fetch the data, It takes Some Time.
                    </p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center mt-5 text-black">
            <p>Loading...</p>
            <p>Please wait while we fetch the data, It takes Some Time.</p>
          </div>
        )}
      </div>
      <div>
        <Footer></Footer>
      </div>

      <ToastContainer />

      {/*  Add css Property to the current  File  */}

      <style>
        {`
         .searchButton{
          transition:color 0.3s ease-in-out;
          background-color:#FB641B;
         }
         .searchButton:hover{
          background-color:#CC514F;
         }
        `}
      </style>
    </div>
  );
}
