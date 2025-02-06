In React Router Dom v6, using the `useParams` hook inside a component that's *not* directly a child of a route element leads to unexpected behavior.  The `params` object will be empty or contain outdated values. This often manifests as components failing to render the correct data or displaying incorrect routes.  For example:

```javascript
// Incorrect usage
function MyComponent() {
  const params = useParams();
  console.log(params); // Often empty or incorrect
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<ParentComponent/>}/>
    </Routes>
  );
}

function ParentComponent(){
  return (
    <div>
      <MyComponent/>
    </div>
  );
}
```

This is because `useParams` relies on the component's route context, which is not available to `MyComponent` in this structure.