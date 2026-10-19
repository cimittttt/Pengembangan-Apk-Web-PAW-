import { useState } from 'react';

function FormInput({ onTambahItem }) {
  const [namaBarang, setNamaBarang] = useState('');
  const [harga, setHarga] = useState('');
  const [jumlah, setJumlah] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!namaBarang.trim() || !harga) return;
    onTambahItem({
      id: Date.now(),
      nama: namaBarang.trim(),
      harga: Number(harga),
      jumlah: Number(jumlah),
    });
    setNamaBarang('');
    setHarga('');
    setJumlah(1);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>Tambah Barang</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.group}>
          <label style={styles.label}>Nama Barang</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Contoh: Buku Tulis"
            value={namaBarang}
            onChange={(e) => setNamaBarang(e.target.value)}
            required
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Harga (Rp)</label>
          <input
            style={styles.input}
            type="number"
            placeholder="Contoh: 15000"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            min="0"
            required
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Jumlah</label>
          <input
            style={styles.input}
            type="number"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            min="1"
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Tambah ke Keranjang
        </button>
      </form>
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
  cardTitle: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#2c6e8a',
    marginBottom: '18px',
    borderBottom: '2px solid #89CFF0',
    paddingBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontSize: '0.82rem',
    color: '#2c6e8a',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#e0f2fe',
    border: '1px solid #a8d8ea',
    borderRadius: '6px',
    padding: '9px 13px',
    color: '#1a3a5c',
    fontSize: '0.92rem',
    outline: 'none',
    width: '100%',
  },
  button: {
    backgroundColor: '#5bb8d4',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '11px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '4px',
    letterSpacing: '0.3px',
  },
};

export default FormInput;
