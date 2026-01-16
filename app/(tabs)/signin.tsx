import { ThemedView } from '@/components/themed-view';
import React, { useState } from 'react';

import { Text, TextInput, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";


export default function TabTwoScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const onLogin = async() => {
        if (!email || !password){
            alert("Fill out information ")
            return
        }

        setLoading(true)

        console.log("Logging in with: ", email, password)
    }
    
    return (
        
            <ThemedView style={styles.container}>
                <Text style={styles.title}>
                    Sign In
                </Text>

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    style={styles.input}
                />

                <Pressable style={styles.button} onPress={onLogin} disabled={loading}>
                    <Text style={styles.buttonText}>
                        {loading ? "Signing in..." : "Sign in"}
                    </Text>
                </Pressable>

                <Pressable onPress={() => router.push("/(tabs)/signup")}>
                    <Text style={styles.link}>Create an Account</Text>
                </Pressable>
            </ThemedView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  link: {
    marginTop: 16,
    textAlign: "center",
    color: "#007AFF",
  },
});

