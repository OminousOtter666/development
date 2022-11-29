import React from "react";

export default function Item(props) {
  const item = props.itemData;
  const [selected, setSelected] = React.useState(false);
  const click = () => {
    setSelected(!selected);
    props.selectItem(item);
  };
  return (
    <div
      onClick={click}
      className={
        props.selected.includes(item)
          ? "item-container item-container-selected"
          : "item-container"
      }
    >
      {/* <div
        className={
          props.selected.includes(item)
            ? "item-select item-selected"
            : "item-select"
        }
      ></div> */}
      <div className="image-container">
        <img src={item.img} className="item-image" alt={item.id}></img>
      </div>
      <div className="item-name">{item.name}</div>
      <div className="item-properties">
        <div>{item.course}</div>
        <div className={`priority-${item.priority} priority`}>{item.priority}</div>
        <div>{item.est_time} Hours</div>
      </div>
    </div>
  );
}
