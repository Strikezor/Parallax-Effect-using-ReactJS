import React from "react";
import "./App.css";
import { Parallax } from "react-parallax";

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "green" }}>Strikezor</h1>
      <h1 style={{ textAlign: "center", color: "blue" }}>Parallax Page</h1>
      <div className="container">
        <Parallax
          bgImage="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230202143636/NEXT-js-tutorial-1.png"
          strength={200}
          style={{
            // width:"50vw",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{ height: 400 }}>
            <p>First Image</p>
          </div>
        </Parallax>
        <Parallax
          bgImage="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230310153232/ReactJS-Tutorial.jpg"
          strength={200}
          style={{
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{ height: 400 }}>
            <p>Second Image</p>
          </div>
        </Parallax>
        <Parallax
          bgImage="https://media.geeksforgeeks.org/wp-content/uploads/20230427130955/CSS-Tutorial.webp"
          strength={200}
          style={{
            marginTop: "2rem",
            // width:"50vw",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{ height: 400 }}>
            <p>Third Image </p>
          </div>
        </Parallax>
        <Parallax
          bgImage="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230310132605/Bootstrap-Tutorial.jpg"
          strength={200}
          style={{
            marginTop: "2rem",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{ height: 400 }}>
            <p>Fourth Image</p>
          </div>
        </Parallax>
      </div>

      <h1 style={{ textAlign: "center", color: "black", marginTop: "-95px" }}>
        Thank You!
      </h1>
    </div>
  );
};

export default Home;
