import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import mockData from "../data/mockData";

const RestaurantesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Detalhes", item)}
          >
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>🏪 {item.nome}</Text>
              <Text style={styles.descricao}>🧾 {item.descricao}</Text>
              <Text style={styles.horario}>🕒 {item.horario}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f8f8f8" },
  item: { flexDirection: "row", padding: 10, marginVertical: 5, backgroundColor: "#fff", borderRadius: 10, alignItems: "center" },
  imagem: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
  info: { flex: 1 },
  nome: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  descricao: { fontSize: 14, color: "gray", marginBottom: 3 },
  horario: { fontSize: 14, color: "#007AFF", fontWeight: "bold" },
});

export default RestaurantesScreen;

