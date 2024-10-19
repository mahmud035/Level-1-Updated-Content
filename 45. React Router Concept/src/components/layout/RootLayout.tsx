import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';

export default function RootLayout() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}