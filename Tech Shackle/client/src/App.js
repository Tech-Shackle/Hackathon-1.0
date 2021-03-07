import React from 'react';
import './App.css';
import { MainCarousel } from './components/Home/MainCarousel';
import Navb from './components/Home/Navbar';
import News from './components/Home/News';
import Footer from './components/Home/Footer';
import Navbara from './components/Academics/Navbara';
import Login from './components/Academics/Login';
import Footera from './components/Academics/Footera';
import { Route, Switch } from 'react-router';
import Admin from './admin/Admin';

const MainSite = ({ match }) => {
  console.log(match);
  console.log('in main site');
  return (
    <>
      <Navb></Navb>

      <Switch>
        <Route
          path={match.url}
          exact
          render={() => (
            <>
              <MainCarousel></MainCarousel>
              <News></News>
            </>
          )}
        />
        <Route
          render={() => (
            <>
              <div>404 page</div>
            </>
          )}
        />
      </Switch>
      <Footer />
    </>
  );
};

const AdminSite = ({ match }) => {
  console.log(match);
  console.log('in admin site');
  return (
    <Switch>
      <Route path={match.url} exact={true} component={Admin} />
      <Route
        path={`${match.url}/about`}
        exact={true}
        component={() => <div>Hello, in about</div>}
      />
      <Route
        render={() => (
          <>
            <div>404 page</div>
          </>
        )}
      />
    </Switch>
  );
};

function App() {
  return (
    <div className='Appl'>
      <Switch>
        <Route exact path='/' component={MainSite} />
        <Route exact path='/admin' component={AdminSite} />
        <Route
          render={() => (
            <>
              <div>404 page</div>
            </>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
