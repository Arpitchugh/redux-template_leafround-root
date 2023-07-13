## Getting Started with Create React App and Redux

This documentation provides an overview of a React-Redux application created using Create React App. It explains the project structure, component creation workflow, and store creation workflow.

### Prerequisites

Before you begin, make sure you have `Node.js `and `npm` (Node Package Manager) installed on your machine.

### Getting Started

This project was bootstrapped with `Create React App`, which is a popular tool for setting up a React application with a predefined folder structure and build configuration.

### To start the application, follow these steps:

1. Clone the repository or download the project files.

2. open a terminal or command prompt and navigate to the project directory.

3. Run the following command to install the project dependencies: `npm install`
4. Once the installation is complete, start the development server by running the following command:
   `npm start`
5. The application will now be running in development mode. Open http://localhost:3000 in your browser to view it.

## Component Creation Workflow

The component creation workflow in this application follows a specific folder structure to maintain separation of concerns. Here are the steps to create a new component:

1. Start with a component name, for example, `MyComponent`.

2. Create a folder with the same name as the component under the `src/pages` directory, e.g. `src/pages/{ComponentName}`.

      - All the code related to the component will be imported inside this folder and here we can bring everything together.

3. Create a module for the component under the `src/module` directory, e.g. `src/module/{ComponentName}`.

4. Each component will have an `index.jsx` file, which serves as the entry point for the component. Additionally, create four folders: `action`, `components`, `container`, and `reducer` inside the `module/componentName` folder.

5. In the `reducer` folder, create a functional slice to store the state specific to that component. This ensures separation of concerns.

6. In the `action` folder, create actions for the component. This will be the only place where the `useDispatch` hook is used.

7. In the `container` folder, create a container component for the component. For example, for `users`, create a `UsersContainer` component, which acts as a wrapper for the component.

8. In the components folder, create the UI components for the component. This folder will contain code related to the visual representation of the component.

9. Finally, use the component in the desired location, such as src/pages/{ComponentName}.

Use the component in the App.jsx file or any other relevant file where you want to include it.

### Store Creation Workflow

The application has two types of stores: `Global store` and `Functional store`, Make sure in every slice we have `error` and `loading` in the state.

#### Global Store

The global store holds the global state of the application, such as user state and theme state. It is located in the src/global folder. Use this store to store and manage the global state of the application.
e.g.

```js
// We will have all the global users here

import { createSlice } from '@reduxjs/toolkit';

const SliceName = createSlice({
	name: 'Name',
	initialState: {
		// initial state
	},
	reducers: {
		// reducers will go here
	},
});
```

#### Functional Store

The functional store holds the state specific to a particular component, such as users state and posts state. It is located in the src/module/reducer folder. Use this store to store and manage the functional state of the application.

To bring these stores together, navigate to the src/store.tsx file. This file exports the combined store, which can be used throughout the application.

### Async dispatch calls

For the complete reference and working refer to module/posts/action/index.js

```js
export const getPosts = async () => {
	// call the api and dispatch the actions
	console.log('getPosts');
	dispatch(setPostLLoadingTrue());
	const posts = await axios
		.get('https://jsonplaceholder.typicode.com/posts')
		.then(res => {
			return res.data;
		});

	if (posts.length > 0) {
		dispatch(setPostLLoadingFalse());
		dispatch(setPostLLoaded(posts));
	}
};
```
