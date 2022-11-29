import React from "react";
import Item from "./Item";

export default function ItemList(props) {
  const [itemList, setItemList] = React.useState(props.data);
  const selected = props.selected;
  const setSelected = props.setSelected;
  const courses = [...new Set(props.data.map((elt) => elt.course))];
  const priorities = [...new Set(props.data.map((elt) => elt.priority))];
  const selectItem = (elt) => {
    selected.includes(elt)
      ? setSelected(selected.filter((e) => e.id !== elt.id))
      : setSelected([...selected, elt]);
  };

  const [activeCourse, setActiveCourse] = React.useState();
  const [activePriority, setActivePriority] = React.useState();
  const [sortOrder, setSortOrder] = React.useState();

  console.log(sortOrder);
  const resetFilter = () => {
    setActiveCourse(null);
    setActivePriority(null);
    setSortOrder(null);
    setItemList(props.data);
  };

  const filterItems = (course, priority) => {
    let tempList = [...props.data];
    if (course) {
      setActiveCourse(course);
      tempList = tempList.filter((elt) => elt.course === course);
    }
    if (priority) {
      setActivePriority(priority);
      tempList = tempList.filter((elt) => elt.priority === priority);
    }
    setItemList(tempList);
  };

  const filterCourse = (course) => {
    sortList(sortOrder);
    if (course === activeCourse) {
      setActiveCourse(null);
      filterItems(null, activePriority);
    } else {
      filterItems(course, activePriority);
    }
  };

  const filterPriority = (priority) => {
    sortList(sortOrder);
    if (priority === activePriority) {
      setActivePriority(null);
      filterItems(activeCourse, null);
    } else {
      filterItems(activeCourse, priority);
    }
  };

  const sortList = (order) => {
    const metric = "est_time";
    const tempList = [...itemList];
    tempList.sort((a, b) =>
      order ? a[metric] - b[metric] : b[metric] - a[metric]
    );
    if (order === sortOrder) {
      const alphaList = [...itemList];
      alphaList.sort((a, b) => a.name.localeCompare(b.name));
      setItemList(alphaList);
      setSortOrder(null);
    } else {
      setItemList(tempList);
      setSortOrder(order);
    }
  };

  return (
    <div className="item-list-container">
      <div className="filter-container">
        <div className="filter-button" onClick={() => resetFilter()}>
          Reset filters
        </div>
        Filter by course:
        <div className="filter-group">
          {courses.map((course, ind) => {
            return (
              <div
                key={ind}
                className={
                  activeCourse === course
                    ? "filter-button active-button"
                    : "filter-button"
                }
                onClick={() => filterCourse(course)}
              >
                {course}
              </div>
            );
          })}
        </div>
        Filter by priority:
        <div className="filter-group">
          {priorities.map((priority, ind) => {
            return (
              <div
                key={ind}
                className={
                  activePriority === priority
                    ? "filter-button active-button"
                    : "filter-button"
                }
                onClick={() => filterPriority(priority)}
              >
                {priority}
              </div>
            );
          })}
        </div>
        Sort by estimated time:
        <div className="filter-group">
          <div
            className={
              sortOrder === true
                ? "filter-button active-button"
                : "filter-button"
            }
            onClick={() => sortList(true)}
          >
            Increasing
          </div>
          <div className="sort-group">
            <div
              className={
                sortOrder === false
                  ? "filter-button active-button"
                  : "filter-button"
              }
              onClick={() => sortList(false)}
            >
              Decreasing
            </div>
          </div>
        </div>
      </div>
      <div className="itemList-container">
        {itemList.map((elt, ind) => {
          return (
            <Item
              key={ind}
              itemData={elt}
              selected={selected}
              selectItem={selectItem}
            />
          );
        })}
      </div>
    </div>
  );
}
