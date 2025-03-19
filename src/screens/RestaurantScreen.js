import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import restaurantes from "../data/mockData";

export default function RestaurantesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurantes</Text>
      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.horario}>🕒 {item.horario}</Text>
            <Text style={styles.contato}>📞 {item.contato}</Text>
            <Text style={styles.localizacao}>📍 {item.localizacao}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 14,
    marginBottom: 5,
  },
  horario: {
    fontSize: 14,
    fontWeight: "bold",
  },
  contato: {
    fontSize: 14,
    fontWeight: "bold",
  },
  localizacao: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
