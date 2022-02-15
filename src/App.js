import React from "react";
import Header from "./components/Header";
import Route from "./components/Route";

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">Accordion</Route>
      <Route path="/list">Search</Route>
      <Route path="/dropdown">Dropdown</Route>
      <Route path="/translate">Translate</Route>
    </div>
  );
};

export default App;
