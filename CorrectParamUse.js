The solution is to restructure the component tree so that the component using `useParams` is a direct child of a route element.

```javascript
// Correct usage
function MyComponent() {
  const params = useParams();
  console.log(params); // Now contains correct params
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent/>}/>
    </Routes>
  );
}
```

By moving `MyComponent` to be a direct child of the route element, it inherits the necessary route context and `useParams` works as expected.  Alternatively, you might need to pass the parameters down as props from the route component to the child components.  This approach is useful for components which do not need to be rendered directly by a route element.   For example:

```javascript
// Using props instead
function ParentComponent(){
  const params = useParams();
  return (
    <div>
      <MyComponent params={params}/>
    </div>
  );
}

function MyComponent({params}) {
  console.log(params);
  return <div>...</div>;
}
```