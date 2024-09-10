# WORLD CLOCK PROJECT - Requirement Analysis

## 1. System Design

### High-Level Design

The app will only have

- **Frontend**: Handles the UI and front end of the app. This will let the user interact with the World Clock application to create, edit, and delete clocks as necessary and view information related to their own time

### UI Screens

- **Clocks list:** This will show the user all the clocks they have created.
- **Clock creation/editing:** This will allow the user to select the necessary values to create or edit a clock
- **Individual clock:** Each clock will have their own view with details and tasks listed under that specific clock
- **Task creation:** This will allow users to create tasks for each clock
- **Task view:** A view of all the tasks created under each clock.

## 2. Technical Specification

### TechStack

This app will only use React for the whole app as it will be front end only.

## 3. Task breakdown and planning

### Tasks

- Design the clock creation UI and the functionality. It will contain -
  - A drop-down with options for selecting UTC, GMT, PST, and EST time zones
  - Two buttons for selecting automatic time or manual time creation
  - For manual time creation user will be given two input boxes one for the title of the clock and one for the time of the clock and a button for creating the clock
- Create functionality to create a base clock for the user’s own time and it will be created when the app is first started and can not be deleted
- Design a task creation UI -
  - A text box for the title of the task - A text box for the description of the task
  - The “Create” button for creating the task
- Design individual clock UI -
  - Show the title of the clock
  - Show the time of the current clock
  - A delete Clock button
  - An edit clock button
  - Show tasks listed under the clock with
    - Task title - description - status
    - A delete button for deleting tasks
    - A checkbox to indicate a task is complete
    - A create task button
- Create the list of clocks view with tasks listed with functionality -
  - Selecting each clock to view details of that clock
  - Delete button for all clocks (Except base clock)
  - A checkbox to indicate a task is complete

## 4. Data Design

### Time - DateTime Object

This will be the main time object that will help us determine the current time . All time in the system will be calculated based on the difference from this time`Time`

### Clock - Objet

For The default/user's main `Clock Object` it will have id of 1 which will not be deletable. All clocks in the system will contain the following attributes

- `clockId`
- `timezone`
- `taskListId`

### TaskList - Object

All tasks in the system will contain the following attributes

- `taskListId`
- `taskId`
- `taskTitle`
- `taskDescription`
- `taskStatus`
  - `Complete`
  - `Pending`

All the requirements related documents for this project in doc format can be found at this [link](https://docs.google.com/document/d/13EkccvcjlMPNwfQ7cuasyOkzElMjvKSBJaOM5UwUvgY/edit?usp=sharing)
