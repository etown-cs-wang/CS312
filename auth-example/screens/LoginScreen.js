import { useState, useContext } from "react";
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from '../util/auth';

import { AuthContext } from '../store/auth-context';

function LoginScreen() {

    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);

    async function loginHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            const token = await loginUser(email, password);
            authCtx.authenticate(token);
        } catch (error) {
            alert("Login failed! Please check your credentials!");
            return;
        }
        setIsAuthenticating(false);
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Logging in user..." />;
    }

    return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
