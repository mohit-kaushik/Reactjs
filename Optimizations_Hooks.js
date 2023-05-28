# Explanations with examples for each hook and function:

1. `useEffect`:
   - Explanation: `useEffect` is used to handle side effects in functional components. It runs after the component renders. 
     You can use it to perform tasks like fetching data, subscribing to events, or manually modifying the DOM.
   - Example: Suppose you want to fetch data from an API when the component mounts and update the state with the received data:
     
     useEffect(() => {
       const fetchData = async () => {
         const response = await fetch('https://api.example.com/data');
         const data = await response.json();
         setData(data);
       };

       fetchData();
     }, []);
     

2. `useCallback`:
   - Explanation: `useCallback` is used to memoize a function so that it's not re-created on every render. It's useful when you need to 
     pass callbacks to child components. It helps optimize performance by ensuring that child components don't re-render unnecessarily due 
     to new callback references.
   - Example: Suppose you have a button component that needs a click handler callback, and you want to prevent it from re-rendering if other props change:
     
     const handleClick = useCallback(() => {
       console.log('Button clicked!');
     }, []);

     return <Button onClick={handleClick} />;
     

3. `useMemo`:
   - Explanation: `useMemo` is used to memoize the result of a computation, preventing expensive calculations from running on every render. 
     It's helpful when you have computations that depend on certain values and you want to avoid unnecessary recalculations.
   - Example: Suppose you have a component that renders the square of a number, and the calculation is expensive. You can use `useMemo` to 
     memoize the result:
     
     const square = useMemo(() => {
       console.log('Calculating square...');
       return number * number;
     }, [number]);

     return <div>Square: {square}</div>;
     

4. `memo`:
   - Explanation: `memo` is a higher-order component (HOC) that memoizes the rendering of a functional component. 
   It prevents re-renders if the component's props and state remain unchanged, optimizing performance by avoiding unnecessary rendering.
   - Example: Suppose you have a functional component that receives some props, but it only needs to re-render if the `name` prop changes:
     
     const MyComponent = memo(({ name }) => {
       console.log('Component rendered!');
       return <div>Hello, {name}!</div>;
     });

     return <MyComponent name={username} />;
     

5. `useRef`:
   - Explanation: `useRef` is used to create a mutable reference that persists across re-renders. It allows you to store and access mutable 
     values without triggering re-renders. It's commonly used to reference DOM elements or store any mutable value.
   - Example: Suppose you have an input field, and you want to access its value within an event handler without triggering re-renders:
     
     const inputRef = useRef();

     const handleButtonClick = () => {
       console.log(inputRef.current.value);
     };

     return (
       <div>
         <input ref={inputRef} />
         <button onClick={handleButtonClick}>Log Value</button>
       </div>
     );
     


