import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, ImageBackground } from "react-native";

export default function MapScreen() {
  const [carImage, setCarImage] = useState(require("../assets/images/mapeo.png"));

  const changeCarImage = () => {
    const newImage = carImage === require("../assets/images/mapeo.png")
      ? require("../assets/images/mapeo2.webp")
      : require("../assets/images/mapeo.png");

    setCarImage(newImage);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://media.istockphoto.com/id/504110140/es/vector/cielo-nocturno-estrellas-en-cielo-nocturno.jpg?s=612x612&w=0&k=20&c=C48MzhP9jrwBlwxCxPQK7do6IebM1RCgfQV5HGpkCkw=",
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Mapeo del Carro</Text>
        <Image source={carImage} style={styles.carImage} />
        <Button title="Cambiar Imagen" onPress={changeCarImage} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Para mejorar la visibilidad del texto
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },
  carImage: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
