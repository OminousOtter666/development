# Development

### Link to Deployed Website
https://ominousotter666.github.io/development/

### Goal and Value of the Application
The goal of the application is to allow a user to determine what tasks they should work on for the day. For me, I struggle to prioritize which items on my to-do list I should work on first. This application allows users to filter and sort tasks based on a few key metrics and add them to the day's planner which will tell them a rough hours estimation. 

### Usability Principles Considered
Learnability is the main usability principle considered in this project. Learnability is provided through the hover states of clickable items. This indicates to the user what components can be interacted with. There are also elements of heirarchy with the item list and the planner exising at similar levels of heirarchy, but the inforamtion conained on each item card is subordinate to the other inforamtion. 

### Organization of Components
I have organized the app into two main components: the item list, and the planner. The item list contains all of the logic for filtering, sorting, and displaying each item (which is its own component).

### How Data is Passed Down Through Components
The data are loaded into app.js and passed into item list, along with the 'selected' array and hook. This is to allow the child component to change which items are selected. The item list component sends information about which to-do items are selected back into app to pass into the planner component. The planner component displays the name of the selected items and aggregates the total hours of those selected.

### How the User Triggers State Changes
The user triggers state changes by selecting items and sorting/filtering. Each button corresponds to some function which alters some data. The sorting and filtering alters the items to display which is stored in the item list component's state. When an item is selected/unselected, this triggers an update to the 'selected' array which is stored in app.js's state. 
