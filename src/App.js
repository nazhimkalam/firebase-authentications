import styled from "styled-components";
import AppleAuthentication from "./components/apple/AppleAuthentication";
import EmailAndPassword from "./components/emailPassword/EmailAndPassword";
import FacebookAuthentication from "./components/facebook/FacebookAuthentication";
import GithubAuthentication from "./components/github/GithubAuthentication";
import GoogleAuthentication from "./components/google/GoogleAuthentication";
import MicrosoftAuthentication from "./components/microsoft/MicrosoftAuthentication";
import TwitterAuthentication from "./components/twitter/TwitterAuthentication";
import YahooAuthentication from "./components/yahoo/YahooAuthentication";

const App = () => {
  return (
    <Container>
      <h1>Firebase Authentications</h1>
      <EmailAndPassword />
      <GoogleAuthentication />
      <FacebookAuthentication />
      <GithubAuthentication />
      <YahooAuthentication />
      <TwitterAuthentication />
      <MicrosoftAuthentication />
      <AppleAuthentication />
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
