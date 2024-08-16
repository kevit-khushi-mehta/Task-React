
import Input from "./Input";
import {isEmail, isNotEmpty, hasMinLength} from '../util/validation'
import { useInput } from "./useInput";


export default function Login(){

const {value: emailValue, handleInputBlur: handleEmailChange, handleInputChange:handleEmailBlur, hasError: emailHasError} = useInput('', (value)=>isEmail(value) && isNotEmpty(value));
const {value:passwordValue, handleInputChange: handlePasswordChange, handleInputBlur: handlePasswordBlur, hasError: passwordHasError} = useInput('', (value)=> hasMinLength(value, 8));

const passwordIsInvalid = didEdit.password && hasMinLength(enteredValues.password, 8);

function handleSubmit(event){
    event.preventDefault();


    if(emailHasError || passwordHasError){
        return;
    }


    console.log(emailValue, passwordValue);


    // setEnteredValues({
    //     email: '',
    //     password: '',

    // });
}


  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
        label='Email' id='email' type='email' name='email' 
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        value={emailValue}
        error={emailHasError && 'Kindly enter a valid Email!'}
        >
        </Input>
        
        <Input 
        label='Password' id='password' type='password' name='password' 
        onBlur={handlePasswordBlur}
        onChange={handlePasswordChange}
        value={passwordValue}
        error={passwordHasError && 'Kindly enter a valid Password!'}
        >
        </Input>

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button" >Login</button> 
      </p>
    </form>
  );
}