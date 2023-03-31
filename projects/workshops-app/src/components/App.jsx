import { Container } from 'react-bootstrap';

import AppMenu from "./AppMenu/AppMenu";

import Home from './pages/Home/Home';
import WorkshopsList from "./pages/WorkshopsList/WorkshopsList";
import WorkshopDetails from "./pages/WorkshopDetails/WorkshopDetails";
import Feedback from "./pages/Feedback/Feedback";

// sfc
const App = () => {
  return (
    <>
      <AppMenu />

      {/* <div className="container"> */}
      <Container>
        <Home />
        <WorkshopsList />
        <WorkshopDetails />
        <Feedback />
      </Container>
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