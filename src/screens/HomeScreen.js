import React from "react";
import { View, Text, Button, StyleSheet, Image, ImageBackground } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: "https://media.istockphoto.com/id/504110140/es/vector/cielo-nocturno-estrellas-en-cielo-nocturno.jpg?s=612x612&w=0&k=20&c=C48MzhP9jrwBlwxCxPQK7do6IebM1RCgfQV5HGpkCkw=" }} 
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Imagen centrada */}
        <Image
          source={{ uri: "https://hips.hearstapps.com/hmg-prod/images/2024-ram-1500-trx-final-edition-101-64f0da2fac867.jpeg?crop=1.00xw:0.751xh;0,0.171xh&resize=1200:*" }}
          style={styles.image}
        />
        
        {/* Presentación */}
        <Text style={styles.welcomeText}>¡Bienvenidos a nuestra app móvil!</Text>

        {/* Tarjeta con la explicación */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>¿Qué es el Carro Seguidor de Línea?</Text>
          <Text style={styles.cardText}>
            Es un vehículo automatizado diseñado para seguir un camino predefinido utilizando sensores. 
            Este proyecto combina mecánica, electrónica y programación para crear una solución autónoma de navegación.
          </Text>
        </View>

        {/* Botones de navegación */}

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
    justifyContent: "center",
    alignItems: "center", 
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00FFFF", // Azul neón
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "#0000FF", // Sombra azul
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  card: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo translúcido
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    width: "85%",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00FFFF", // Azul neón
    textAlign: "center",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export { HomeScreen };
