
### useState - 1

- https://codesandbox.io/s/admiring-diffie-9kfgx?file=/src/App.js

```Javascript
export default function App() {
  const [title1, setTitle1] = useState("Homepage, routed prop");
  return (
    <div className="App">
      <C1 title={title1} setTitle={setTitle1} />
    </div>
  )
}
```
```Javascript
export default function C1({ title, setTitle }) {
  setTitle("Prova");
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
```