import styled from "styled-components";

const EmailAndPassword = () => {
  const login = (e) => {
    e.preventDefault();
  };

  const signUp = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h2>Email & Password</h2>
      <form>
        <section>
          <input className="form-control form-control-lg m-2 " type="text" placeholder="Email" />
          <input
            className="form-control form-control-lg m-2"
            type="password"
            placeholder="Password"
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
