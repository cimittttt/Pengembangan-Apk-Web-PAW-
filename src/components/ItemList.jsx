import ItemCard from './ItemCard';

function ItemList({ items, onHapus, onUbahJumlah }) {
  if (items.length === 0) {
    return (
      <div style={styles.kosong}>
        <p style={styles.kosongText}>Keranjang masih kosong.</p>
        <p style={styles.kosongSub}>Tambahkan barang menggunakan form di samping.</p>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.judul}>Daftar Barang ({items.length} item)</h2>
      <div style={styles.list}>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onHapus={onHapus}
            onUbahJumlah={onUbahJumlah}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#f0f9ff',
    border: '1px solid #a8d8ea',
    borderRadius: '10px',
    padding: '24px',
    boxShadow: '0 2px 8px rgba(137, 207, 240, 0.25)',
  },
  judul: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#2c6e8a',
    marginBottom: '14px',
    borderBottom: '2px solid #89CFF0',
    paddingBottom: '10px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  kosong: {
    backgroundColor: '#f0f9ff',
    border: '2px dashed #89CFF0',
    borderRadius: '10px',
    padding: '48px 24px',
    textAlign: 'center',
  },
  kosongIcon: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '12px',
  },
  kosongText: {
    color: '#2c6e8a',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '6px',
  },
  kosongSub: {
    color: '#6b99a8',
    fontSize: '0.82rem',
  },
};

export default ItemList;
