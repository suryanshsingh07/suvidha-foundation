import React from 'react';
import styled from 'styled-components';

const Register = () => {
  return (
    <StyledWrapper>
      <form className="form">
        
        <h2 className="title">Register</h2>

        <span className="input-span">
          <label className="label">Full Name</label>
          <input type="text" placeholder="Enter your name" />
        </span>

        <span className="input-span">
          <label className="label">Email</label>
          <input type="email" placeholder="Enter your email" />
        </span>

        <span className="input-span">
          <label className="label">Password</label>
          <input type="password" placeholder="Enter password" />
        </span>

        {/* Role Selection */}
        <span className="input-span">
          <label className="label">Select Role</label>
          <select className="select">
            <option>Donor</option>
            <option>Internship</option>
            <option>Employee</option>
          </select>
        </span>

        <input className="submit" type="submit" value="Register" />
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .form {
    --bg-light: #efefef;
    --bg-dark: #707070;
    --clr: #58bc82;
    --clr-alpha: #9c9c9c60;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 320px;

    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }

  .title {
    color: var(--clr);
    font-weight: 700;
  }

  .input-span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input, .select {
    border-radius: 0.5rem;
    padding: 0.8rem;
    width: 100%;
    border: none;
    background-color: var(--clr-alpha);
    outline: 2px solid var(--bg-dark);
  }

  input:focus, .select:focus {
    outline: 2px solid var(--clr);
  }

  .label {
    align-self: flex-start;
    color: var(--clr);
    font-weight: 600;
  }

  .submit {
    border-radius: 3rem;
    background-color: var(--bg-dark);
    color: var(--bg-light);
    cursor: pointer;
    transition: 0.3s;
    font-weight: 600;
  }

  .submit:hover {
    background-color: var(--clr);
    color: var(--bg-dark);
  }

  .span {
    font-size: 0.9rem;
  }

  .span a {
    color: var(--clr);
  }
`;

export default Register;