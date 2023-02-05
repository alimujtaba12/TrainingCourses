import ErrorBoundary from "./ErrorBoundary";
import Home from "./Home/home";

function App() {
  return (
    <ErrorBoundary>
      <Home></Home>
    </ErrorBoundary>
  );
}

export default App;
