import logo from './logo.svg';
import './App.css';
import Header from './Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import Protected from './Protected'
import ProductList from './ProductList'
import SingleProduct from './SingleProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/Login">
          <Login />
        </Route>

        <Route path="/Register">
          <Register />
        </Route>


        <Route path="/AddProduct">
          <Protected Cmp={AddProduct}/>
          {/* <AddProduct /> */}
        </Route>

        <Route path="/UpdateProduct/:id">
          <Protected Cmp={UpdateProduct}/>
        </Route>

        <Route path="/SingleProduct/:id">
          <Protected Cmp={SingleProduct}/>
        </Route>

          <Route path="/">
          <Protected Cmp={ProductList}/>
          {/* <Register /> */}
        </Route>

        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
