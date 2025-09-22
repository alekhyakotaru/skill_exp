// main.js
const { createRoot } = ReactDOM;

// Example CartContext (replace with your real logic later if needed)
const CartContext = React.createContext();
const CartProvider = ({ children }) => {
  return React.createElement(CartContext.Provider, { value: {} }, children);
};

// Example App component (replace with your real App content)
function App() {
  return React.createElement("h1", null, "Hello React 🚀 GitHub Pages is working!");
}

// Render into root
const root = createRoot(document.getElementById("root"));
root.render(
  React.createElement(CartProvider, null,
    React.createElement(App, null)
  )
);
