import { Outlet } from 'react-router-dom'; // For rendering nested routes

const Layout = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 fixed h-full">
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul className="space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded">Menu Item 1</li>
          <li className="hover:bg-gray-700 p-2 rounded">Menu Item 2</li>
          <li className="hover:bg-gray-700 p-2 rounded">Menu Item 3</li>
        </ul>
      </aside>
      <div className="flex-1 ml-64 flex flex-col">
        <header className="bg-gray-900 text-white p-4">
          <h1 className="text-lg font-semibold">Navbar</h1>
        </header>
        <div className="flex-1 p-4 overflow-y-auto">
          <Outlet /> {/* Renders nested routes */}
        </div>
      </div>
    </div>
  );
};

export default Layout;