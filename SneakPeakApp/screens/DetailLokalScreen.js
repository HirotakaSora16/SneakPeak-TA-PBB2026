import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';

export default function DetailLokalScreen({ route }) {
  const { sepatu } = route.params;
  const [modalVisible, setModalVisible] = useState(false); // Mengatur buka/tutup layar zoom

  return (
    <ScrollView style={styles.container}>
      {/* Gambar utama yang bisa diklik */}
      <TouchableOpacity activeOpacity={0.9} onPress={() => setModalVisible(true)}>
        <Image source={{ uri: sepatu.gambar }} style={styles.gambar} />
        <View style={styles.hintBadge}>
          <Text style={styles.hintText}>🔍 Ketuk gambar untuk memperbesar</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.konten}>
        <Text style={styles.badge}>Brand Lokal • {sepatu.merek}</Text>
        <Text style={styles.nama}>{sepatu.nama}</Text>
        <Text style={styles.harga}>{sepatu.harga}</Text>
        <Text style={styles.label}>Ukuran Tersedia:</Text>
        <Text style={styles.isi}>{sepatu.ukuran}</Text>
        <Text style={styles.label}>Deskripsi Produk:</Text>
        <Text style={styles.isi}>{sepatu.deskripsi}</Text>
      </View>

      {/* Modal Fullscreen untuk Zoom Gambar */}
      <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeText}>✕ Tutup</Text>
          </TouchableOpacity>

          <ScrollView
            contentContainerStyle={styles.zoomContainer}
            maximumZoomScale={4} // Maksimal zoom 4x lipat
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <Image source={{ uri: sepatu.gambar }} style={styles.fullGambar} resizeMode="contain" />
          </ScrollView>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  gambar: { width: '100%', height: 280 },
  hintBadge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  hintText: { color: '#fff', fontSize: 12 },
  konten: { padding: 20 },
  badge: { color: '#2a9d8f', fontWeight: 'bold', marginBottom: 4 },
  nama: { fontSize: 24, fontWeight: 'bold', color: '#111' },
  harga: { fontSize: 20, color: '#e63946', fontWeight: 'bold', marginVertical: 8 },
  label: { fontSize: 14, fontWeight: 'bold', marginTop: 14, color: '#444' },
  isi: { fontSize: 15, color: '#555', marginTop: 4, lineHeight: 22 },
  modalBackground: { flex: 1, backgroundColor: 'rgba(0,0,0,0.95)', justifyContent: 'center' },
  closeButton: { position: 'absolute', top: 45, right: 20, zIndex: 10, backgroundColor: '#333', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20 },
  closeText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  zoomContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  fullGambar: { width: '100%', height: '80%' },
});