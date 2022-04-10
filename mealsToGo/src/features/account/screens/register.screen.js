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

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
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
        <Spacer size="large">
          <AuthInput
            label="Confirm Password"
            value={confirmPassword}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(text) => setConfirmPassword(text)}
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
              icon="mail"
              mode="contained"
              onPress={() => onRegister(email, password, confirmPassword)}
            >
              Register
            </AuthButton>
          </Spacer>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </AccountContainer>
    </AccountBackground>
  );
}

export default Register;
