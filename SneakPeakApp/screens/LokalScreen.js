import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const API_URL = 'http://192.168.1.101:3000/api/lokal';

export default function LokalScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => { setData(json); setLoading(false); })
      .catch((err) => { console.error(err); setLoading(false); });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('DetailLokal', { sepatu: item })}
          >
            <Image source={{ uri: item.gambar }} style={styles.gambar} />
            <View style={styles.info}>
              <Text style={styles.merek}>{item.merek}</Text>
              <Text style={styles.nama}>{item.nama}</Text>
              <Text style={styles.harga}>{item.harga}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4', padding: 12 },
  card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, marginBottom: 12, padding: 10, elevation: 2 },
  gambar: { width: 85, height: 85, borderRadius: 8 },
  info: { marginLeft: 12, justifyContent: 'center', flex: 1 },
  merek: { fontSize: 12, color: '#888', fontWeight: 'bold' },
  nama: { fontSize: 16, fontWeight: 'bold', color: '#222', marginVertical: 2 },
  harga: { fontSize: 14, color: '#e63946', fontWeight: '600' }
});