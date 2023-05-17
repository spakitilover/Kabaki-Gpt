import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { OpenAiModels } from "../../models/models";
import { useNavigation } from "@react-navigation/native";

const Homes = () => {
  const navigate = useNavigation();
  const handleSelectModel = (opt) => {
    navigate.navigate("chat", { opt: opt.opt, rest: opt });
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

          <Image
            source={require("../../assets/kabakiLogo.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>

        <View style={styles.wrapper}>
          {OpenAiModels.map((item) => (
            <View style={styles.boxWrapper}>
              <View
                style={{
                  width: 70,
                  height: 70,
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
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <TouchableOpacity
                style={styles.textWrapper}
                onPress={() => handleSelectModel(item)}
              >
                <Text style={styles.text}>{item.name}</Text>
                <Text numberOfLines={1} style={{ color: "gray" }}>
                  {item.desc}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000e03",
  },

  wrapper: {
    padding: 20,
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
    color: "white",
  },
  textWrapper: {
    padding: 8,
    flex: 1,
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
    marginBottom: 20,
  },

  header: { padding: 24 },
  headerText: {
    fontSize: 24,
    color: "#D10068",
  },
});
/*
const [option, setOption] = useState({});
const [input, setInput] = useState("");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const SelectedOpt = (opt) => {
  setOption(opt);
};
*/
