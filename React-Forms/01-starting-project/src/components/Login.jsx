import { useRef, useState } from "react";
export default function Login() {
  const[emailIsInvalid, setEmailIsInvalid] = useState(false);
  // const[enteredEmail, setEnteredEmail] =  useState('');
  // const[enteredPassword, setEnteredPassword] =  useState('');

  const email = useRef();
  const password = useRef();
  
  function handleSubmit(event){
    event.preventDefault();

   const enteredEmail = email.current.value;
   const enteredPassword = password.current.value;

  //  console.log(enteredEmail, enteredPassword);

  const emailIsValid = enteredEmail.includes('@');

  if(!emailIsValid){
    setEmailIsInvalid(true);
    return;
  }

  setEmailIsInvalid(false);
  console.log('Sending HTTP req...')
  }

  function handleInputChange(identifier, value){
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));

  }

  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event){
  //   setEnteredPassword(event.target.value);
  // }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" 
          ref={email}
         />
         <div className="control-error">{emailIsInvalid && <p>Kindly enter a valid email!</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" 
          ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button" >Login</button> 
      </p>
    </form>
  );
}
