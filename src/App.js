import styled from "styled-components";
import EmailAndPassword from "./components/emailPassword/EmailAndPassword";
import GoogleAuthentication from "./components/google/GoogleAuthentication";

const App = () => {
  return (
    <Container>
      <h1>Firebase Authentications</h1>
      <EmailAndPassword />
      <GoogleAuthentication />
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 1pc;
  > h1 {
    text-align: center;
    margin: 1pc;
  }
`;
