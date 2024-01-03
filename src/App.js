import React, { useEffect, useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext';
import Loading from './Components/loading/Loading';

const Home = lazy(() => import('./Pages/Home'));
const Signup = lazy(() => import('./Pages/Signup'));
const Login = lazy(() => import('./Pages/Login'));
const Create = lazy(() => import('./Pages/Create'));
const ViewPost = lazy(() => import('./Pages/ViewPost'));

function App() {
  const { user, setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [firebase, setUser]);

  return (
    <div>
      <Post>
                  <Router>
            <Suspense fallback={<Loading />}>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/create" component={Create} />
              <Route path="/view" component={ViewPost} />
            </Suspense>
          </Router>
              </Post>
    </div>
  );
}

export default App;
