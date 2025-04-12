import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import { getSensorData } from "../services/api";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function SensorDataScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSensorData().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.fecha || item.created_at}</Text>
      <Text style={styles.cell}>
        <Icon name="temperature-high" size={16} color="#e74c3c" />{" "}
        {item.temperatura} °C
      </Text>
      <Text style={styles.cell}>
        <Icon name="tint" size={16} color="#3498db" /> {item.humedad} %
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Icon name="microchip" size={20} /> Sensor DHT11
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <View style={styles.header}>
            <Text style={styles.headerCell}>Fecha</Text>
            <Text style={styles.headerCell}>Temperatura</Text>
            <Text style={styles.headerCell}>Humedad</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2c3e50",
  },
  header: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#333",
    paddingBottom: 8,
    marginBottom: 5,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2c3e50",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    marginVertical: 2,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    color: "#2c3e50",
  },
});

export { SensorDataScreen };