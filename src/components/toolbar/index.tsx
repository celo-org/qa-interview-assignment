import { Body, Button, Header, Left, Right } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text } from "react-native-elements";
import { colors } from "~/utils/theme";

const HeaderToolbar: React.StatelessComponent = (props: any) => {
  return (
    <Header style={{ backgroundColor: colors.white }}>
      <Left>
        <Button transparent style={{ marginLeft: 4 }}>
          {props.context == "Home" ? (
            <TouchableOpacity onPress={props.onClicked}>
              <Image
                style={{ width: 32, height: 28 }}
                source={require("~/assets/images/camera.png")}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                style={{ width: 32, height: 28 }}
                source={require("~/assets/images/chevron_left.png")}
              />
            </TouchableOpacity>
          )}
        </Button>
      </Left>
      <Body>
        <TouchableOpacity>
          {props.context == "Home" ? (
            <Image
              style={{ width: 136, height: 39 }}
              source={{
                uri:
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2a%2FInstagram_logo.svg%2F1200px-Instagram_logo.svg.png&f=1&nofb=1",
              }}
            />
          ) : (
            <Text>{props.context}</Text>
          )}
        </TouchableOpacity>
      </Body>
      <Right style={{ marginRight: 4 }}>
        {props.context == "Home" ? (
          <TouchableOpacity>
            <Image
              style={{ width: 44, height: 44 }}
              source={require("~/assets/images/tv.png")}
            />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          style={{ flexDirection: "row", alignSelf: "center", marginTop: 5 }}
        >
          <Image
            style={{ width: 26, height: 26 }}
            source={require("~/assets/images/direct.png")}
          />
        </TouchableOpacity>
      </Right>
    </Header>
  );
};
export default HeaderToolbar;
