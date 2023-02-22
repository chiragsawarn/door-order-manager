import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Carts from './components/Carts';
import ActiveCarts from './components/ActiveCarts';
import NoData from './components/NoData';
import CreateNewOrder from './components/CreateNewOrder';
import ConfigureNewDoor1 from './components/ConfigureNewDoor1';
import ConfigureNewDoor2 from './components/ConfigureNewDoor2';
import ConfigureNewDoor3 from './components/ConfigureNewDoor3';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<NoData message={"Click on carts to get started!"} />} />
        <Route path='/carts' element={<Carts />}>
          <Route index element={<NoData message={"Active carts has some preloaded data you can try searching and sorting on!"} />} />
          <Route path='/carts/active-carts' element={<ActiveCarts />} />
          <Route path='/carts/archived-carts' element={<NoData />} />
        </Route>
        <Route path='/favourites' element={<NoData />} />
        <Route path='/create-new-order' element={<CreateNewOrder />} />
        <Route path='/configure-new-door-1' element={<ConfigureNewDoor1 />} />
        <Route path='/configure-new-door-2' element={<ConfigureNewDoor2 />} />
        <Route path='/configure-new-door-3' element={<ConfigureNewDoor3 />} />
      </Routes>
    </div>
  );
}

export default App;
