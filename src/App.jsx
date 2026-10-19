import { useState, useEffect } from 'react';
import Header from './components/Header';
import FormInput from './components/FormInput';
import ItemList from './components/ItemList';
import RingkasanBelanja from './components/RingkasanBelanja';

function App() {
  const [keranjang, setKeranjang] = useState(() => {
    const dataTersimpan = localStorage.getItem('keranjang');
    return dataTersimpan ? JSON.parse(dataTersimpan) : [];
  });

  useEffect(() => {
    localStorage.setItem('keranjang', JSON.stringify(keranjang));
  }, [keranjang]);

  useEffect(() => {
    const totalItem = keranjang.reduce((acc, item) => acc + item.jumlah, 0);
    if (totalItem > 0) {
      document.title = `(${totalItem}) Cart`;
    } else {
      document.title = 'Cart';
    }
  }, [keranjang]);

  const handleTambahItem = (itemBaru) => {
    setKeranjang((prev) => [...prev, itemBaru]);
  };

  const handleHapusItem = (id) => {
    setKeranjang((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUbahJumlah = (id, jumlahBaru) => {
    if (jumlahBaru <= 0) {
      handleHapusItem(id);
      return;
    }
    setKeranjang((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, jumlah: jumlahBaru } : item
      )
    );
  };

  const handleKosongkan = () => {
    setKeranjang([]);
  };

  const totalItems = keranjang.reduce((acc, item) => acc + item.jumlah, 0);
  const totalHarga = keranjang.reduce(
    (acc, item) => acc + item.harga * item.jumlah,
    0
  );

  return (
    <div style={styles.app}>
      <Header totalItems={totalItems} totalHarga={totalHarga} />

      <main style={styles.main}>
        <aside style={styles.sidebar}>
          <FormInput onTambahItem={handleTambahItem} />
          <RingkasanBelanja
            items={keranjang}
            onKosongkan={handleKosongkan}
          />
        </aside>

        <section style={styles.content}>
          <ItemList
            items={keranjang}
            onHapus={handleHapusItem}
            onUbahJumlah={handleUbahJumlah}
          />
        </section>
      </main>

      <footer style={styles.footer}>
        <p>Cart &mdash; React.js + useState + useEffect</p>
      </footer>
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#e0f2fe',
  },
  main: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: '340px 1fr',
    gap: '24px',
    padding: '28px 30px',
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    textAlign: 'center',
    padding: '14px',
    color: '#5a8fa8',
    fontSize: '0.78rem',
    borderTop: '1px solid #a8d8ea',
    backgroundColor: '#d0ecf7',
  },
};

export default App;
