import { useState } from "react";
import styled from "styled-components";
import { auth } from "../../firebase";

const EmailAndPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        alert("Login Successful");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        alert(`Welcome ${user.user.email}`);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <h2>Email & Password</h2>
      <form>
        <section>
          <input
            className="form-control form-control-lg m-2 "
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-control form-control-lg m-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <section>
          <button className="btn btn-danger btn-md m-1" onClick={signUp}>
            SignUp
          </button>
          <button className="btn btn-primary btn-md m-1" onClick={login}>
            Login
          </button>
        </section>
      </form>
    </Container>
  );
};

export default EmailAndPassword;

const Container = styled.div`
  padding: 2pc;
  margin: 1pc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > form {
    margin: 1pc;
    > section {
      padding: 0.5pc;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        width: 100%;
      }
    }
  }
`;
