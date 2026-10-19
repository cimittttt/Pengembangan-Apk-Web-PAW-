function ItemCard({ item, onHapus, onUbahJumlah }) {
  const subtotal = item.harga * item.jumlah;

  return (
    <div style={styles.card}>
      <div style={styles.info}>
        <span style={styles.namaBarang}>{item.nama}</span>
        <span style={styles.hargaSatuan}>
          Rp {item.harga.toLocaleString('id-ID')} / pcs
        </span>
      </div>

      <div style={styles.controls}>
        <button
          style={styles.btnQty}
          onClick={() => onUbahJumlah(item.id, item.jumlah - 1)}
          disabled={item.jumlah <= 1}
        >
  
        </button>
        <span style={styles.jumlahText}>{item.jumlah}</span>
        <button
          style={styles.btnQty}
          onClick={() => onUbahJumlah(item.id, item.jumlah + 1)}
        >
          +
        </button>
      </div>

      <div style={styles.subtotal}>
        Rp {subtotal.toLocaleString('id-ID')}
      </div>

      <button style={styles.btnHapus} onClick={() => onHapus(item.id)}>
        Hapus
      </button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#d0ecf7',
    border: '1px solid #a8d8ea',
    borderRadius: '8px',
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    flexWrap: 'wrap',
  },
  info: {
    flex: 1,
    minWidth: '120px',
  },
  namaBarang: {
    display: 'block',
    fontWeight: '600',
    color: '#1a3a5c',
    fontSize: '0.97rem',
    marginBottom: '3px',
  },
  hargaSatuan: {
    fontSize: '0.78rem',
    color: '#5a8fa8',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  btnQty: {
    backgroundColor: '#89CFF0',
    color: '#ffffff',
    border: '1px solid #60b8e0',
    borderRadius: '5px',
    width: '30px',
    height: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
  },
  jumlahText: {
    minWidth: '28px',
    textAlign: 'center',
    fontWeight: '700',
    color: '#1a3a5c',
    fontSize: '0.97rem',
  },
  subtotal: {
    fontWeight: '700',
    color: '#2c6e8a',
    fontSize: '0.97rem',
    minWidth: '110px',
    textAlign: 'right',
  },
  btnHapus: {
    backgroundColor: '#fee2e2',
    border: '1px solid #fca5a5',
    borderRadius: '5px',
    padding: '6px 10px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default ItemCard;
