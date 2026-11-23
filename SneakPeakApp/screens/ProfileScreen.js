import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>SP</Text>
      </View>
      <Text style={styles.appTitle}>SneakPeak v1.0</Text>
      <Text style={styles.subtitle}>Aplikasi Katalog Koleksi Sepatu Lokal & Internasional</Text>
      
      <View style={styles.box}>
        <Text style={styles.label}>Dibuat Oleh:</Text>
        <Text style={styles.value}>MUHAMMAD DZAKWAN FAKHRIY HABIBIE</Text>
        <Text style={styles.label}>NIM:</Text>
        <Text style={styles.value}>21120120140134</Text>
        <Text style={styles.label}>Praktikum:</Text>
        <Text style={styles.value}>sneakPeak [pemrograman perangkat bergerak 2026]</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', padding: 20 },
  avatar: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#1d3557', alignItems: 'center', justifyContent: 'center', marginBottom: 15 },
  avatarText: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  appTitle: { fontSize: 22, fontWeight: 'bold', color: '#1d3557' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 4, marginBottom: 25 },
  box: { width: '100%', backgroundColor: '#fff', padding: 20, borderRadius: 12, elevation: 2 },
  label: { fontSize: 12, color: '#888', marginTop: 10 },
  value: { fontSize: 16, fontWeight: 'bold', color: '#222' }
});