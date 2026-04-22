import React from 'react';
import styled from 'styled-components';

const ForgetPassword = () => {
  return (
    <StyledWrapper>
      <form className="form">
        <span className="input-span">
          <label htmlFor="email" className="label">Email</label>
          <input type="email" name="email" id="email" /></span>
        <input className="submit" type="submit" defaultValue="none" />
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* full screen height */

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
    max-width: 300px;
  }

  .form .input-span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form input[type="email"],
  .form input[type="password"] {
    border-radius: 0.5rem;
    padding: 1rem 0.75rem;
    width: 100%;
    border: none;
    background-color: var(--clr-alpha);
    outline: 2px solid var(--bg-dark);
  }

  .form input[type="email"]:focus,
  .form input[type="password"]:focus {
    outline: 2px solid var(--clr);
  }

  .label {
    align-self: flex-start;
    color: var(--clr);
    font-weight: 600;
  }

  .form .submit {
    padding: 1rem 0.75rem;
    width: 100%;
    border-radius: 3rem;
    background-color: var(--bg-dark);
    color: var(--bg-light);
    border: none;
    cursor: pointer;
    transition: all 300ms;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .form .submit:hover {
    background-color: var(--clr);
    color: var(--bg-dark);
  }

  .span {
    color: var(--bg-dark);
  }

  .span a {
    color: var(--clr);
  }
`;
export default ForgetPassword;
