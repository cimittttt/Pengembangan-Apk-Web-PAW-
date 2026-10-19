function RingkasanBelanja({ items, onKosongkan }) {
  const totalItems = items.reduce((acc, item) => acc + item.jumlah, 0);
  const totalHarga = items.reduce((acc, item) => acc + item.harga * item.jumlah, 0);

  return (
    <div style={styles.card}>
      <h2 style={styles.judul}>List Belanjaan</h2>

      <div style={styles.baris}>
        <span style={styles.label}>Total Barang (pcs)</span>
        <span style={styles.nilai}>{totalItems} pcs</span>
      </div>

      <div style={styles.divider} />

      <div style={styles.baris}>
        <span style={styles.labelTotal}>Total Pembayaran</span>
        <span style={styles.nilaiTotal}>
          Rp {totalHarga.toLocaleString('id-ID')}
        </span>
      </div>

      <button
        style={{
          ...styles.btnKosongkan,
          ...(items.length === 0 ? styles.btnDisabled : {}),
        }}
        onClick={onKosongkan}
        disabled={items.length === 0}
      >
        Kosongkan Keranjang
      </button>
    </div>
  );
}

const styles = {
  card: {
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
    marginBottom: '16px',
    borderBottom: '2px solid #89CFF0',
    paddingBottom: '10px',
  },
  baris: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  label: {
    fontSize: '0.88rem',
    color: '#5a8fa8',
  },
  nilai: {
    fontSize: '0.88rem',
    fontWeight: '600',
    color: '#1a3a5c',
  },
  divider: {
    height: '1px',
    backgroundColor: '#a8d8ea',
    margin: '12px 0',
  },
  labelTotal: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1a3a5c',
  },
  nilaiTotal: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: '#2c6e8a',
  },
  btnKosongkan: {
    width: '100%',
    marginTop: '18px',
    backgroundColor: '#fee2e2',
    color: '#b91c1c',
    border: '1px solid #fca5a5',
    borderRadius: '6px',
    padding: '10px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  btnDisabled: {
    backgroundColor: '#e0f2fe',
    color: '#a8d8ea',
    borderColor: '#bae6fd',
    cursor: 'not-allowed',
  },
};

export default RingkasanBelanja;
