import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Configuration, OpenAIApi } from "openai";
import { OpenAiModels } from "./models/models";
import { useState } from "react";
import HomeRounded from "@mui/icons-material/HomeRounded";

export default function App() {
  const [option, setOption] = useState({});
  const [input, setInput] = useState("");

  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const SelectedOpt = (opt) => {
    setOption(opt);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View
          style={{ borderRadius: "50%", backgroundColor: "black", padding: 5 }}
        >
          <HomeRounded style={{ color: "white" }} />
        </View>
        <Text style={{ fontWeight: "400", fontSize: 16 }}>Home</Text>
        <Image
          source={require("./assets/kabakiLogo.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}> Kabaki Technologies</Text>
      </View>
      <View style={styles.wrapper}>
        {OpenAiModels.map((item) => (
          <View style={styles.boxWrapper}>
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                backgroundColor: item.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: item.img,
                }}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <TouchableOpacity style={styles.textWrapper}>
              <Text style={styles.text}>{item.name}</Text>
              <Text numberOfLines={1} style={{ color: "gray" }}>
                {item.desc}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
  },

  wrapper: {
    padding: 24,
  },

  box: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },

  boxWrapper: {
    flexDirection: "row",
    marginBottom: 20,
  },

  text: {
    fontSize: 14,
    fontWeight: "600",
  },
  textWrapper: {
    padding: 8,
    flex: 1,
  },

  navbar: {
    backgroundColor: "#C5C5C5",
    padding: 8,
    borderRadius: 50,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },

  header: { padding: 24 },
  headerText: {
    fontSize: 24,
    color: "#D10068",
  },
});
