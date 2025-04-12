import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  ImageBackground,
} from "react-native";

const teamMembers = [
  {
    id: 1,
    name: "Rubén Cárdenas",
    role: "Desarrollador Full-Stack",
    image: require("../assets/images/ruben.png"),
  },
  {
    id: 2,
    name: "Alfonso Ramírez",
    role: "Diseñador UX/UI",
    image: require("../assets/images/alfonso.jpg"),
  },
  {
    id: 3,
    name: "Edgar Burciaga",
    role: "Ingeniero en Hardware",
    image: require("../assets/images/edgar.jpg"),
  },
];

export default function TeamScreen() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <ImageBackground
      source={{
        uri: "https://media.istockphoto.com/id/504110140/es/vector/cielo-nocturno-estrellas-en-cielo-nocturno.jpg?s=612x612&w=0&k=20&c=C48MzhP9jrwBlwxCxPQK7do6IebM1RCgfQV5HGpkCkw=",
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Equipo de Desarrollo</Text>

        {teamMembers.map((member) => (
          <View key={member.id} style={styles.memberContainer}>
            <Image source={member.image} style={styles.image} />
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => setSelectedMember(member)}
            >
              <Text style={styles.buttonText}>Información</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Modal para mostrar información del integrante */}
        <Modal
          visible={!!selectedMember}
          transparent
          animationType="slide"
          onRequestClose={() => setSelectedMember(null)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {selectedMember && (
                <>
                  <Image
                    source={selectedMember.image}
                    style={styles.modalImage}
                  />
                  <Text style={styles.modalTitle}>{selectedMember.name}</Text>
                  <Text style={styles.modalText}>
                    Rol: {selectedMember.role}
                  </Text>
                  <Button
                    title="Cerrar"
                    onPress={() => setSelectedMember(null)}
                  />
                </>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Oscurece un poco el fondo
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },
  memberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  infoButton: {
    backgroundColor: "#625dff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export { TeamScreen };
