import "./App.css";
import { useState, useEffect } from 'react';
import Food from './Food';
import Training from './Training';

function App() {
const [math, setmath] = useState(() => {
const data = localStorage.getItem("math");
return data ? JSON.parse(data) : [];
});

const [anytime, setanytime] = useState(() => {
const data = localStorage.getItem("anytime");
return data ? JSON.parse(data) : [{ name: '', count: '' }];
});

useEffect(() => {
localStorage.setItem("math", JSON.stringify(math));
}, [math]);

useEffect(() => {
localStorage.setItem("anytime", JSON.stringify(anytime));
}, [anytime]);

return ( <div> <h1>ムキムキ日記</h1>

```
  <Food
    math={math}
    setmath={setmath}
    anytime={anytime}
    setanytime={setanytime}
  />

  <Training
    math={math}
    setmath={setmath}
    anytime={anytime}
    setanytime={setanytime}
  />
</div>


);
}

export default App;
