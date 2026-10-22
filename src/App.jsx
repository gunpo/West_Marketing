import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2c3e50' }}>West Clinic Marketing Campaign</h1>
        <p style={{ color: '#7f8c8d', fontSize: '18px' }}>Bringing advanced healthcare closer to you.</p>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#2980b9' }}>Our New Services</h2>
        <ul style={{ lineHeight: '1.6' }}>
          <li>Comprehensive Health Screenings</li>
          <li>Advanced Pediatric Care</li>
          <li>24/7 Telehealth Consultations</li>
        </ul>
      </section>

      <section style={{ backgroundColor: '#ecf0f1', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#34495e' }}>Special Offer</h3>
        <p style={{ margin: '0' }}>Get 20% off your first telehealth consultation this month! Use code: <strong>WEST20</strong></p>
      </section>

      <footer style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
        <p style={{ color: '#95a5a6' }}>&copy; 2026 West Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
