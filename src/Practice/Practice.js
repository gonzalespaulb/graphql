import { gql, useQuery } from "@apollo/client";
import { Card, Main, Navigation, Next, Prev } from "./styles";

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

const Practice = () => {
  const { loading, error, data } = useQuery(LIST_COUNTRIES);

  if (loading) {
    return <h1>Loading.....</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }

  const renderCountries = () => {
    return data.countries.map((country) => {
      return (
        <Card>
          <h1>{country.code}</h1>
        </Card>
      );
    });
  };

  return (
    <Main>
      <Navigation>
        <Prev />
        <Next />
      </Navigation>
      {renderCountries()}
    </Main>
  );
};

export default Practice;