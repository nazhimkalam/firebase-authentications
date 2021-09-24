import styled from "styled-components";
import EmailAndPassword from "./components/emailPassword/EmailAndPassword";

const App = () => {
  return (
    <Container>
      <h1>Firebase Authentications</h1>
      <EmailAndPassword />
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 1pc;
  > h1 {
    text-align: center;
  }
`;
