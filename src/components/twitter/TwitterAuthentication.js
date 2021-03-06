import styled from "styled-components";
import { auth, googleProvider, twitterProvider } from "../../firebase";

const TwitterAuthentication = () => {
  const onHandleSignIn = async (e) => {
    e.preventDefault();
    await auth
      .signInWithPopup(twitterProvider)
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
      <h2>Twitter Authentication</h2>
      <img src="https://cdn.icon-icons.com/icons2/729/PNG/512/twitter_icon-icons.com_62751.png" className="image" alt="" />
      <form>
        <button className="btn btn-info btn-md m-1" onClick={onHandleSignIn}>
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

export default TwitterAuthentication;

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
