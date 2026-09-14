import React from "react";

import Header from "./components/Header";
import UserCard from "./components/UserCard";
import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewUser from "./components/ViewUserData";
import Cart from "./components/Cart";

function App() {
  
  return (
    <div >
      <BrowserRouter >

        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/view/:name" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


function MainBody() {
  const users = [
    {
      id: 1,
      name: "Ashik",
      email: "ashik@example.com",
      age: 22,
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@example.com",
      age: 23,
    },
    {
      id: 3,
      name: "John",
      email: "john@example.com",
      age: 21,
    },
  ];
  const theme = useSelector(state => state.theme.theme)
  return (
    <div className={theme == "light" ? "min-h-screen bg-gray-100" : "bg-slate-900 min-h-screen transition-all"}>
      <Header />

      <main className="max-w-6xl mx-auto p-8">

        <h1 className={theme == "light" ? "text-3xl font-bold text-gray-800 mb-8" : "text-3xl font-bold text-gray-100 mb-8"}>
          Dashboard
        </h1>

        {/* Counter */}
        <div className="max-w-md mb-10">
          <Counter />
        </div>

        {/* Users */}
        <h2 className="text-2xl font-bold mb-5">
          Users
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id = {user.id}
              name={user.name}
              email={user.email}
              age={user.age}
            />
          ))}
        </div>

        {/* Product */}
        <h2 className="text-2xl font-bold mt-12 mb-5">
          Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            name="Laptop"
            price={55000}
          />

          <ProductCard
            name="Headphones"
            price={2500}
          />

          <ProductCard
            name="Keyboard"
            price={1500}
          />
        </div>
        <Cart />
      </main>
    </div>
  )
}