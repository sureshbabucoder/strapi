import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
// pages and layouts 
import HomePage from './pages/HomePage';
import SiteHeader from './components/SiteHeader';
import ReviewDetails from './pages/ReviewDetails';
import Category from './pages/Category';
// importing apollopackages 
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'

// apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <Router>
        <ApolloProvider client={client}>
          <SiteHeader />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<ReviewDetails/>} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </ApolloProvider>
        
      </Router>
    </>
  );
}

export default App;
