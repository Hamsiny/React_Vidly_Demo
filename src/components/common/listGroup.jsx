import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty } = props;
  return (
    <React.Fragment>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item[textProperty]} className="list-group-item">
            {item[valueProperty]}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ListGroup;
