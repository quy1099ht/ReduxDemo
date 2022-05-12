import './App.css';
import ProductContextProvider from './contexts/ProductContext';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Home />
      </ProductContextProvider>
    </div>
  );
}

export default App;
