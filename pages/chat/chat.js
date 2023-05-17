import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Configuration, OpenAIApi } from "openai";

const Chat = ({ route }) => {
  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const configuration = new Configuration({
    apiKey: "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",
    organization: "org-KsksXMCjrO4toFrzVZApDaIY",
  });

  const openai = new OpenAIApi(configuration);

  const handleSearch = async () => {
    let qust = { ...route.params.opt, prompt: input };

    try {
      const response = await openai.createCompletion(qust);
      setResult(response.data.choices[0].text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.navbar}>
          <View>
            <Image
              source={{
                uri: "https://static.thenounproject.com/png/658934-200.png",
              }}
              style={{ width: 30, height: 30 }}
            />
          </View>
          <Text style={{ fontWeight: "400", fontSize: 16 }}>Home</Text>
          <Image
            source={require("../../assets/kabakiLogo.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <View style={{ padding: 20 }}>
          <View style={styles.boxWrapper}>
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 10,
                backgroundColor: route.params.rest.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Image
                source={{
                  uri: route.params.rest.img,
                }}
                style={{ width: 30, height: 30 }}
              />
            </View>
            <TouchableOpacity style={styles.textWrapper}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Text style={styles.text}>{route.params.rest.name}</Text>
              </View>

              <Text style={{ color: "gray" }}>{route.params.rest.desc}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="What's in your mind ..."
            multiline
            onChangeText={(text) => setInput(text)}
          />
        </View>
        <View style={styles.btnWrapper}>
          <Button onPress={handleSearch} title="click me" />
        </View>
        {result.length < 1 ? (
          <View style={styles.logoWrapper}>
            <Text style={{ fontSize: 16, color: "white" }}>No Results !</Text>
          </View>
        ) : (
          <View style={styles.logoWrapper}>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                textAlign: "center",
                padding: 10,
              }}
            >
              {result}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000e03",
  },

  navbar: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 50,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  input: {
    height: 300,
    margin: 12,
    padding: 10,

    borderColor: "white",
    borderWidth: 1,
    fontSize: 18,
    color: "white",
  },

  inputWrapper: {
    padding: 5,
    marginBottom: 20,
  },
  btnWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
  },
  btn: {
    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 50,
    width: 200,
    padding: 15,
    display: "flex",
    alignItems: "center",
    fontWeight: 500,
    fontSize: 16,
    color: "white",
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: 50,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    marginBottom: 5,
  },
  boxWrapper: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
  },
});
