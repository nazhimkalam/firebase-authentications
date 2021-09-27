import styled from "styled-components";
import { auth, googleProvider } from "../../firebase";

const GoogleAuthentication = () => {
  const onHandleSignIn = async (e) => {
    e.preventDefault();
    await auth
      .signInWithPopup(googleProvider)
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
      <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png" className="image" alt="" />
      <form>
        <button className="btn btn-danger btn-md m-1" onClick={onHandleSignIn}>
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

export default GoogleAuthentication;

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
  .image {
    object-fit: contain;
    width: 50px;
    margin: 1pc;
  }
`;
