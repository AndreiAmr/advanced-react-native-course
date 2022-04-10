import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/Spacer";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/Typography";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContiner,
} from "../components/account.styles";
import { ActivityIndicator, Colors } from "react-native-paper";

// import { Container } from './styles';

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>

        <Spacer>
          <ErrorContiner>
            <Text variant="error">{error}</Text>
          </ErrorContiner>
        </Spacer>
        {!isLoading ? (
          <Spacer size="large">
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          </Spacer>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </AccountContainer>
    </AccountBackground>
  );
}

export default LoginScreen;
