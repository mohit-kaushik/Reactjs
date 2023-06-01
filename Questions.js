Shallow comparison failures: When React compares the previous state with the new state to determine whether a re-render is necessary, 
it performs a shallow comparison by default. If the updated state object is the same reference as the previous state object, 
React assumes that the state hasn't changed, even if the properties within the object have been modified. 
As a result, React may skip the re-rendering of your component, leading to 
inconsistencies in the UI.

Q. What is advantage of redux over useContext?
Redux is a state management system used for cross-component or app-wide state. While React Context can also manage state, Redux offers some advantages. 
React Context can become complex, especially in large applications, with multiple Context Providers and deeply nested JSX code. Additionally, 
React Context may not perform well for high-frequency state changes. 
These limitations led to the development of Redux, which is a flux-like state management library and addresses these disadvantages.
