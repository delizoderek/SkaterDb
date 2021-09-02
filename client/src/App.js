import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import SearchSkater from "./pages/SearchSkater";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import WrongPage from "./pages/WrongPage";
import BrandPage from "./pages/BrandPage";
import VideoPage from "./pages/VideoPage";
// import ContributePage from "./pages/ContributePage";

import ContributePage from "./pages/ContributePage";
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar />
        <Switch>
          <Route exact path="/search" component={SearchSkater}/>
          <Route exact path="/brand" component={BrandPage} />
          <Route exact path="/profile" component={ProfilePage} />
          {/*<Route exact path="/contribute" component={ContributePage} />*/}
          <Route exact path="/videos" component={VideoPage} />
          <Route exact path="/contribute" component={ContributePage}/>
          <Route exact path ="/404" component={WrongPage}/>
          <Route exact path="/" component={Home}/>
          <Redirect to="/404"  />
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
