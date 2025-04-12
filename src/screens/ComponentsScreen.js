import React from "react";
import { View, Text, StyleSheet, Image, FlatList, ImageBackground } from "react-native";

const carComponents = [
  {
    id: "1",
    name: "Esp32",
    description: "El cerebro del carro ya que aqui se lleva el codigo del carro seguidor de liena.",
    image: require("../assets/images/esp32.png"),
  },
  {
    id: "2",
    name: "Batería",
    description: "Proporciona la energía necesaria para arrancar el coche.",
    image: require("../assets/images/pilas.jpg"),
  },
  {
    id: "3",
    name: "Cables",
    description: "Los cables se utilizaron para las conexiones del carro y que detectaran por sus colores el cableado .",
    image: require("../assets/images/cables.webp"),
  },
  {
    id: "4",
    name: "Kit de el carro seguidor de línea",
    description: "El KIT donde vienen los materiales como el chasis, motores, llenatas, tornillos, etc del carro seguidor de liena.",
    image: require("../assets/images/chasis.webp"),
  },
  {
    id: "5",
    name: "Protoboard o placa de pruebas",
    description: "Permiten el conectar los componentes sin necesidad de soldar.",
    image: require("../assets/images/proto.jpg"),
  },
  {
    id: "6",
    name: "Sensores de infrarrojos o Opticos",
    description: "Detectan la línea negra y permiten que el carro siga el camino.",
    image: require("../assets/images/sensor.png"),
  },
  {
    id: "7",
    name: "Puente H",
    description: "Controla la dirección y velocidad de los motores.",
    image: require("../assets/images/puente h.jpeg"),
  },
];

export default function ComponentsScreen() {
  return (
    <ImageBackground
      source={{
        uri: "https://media.istockphoto.com/id/504110140/es/vector/cielo-nocturno-estrellas-en-cielo-nocturno.jpg?s=612x612&w=0&k=20&c=C48MzhP9jrwBlwxCxPQK7do6IebM1RCgfQV5HGpkCkw=",
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Componentes del Carro</Text>
        <FlatList
          data={carComponents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Agrega opacidad al fondo
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "white",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
