import { Button } from '@mui/material';
import React from 'react';
import "./Login.css";
import {provider, auth} from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

     
    function Login() {
        const [state, dispatch] = useStateValue();

        const signIn = () => {
            signInWithPopup(auth, provider)
                .then ((result) => {
                    dispatch({
                        type: actionTypes.SET_USER,
                        user: result.user,

                    })

                    console.log(result);
                })
                .catch((error) => alert(error.message))
            }
        
            
        

  return (
    <div className='login'>
      <div className='login__logo'>
        <img 
            src='data:image/png;base64,
            iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAA
            AAJbSJIAAAAflBMVEUYd/L///8AcvIAbPEXePI
            AcPKkw/nx9/4AbvEAa/GSt/iMs/cKdPIJc/Lt9
            P5ZlvXC1vtfmfVtofbZ5vyWuvhQkfSpxvm60fq
            vyfnd6f3T4vzn8P32+v+bvfhJjfRlnPUnfvN9qv
            bK3Ps6hvMugfN5qPYAZ/Hi7f20zfqEr/f2EiWvAAAKz0lEQVR4nN3d6WKqvBYGYCBGQYNjHepQqcOxvf8bPGAdUAgkWXkJ316/9v7RwlMyj57fTAwvs8N4+bPK4mc5Pswuw20zT/bAv/8y7v5Ojh3OGAv5M8L0/7xznPx2x5/gN8AJh4fd9JS5AiG88hAiyKyn/e4whL0HRvi5miapLZbR3qBx6kymC8
            zXtC8c/kw9xmMlWz5izrzpamP9fSwLPz+OJrqc8tif2X0lm8LPQcK4WsKUh+AsGdhEWhMOdyc67xYBO+2sJVdLwvHEGu8a6Zccje28mg3hdtdhNnk3JPN2PQtvRxduvjm3zvsLzs8X58LPfRSAfFkE0Z5a6tCEnxNmXjWoRcxGNCNFuNlHaF8WIppQ0qq5cPsN/373iNnZvMwxFnY5Mv+9RxDuGhYeElT
            5KQueHBoUbqeR/fqvLkS0N0qqJsJVown0GXG4akTYGzEnvizYXL+nrC1chk2VoGURsx+0cOruA/4F20OFs46bHJiPwFvjhF1AF0I/RKRVN+oI965T6D3YBCIcnpqu5OURJOpDAMrCddCGFHoPwZVbOKrCn8g16i0i1dpfUdhvGzAlDmwKz20pY/LBpvaEk/aUMfngI1vCeTuBKfHLjvCrrcC01jjaELYY
            qESsFbYaqEKsE7Y2D94jqMuLNcKWlqL5qCtRq4Xn9gNTYnW9WCnst7GiLwarbN1UCVvXFpVFtDATrv8rwJRY0dOQC4fuByzUg8v7i3LhqU39wboQib5w31QxKoLbGqn7sqkgli4xkkcgHdiQCbtNFKMxZywZ
            fX+slofDbDZbHw7jn+7ud5otE4uy1VSKS46yYLLhKYlwhgdy5u27a+nyveFsvBjsj4Kpju9FkkFGibADzoQxS/pqw56b9V71Xcr/WuXCKbYc5fysMarbV3wZSVYsFS6haZSHH1rTZAPVPzcrHZwqE/ZCoC8O+zo8HaHHymamyoQj4OwSG2kv51IXirmacIVLoyLUnhzTEXqspIFaFG5xVT0/mqzH0xB6
            YTGHF4W4cjTUnfrTF8bF8rQgPMB6FOzXCKgl9KLCisaCMEHV9dX9VFvCYhP8XdhF5cLQ8AtqCj3+US2EFTPcLA/qCwuFzZvwG1TMCIXBaUvC4G1g6lW4QVWFIWHZtqbQY6/7Nl6Fe1BrRn8VDEEYvw6gvgg/QTVFaWsKJvSilyW3L8IJ6hOSthZoC1//oHnhJygXctOa0FDosfxHzAtRuZDTdhrqC0U+J
            +aEG1Au5LodQrLQi3
            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
            u+gGWNiC+D9eSquO5uzvagAAAABJRU5ErkJggg=='
            
            alt=''
            />
            <img 
                src='data:image/png;base64,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'
                alt=''
            />
      </div>
      <Button 
      type='submit' 
      onClick={signIn}
      >
        Sign In
      </Button>
    </div>
  )
}

export default Login
