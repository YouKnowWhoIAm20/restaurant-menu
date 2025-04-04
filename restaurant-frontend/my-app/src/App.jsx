import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
      const fetchMenu = async () => {
          try {
              const res = await fetch('https://restaurant-menu-2-zw4v.onrender.com/menu');
              if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
              const data = await res.json();
              console.log("✅ API Response:", data);
              setMenu(data);
          } catch (err) {
              console.error("❌ Error fetching menu:", err);
          }
      };
  
      fetchMenu();
  }, []);

    return (
        <div className='container mt-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <img src='/logo-left.jpg' alt='Logo Left' height='50' />
                <h1 className='text-center flex-grow-1'>The Plaza</h1>
                <img src='/logo-right.jpg' alt='Logo Right' height='50' />
            </div>
            <div className='row mt-3'>
                {menu.map((item, index) => (
                    <div key={index} className='col-md-4'>
                        <div className='card mb-4'>
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name || "Unknown Item"}</h5>
                                <p className='card-text'>${item.price || "N/A"}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
