import './App.css';
import Practice from './Practice/Practice';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const api = `https://countries.trevorblades.com/`;

const client = new ApolloClient({
  uri: api,
  cache: new InMemoryCache(),
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  },
  credentials: "omit",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Practice/>
    </ApolloProvider>


  );
}

export default App;
