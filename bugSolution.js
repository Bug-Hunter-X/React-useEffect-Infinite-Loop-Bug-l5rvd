```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct approach: No need for count in dependency array if only logging
    // This effect runs only once after the initial render
    console.log('Component mounted'); 
  }, []);
  
  useEffect(() => {
    //Use count value for side effects such as API calls if required
  },[count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```