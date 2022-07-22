import React from "react";
import { View, SafeAreaView, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


const ProductScreen = ({navigation, route}) => {
    const product = route.params;


    
    return(
        <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
 <View style={style.header}>
 <Icon name = 'arrow-back' size = {28}  onPress= {()=> navigation.goBack()}/>
 <Icon name="shopping-cart" size={28} />
 </View>
 <View style={style.imageContainer}>
        <Image
          source={product.img}
          style={{ resizeMode: "contain", flex: 1 }}
        />
</View>
<View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            {product.name}
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Rs.{product.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            {product.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: "bold",
                }}
              >
                1
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </View>
            </View>

            <View style={style.buyBtn}>
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                Add to Cart
              </Text>
            </View>
          </View>
        </View>
      </View>





    </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header: {
      paddingHorizontal: 20,
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    imageContainer: {
      flex: 0.45,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    detailsContainer: {
      flex: 0.55,
      backgroundColor: "#F1F1F1",
      marginHorizontal: 7,
      marginBottom: 7,
      borderRadius: 20,
      marginTop: 30,
      paddingTop: 30,
    },
    line: {
      width: 25,
      height: 2,
      backgroundColor: "black",
      marginBottom: 5,
      marginRight: 3,
    },
    borderBtn: {
      borderColor: "grey",
      borderWidth: 1,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      width: 60,
      height: 40,
    },
    borderBtnText: { fontWeight: "bold", fontSize: 28 },
    buyBtn: {
      width: 130,
      height: 50,
      backgroundColor: "pink",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
    },
    priceTag: {
      backgroundColor: "pink",
      width: 80,
      height: 40,
      justifyContent: "center",
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
    },
  });
export default ProductScreen;