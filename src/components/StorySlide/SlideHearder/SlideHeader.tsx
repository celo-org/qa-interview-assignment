import * as React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import DEFAULT_AVATAR from "~/assets/images/ic1.png";
import { colors } from "~/utils/theme";

export default class SlideHeader extends React.Component {
  state = {
    progressValue: 0,
  };
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.updateLoader();
  }

  updateLoader = () => {
    setInterval(() => {
      this.setState({ progressValue: this.state.progressValue + 2 });
      if (this.state.progressValue == 118) {
        //alert("Fini");
      }
    }, 100);
  };

  render() {
    // @ts-ignore
    const { user, closeStory } = this.props;

    const progressCustomStyles = {
      backgroundColor: colors.white,
      borderRadius: 1.5,
      height: 3,
    };
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ProgressBarAnimated
            {...progressCustomStyles}
            width={Dimensions.get("window").width - 30}
            value={this.state.progressValue}
          />
          <View style={styles.bottomContainer}>
            <View style={styles.avatarContainer}>
              <Image
                source={require("~/assets/images/ic4.png")}
                defaultSource={DEFAULT_AVATAR}
                style={styles.avatar}
              />
              <Text style={styles.username}>{user}</Text>
            </View>
            <TouchableOpacity onPress={closeStory}>
              <Text style={styles.closeButton}>{"X"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 16,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    marginRight: 16,
  },
  username: {
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
