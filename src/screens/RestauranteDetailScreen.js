import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const RestauranteDetailScreen = ({ route }) => {
    const { nome, descricao, horario, telefone, imagem, endereco } = route.params;
  
    return (
      <View style={styles.container}>
        <Image source={{ uri: imagem }} style={styles.imagem} />
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.horario}>🕒 {horario}</Text>
        <Text style={styles.endereco}>📍 {endereco}</Text>
        <Text style={styles.telefone}>📞 {telefone}</Text>
  
        {}
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} >
            <Text style={styles.textoBotao}>📨 WhatsApp</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.botao} >
            <Text style={styles.textoBotao}>📞 Ligar</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.botao} >
            <Text style={styles.textoBotao}>📍 Localização</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: "center", backgroundColor: "#fff" },
    imagem: { width: "100%", height: 200, borderRadius: 10, marginBottom: 10 },
    nome: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
    descricao: { fontSize: 16, textAlign: "center", marginBottom: 10 },
    horario: { fontSize: 14, color: "gray", marginBottom: 10 },
    endereco: { fontSize: 14, color: "gray", marginBottom: 10 },
    telefone: { fontSize: 14, color: "gray", marginBottom: 20 },
    botoes: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
    botao: { backgroundColor: "#007AFF", paddingTop: 10, paddingBottom: 10, borderRadius: 5, flex: 1, margin: 3, alignItems: "center"},
    textoBotao: { color: "#fff", fontSize: 17, fontWeight: "bold" },
  });
  
  export default RestauranteDetailScreen;
