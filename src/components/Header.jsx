function Header({ totalItems, totalHarga }) {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <div>
          <h1 style={styles.title}>Cart</h1>
        </div>
      </div>
      <div style={styles.right}>
        <div style={styles.badge}>
          <span style={styles.badgeLabel}>Total Item</span>
          <span style={styles.badgeValue}>{totalItems}</span>
        </div>
        <div style={styles.badge}>
          <span style={styles.badgeLabel}>Total Harga</span>
          <span style={styles.badgeValue}>Rp {totalHarga.toLocaleString('id-ID')}</span>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#89CFF0',
    borderBottom: '3px solid #60b8e0',
    padding: '20px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    boxShadow: '0 2px 8px rgba(100, 181, 222, 0.35)',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  icon: {
    fontSize: '2.2rem',
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
    textShadow: '0 1px 3px rgba(0,0,0,0.15)',
  },
  subtitle: {
    fontSize: '0.82rem',
    color: '#f0f9ff',
    marginTop: '2px',
  },
  right: {
    display: 'flex',
    gap: '14px',
    flexWrap: 'wrap',
  },
  badge: {
    backgroundColor: '#a8d8ea',
    border: '1px solid #ffffff',
    borderRadius: '8px',
    padding: '10px 18px',
    textAlign: 'center',
    minWidth: '120px',
  },
  badgeLabel: {
    display: 'block',
    fontSize: '0.75rem',
    color: '#1a3a5c',
    marginBottom: '4px',
    fontWeight: '500',
  },
  badgeValue: {
    display: 'block',
    fontSize: '1rem',
    fontWeight: '700',
    color: '#1a3a5c',
  },
};

export default Header;
