// App.tsx
import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import google from "./assets/google.png";
import apple from "./assets/apple.png";
import close from "./assets/close-icon-39.png";

const App = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image source={close} style={styles.iconSmall} />
        <Text style={styles.title}>Entrar</Text>
        <View style={styles.headerSpacer} />
      </View>


      <TouchableOpacity activeOpacity={0.7} style={styles.socialButton}>
        <Image source={google} style={styles.socialIcon} />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>


      <TouchableOpacity activeOpacity={0.7}style={styles.socialButton}>
        <Image source={apple} style={styles.socialIcon} />
        <Text style={styles.socialText}>Continue with Apple</Text>
      </TouchableOpacity>


      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>OU</Text>
        <View style={styles.separatorLine} />
      </View>


      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira seu email"
        placeholderTextColor="#9CA3AF"
      />


      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira sua senha"
        secureTextEntry
        placeholderTextColor="#9CA3AF"
      />


      <View style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </View>


      <Text style={styles.footerText}>
        O login do Facebook não está mais disponível.{" "}
        <Text style={styles.footerLink}>Recupere sua conta.</Text>
      </Text>

      <Text style={styles.footerLinkCenter}>Esqueceu a senha?</Text>
      <Text style={styles.footerLinkCenter}>Usar Chave do iCloud</Text>
    </View>
  );
};

export default App;
