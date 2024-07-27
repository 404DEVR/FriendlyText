import React, { useState } from "react";

export default function About(props) {
  const [myStyle, setMystyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [btntext, setBtntext] = useState("Enable dark mode");
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMystyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid white",
      });
      setBtntext("Enable dark mode");
    } else {
      setMystyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid black",
      });
      setBtntext("Enable light mode");
    }
  };

  return (
    <>
      <div
        className="accordion container"
        id="accordionExample"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          marginTop: "4rem",
        }}
      >
        <h1
          style={{
            color: props.mode === "dark" ? "white" : "black",
            marginBottom: "4rem",
          }}
        >
          About Us
        </h1>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#198754" : "#DCF2F1",
                color: props.mode === "dark" ? "white" : "black",
              }}
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show "
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
              }}
            >
              Welcome to our website, your go-to destination for all your needs,
              and the best part? It's completely free! We believe that access to
              valuable resources and services should never come at a cost, which
              is why our platform is designed to provide an exceptional user
              experience without any charges. Whether you're searching for
              information, seeking entertainment, or looking to connect with
              like-minded individuals, our website offers a wide array of
              features and tools to cater to your interests. Discover a world of
              possibilities and enjoy the freedom to explore, learn, and engage
              without worrying about subscription fees or hidden charges. Join
              our community today and experience the true essence of a free
              online platform.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#198754" : "#DCF2F1",
                color: props.mode === "dark" ? "white" : "black",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              An Easy Way To Change Uppercase to Lowercase And Title
              Capitalization and many more.
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
              }}
            >
              Have you ever typed out a document, made a few capitalization
              mistakes and wished you won't have to waste much time editing? It
              happens a lot, and if you are using a typical word processing
              tool, you will have your mistakes autocorrected as you type, but
              those kinds of software only correct grammatical errors. If you
              have to capitalize on a whole portion, you will need to do it
              manually. And that takes time. However, with an online text
              transforming tool like ours, you can easily transform the case of
              your texts. All you have to do is copy and paste your text, then
              select the case you want to transform it to. The Change Uppercase
              to Lowercase Tool is one of several SEO tools available on our
              site SmallSEOTools.com. It is an online text Converter that can
              receive both upper cases and lower case letters as input and do a
              text transform on them into desired cases.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#198754" : "#DCF2F1",
                color: props.mode === "dark" ? "white" : "black",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Establishment of Textplays website.
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
              }}
            >
              This website comes in may 2023 when I am learning Reactjs from a
              youtuber name codewithharry. I am currently learning reactJS and
              after that I will learn backend development in ExpressJS and
              nodeJS. This is my practice website and there are many more
              available on my github account.My end goal is to make a full stack
              MERN website before 2024 and becoming a full stack web developer.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#198754" : "#DCF2F1",
                color: props.mode === "dark" ? "white" : "black",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Browser compatible.
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
              }}
            >
              where compatibility meets convenience! We take pride in creating a
              user-friendly experience that seamlessly integrates with your
              preferred browser. Our website is designed to be fully compatible
              with all major web browsers, ensuring that you can access our
              content and features without any hassle. Whether you're using
              Chrome, Firefox, Safari, or any other popular browser, you can
              enjoy a smooth and optimized browsing experience on our platform.
              Say goodbye to compatibility issues and enjoy the freedom to
              explore our website, hassle-free, regardless of your browser
              choice. Start exploring today and unlock a world of possibilities
              right at your fingertips!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
