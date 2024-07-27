import React, { useState } from "react";
import clipboardCopy from "clipboard-copy";

export default function Textform(props) {
  const [text, setText] = useState("");
  let originaltext;
  const upperCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Text has been uppercased", "success");
  };

  const Clear = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("console has been cleared", "success");
  };

  var remove = () => {
    originaltext = text;
    let newtext = text.split(" ").join("");
    setText(newtext);
    props.showAlert("Spaces has been removed", "success");
    console.log(originaltext);
  };

  const original = () => {
    console.log(originaltext);
  };

  const handleCopyClick = async () => {
    await clipboardCopy(text);
    console.log("Text copied to clipboard!");
    console.log(text);
  };

  const capitalize = () => {
    let newtext = text.split(" ");
    let b = [];
    let a = "";
    for (let i = 0; i < newtext.length; i++) {
      let ntext = newtext[i];
      for (let j = 0; j < ntext.length; j++) {
        let rtext = ntext.toLowerCase();
        a = rtext[0].toUpperCase() + rtext.slice(1);
      }
      b.push(a);
    }
    let c = b.join(" ");
    setText(c);
    props.showAlert("Text has been capitalized", "success");
  };

  const inverse = () => {
    let s = "";
    for (let i = 0; i < text.length; i++) {
      let n = text.charAt(i);
      if (n === n.toUpperCase()) {
        n = n.toLowerCase();
      } else {
        n = n.toUpperCase();
      }
      s += n;
    }
    setText(s);
    props.showAlert("Inverse has been done", "success");
  };

  const lowerCase = () => {
    setText(text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Text has been lowercased", "success");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading} </h1>
        <div>
          <textarea
            className="form-control"
            placeholder="Enter your text here"
            value={text}
            id="my-box"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "#DCF2F1",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnchange}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.dark === "primary" ? "primary" : "success"
          } mx-1 my-1`}
          onClick={upperCase}
        >
          Convert to UpperCase
        </button>
        <button
          className={`btn btn-${
            props.dark === "primary" ? "primary" : "success"
          } mx-1 my-1`}
          onClick={lowerCase}
        >
          Convert to LowerCase
        </button>
        <button
          className={`btn btn-${
            props.dark === "primary" ? "primary" : "success"
          } mx-1 my-1`}
          onClick={Clear}
        >
          Clear text
        </button>
        <button
          className={`btn btn-${
            props.dark === "primary" ? "primary" : "success"
          } mx-1 my-1`}
          onClick={capitalize}
        >
          Capitalize
        </button>
        <button
          className={`btn btn-${
            props.dark === "primary" ? "primary" : "success"
          } mx-1 my-1`}
          onClick={inverse}
        >
          Inverse case
        </button>
        <button
          className={`btn btn-${
            props.dark === "primary" ? "primary" : "success"
          } mx-1 my-1`}
          onClick={handleCopyClick}
        >
          Copy
        </button>
        <button
          className={`btn btn-${
            props.dark === "primary" ? "primary" : "success"
          } mx-1 my-1`}
          onClick={remove}
        >
          Remove space
        </button>
        <div className="container">
          <h2>Your summary</h2>
          <p>
            {text.length === 0 ? "0" : text.split(" ").length} words and{" "}
            {text.length} charecters
          </p>
          <p>
            {0.008 * (text.length === 0 ? "0" : text.split(" ").length)} minuets
            to read
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something to review"}</p>
        </div>
      </div>
    </>
  );
}
