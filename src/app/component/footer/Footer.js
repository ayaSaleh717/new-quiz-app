import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Copyright © 2022 MyWebsite</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }
}

export default Footer;