import styled from "styled-components";
import { auth, microsoftProvider } from "../../firebase";

const MicrosoftAuthentication = () => {
  const onHandleSignIn = async (e) => {
    e.preventDefault();
    await auth
      .signInWithPopup(microsoftProvider)
      .then((response) => {
        console.log(response);
        alert(`Welcome ${response.user.displayName}`);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  const onHandleSignOut = async (e) => {
    e.preventDefault();
    await auth
      .signOut()
      .then(() => {
        alert("Signed Out");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <h2>Microsoft Authentication</h2>
      <form>
        <button className="btn btn-warning btn-md m-1" onClick={onHandleSignIn}>
          SignIn
        </button>
        <button
          className="btn btn-secondary btn-md m-1"
          onClick={onHandleSignOut}>
          SignOut
        </button>
      </form>
    </Container>
  );
};

export default MicrosoftAuthentication;

const Container = styled.div`
  padding: 2pc;
  margin: 1pc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h2 {
    margin-bottom: 1pc;
  }
  form {
    width: 40%;
    display: flex;
    button {
      width: 100%;
    }
  }
`;
