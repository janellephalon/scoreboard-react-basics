const title = <h1>My First React Element</h1>;
const desc = <p>I just learned how to create a React node and render it into the DOM</p>;

// Reacommended to wrap two or more lines of JSX in parentheses
const header = (
  <header>
    {title}
    {desc}
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);
