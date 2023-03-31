import AppMenu from "./AppMenu/AppMenu";

// sfc
const App = () => {
  return (
    <>
      <AppMenu />
      <div className="container">Hello react</div>
    </>
  );
}

const x = 100, y = 200;

// named exports
export {
  x,
  y
};

// a file can have only 1 default export
export default App;