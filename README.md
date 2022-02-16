# React hook practice

implemented simple interfaces using react hooks

## What I learned

uses of hooks, and simple routing process in Single Page Application

### useEffect

used two `useEffect` for onchange event in input field  
firstly `term` is changed by onchange event  
secondly `debouncedTerm` is changed by changed `term` after time period

```js
useEffect(() => {
  const timerId = setTimeout(() => {
    setDebouncedTerm(term);
  }, 1000);

  return () => {
    clearTimeout(timerId);
  };
}, [term]);

useEffect(() => {
  const search = async () => {
    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: debouncedTerm,
      },
    });

    setResults(data.query.search);
  };
  if (debouncedTerm) {
    search();
  }
}, [debouncedTerm]);
```

### routing with History API

used `history` API for routing process in SPA  
`history.pushState` allows users to access the url without page refreshing  
`popstate` event is triggered when the active history changes(browser back button, history.back())  
`PopStateEvent` is dispatched to the nav button for routing

```js
// onClick function in Link component
const onClick = (event) => {
  if (event.metaKey || event.ctrlKey) {
    return;
  }

  event.preventDefault();
  window.history.pushState({}, "", href);

  const navEvent = new PopStateEvent("popstate");
  window.dispatchEvent(navEvent);
};

// useEffect in Route component
useEffect(() => {
  const onLocationChange = () => {
    setCurretPath(window.location.pathname);
  };

  window.addEventListener("popstate", onLocationChange);

  return () => {
    window.removeEventListener("popstate", onLocationChange);
  };
}, []);
```
