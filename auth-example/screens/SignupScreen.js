import { useState, useContext } from "react";

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from "../components/ui/LoadingOverlay";

import { createUser } from '../util/auth';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {

    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);

    async function authHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            const token = await createUser(email, password);
            authCtx.authenticate(token);
        } catch (error) {
            alert("Creating user failed! Please check your credentials!");
            return;
        }
        setIsAuthenticating(false);
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Creating user..." />;
    }

    return <AuthContent onAuthenticate={authHandler} />;
}

export default SignupScreen;
