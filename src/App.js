import React, { useState, useEffect } from "react";
import Routers from "./routers";
import apiRequest from "./api/productApi";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log("Failed to request API: ", error);
      }
    };
    getProducts();
  }, []);

  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([...products, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  const onHandleUpdate = (updateProduct) => {
    const newProducts = products.map(
      (product) => (product.id === updateProduct.id ? updateProduct : product) // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    // localStorage.setItem("products", JSON.stringify(newProducts));
    setProducts(newProducts);
    apiRequest.update(updateProduct.id, updateProduct);
  };

  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
      window.alert("Delte Successfully!!");
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  return (
    <div className="App">
      <div className="App">
        <Routers
          products={products}
          onAdd={onHandleAdd}
          onRemove={onHandleRemove}
          onUpdate={onHandleUpdate}
        />
      </div>
    </div>
  );
}

export default App;
