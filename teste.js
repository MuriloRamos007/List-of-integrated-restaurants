    // Função para abrir WhatsApp
    const abrirWhatsApp = () => {
      const url = `https://wa.me/${whatsapp}`;
      Linking.openURL(url);
    };
  
    // Função para fazer ligação
    const fazerLigacao = () => {
      const url = `tel:${telefone}`;
      Linking.openURL(url);
    };
  
    // Função para abrir localização no Google Maps
    const abrirMaps = () => {
      const url = `https://www.google.com/maps/search/?api=1&query=${localizacao}`;
      Linking.openURL(url);
    };

    onPress={abrirWhatsApp}
    onPress={fazerLigacao}
    onPress={abrirMaps}

    import React from "react";
    import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from "react-native";
    
    const RestauranteDetailScreen = ({ route }) => {
        const { nome, descricao, horario, telefone, whatsapp, localizacao, imagem, endereco } = route.params;
        // RestarenteDetalhes