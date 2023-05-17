/*
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
        <Text style={styles.headerText}>Kabaki Technologies</Text>
      </View>
      <View style={styles.wrapper}>
        {OpenAiModels.map((item, i) => (
          <View style={styles.boxWrapper} key={i}>
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
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{item.name}</Text>
              <Text numberOfLines={1} style={{ color: "gray" }}>
                {item.desc}
              </Text>
            </View>
          </View>
        ))}
      </View>
*/
