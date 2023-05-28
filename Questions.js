Shallow comparison failures: When React compares the previous state with the new state to determine whether a re-render is necessary, 
it performs a shallow comparison by default. If the updated state object is the same reference as the previous state object, 
React assumes that the state hasn't changed, even if the properties within the object have been modified. 
As a result, React may skip the re-rendering of your component, leading to 
inconsistencies in the UI.
