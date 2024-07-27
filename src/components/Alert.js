import React from "react";

const Alert = (props) => {
  const capitalize = (a) => {
    const lower = a.toLowerCase();
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show `}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> :{props.alert.message}
      </div>
    )
  );
};
export default Alert;
