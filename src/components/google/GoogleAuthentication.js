import styled from "styled-components";
import { auth, provider } from "../../firebase";

const GoogleAuthentication = () => {
  const onHandleSignIn = async (e) => {
    e.preventDefault();
    await auth
      .signInWithPopup(provider)
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
      <h2>Google Authentication</h2>
      <form>
        <button className="btn btn-danger btn-md mt-3" onClick={onHandleSignIn}>
          SignIn
        </button>
        <button
          className="btn btn-secondary btn-md mt-3"
          onClick={onHandleSignOut}>
          SignOut
        </button>
      </form>
    </Container>
  );
};

export default GoogleAuthentication;

const Container = styled.div`
  padding: 2pc;
  margin: 1pc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    width: 20vw;
    button {
      width: 100%;
    }
  }
`;
