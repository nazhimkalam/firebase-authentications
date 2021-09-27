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
      <div className="title-section">
        <h1>Firebase Authentications</h1>
        <img
          src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"
          className="image"
          alt=""
        />
      </div>
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
  .title-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image {
    object-fit: contain;
    width: 50px;
    margin: 1pc;
  }
`;
