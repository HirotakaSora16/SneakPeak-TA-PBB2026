import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function DetailInternasionalScreen({ route }) {
  const { sepatu } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: sepatu.gambar }} style={styles.gambar} />
      <View style={styles.konten}>
        <Text style={styles.badge}>Brand Internasional • {sepatu.merek}</Text>
        <Text style={styles.nama}>{sepatu.nama}</Text>
        <Text style={styles.harga}>{sepatu.harga}</Text>
        <Text style={styles.label}>Ukuran Tersedia:</Text>
        <Text style={styles.isi}>{sepatu.ukuran}</Text>
        <Text style={styles.label}>Deskripsi Produk:</Text>
        <Text style={styles.isi}>{sepatu.deskripsi}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  gambar: { width: '100%', height: 280 },
  konten: { padding: 20 },
  badge: { color: '#457b9d', fontWeight: 'bold', marginBottom: 4 },
  nama: { fontSize: 24, fontWeight: 'bold', color: '#111' },
  harga: { fontSize: 20, color: '#e63946', fontWeight: 'bold', marginVertical: 8 },
  label: { fontSize: 14, fontWeight: 'bold', marginTop: 14, color: '#444' },
  isi: { fontSize: 15, color: '#555', marginTop: 4, lineHeight: 22 }
});