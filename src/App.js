import React, { useState, useEffect } from "react";
import Routers from "./routers";
import productsApiRequest from "./api/productApi";
import brandsApiRequest from "./api/brandApi";
import categoryApiRequest from "./api/categoryApi";
import shopCartsApiRequest from "./api/shopCartApi";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await productsApiRequest.getAll();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.log("Failed to request API: ", error);
      }
    };
    getProducts();
  }, []);

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const getBrands = async () => {
      try {
        const { data } = await brandsApiRequest.getAll();
        setBrands(data);
      } catch (error) {
        console.log("Failed to request API: ", error);
      }
    };
    getBrands();
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await categoryApiRequest.getAll();
        setCategories(data);
      } catch (error) {
        console.log("Failed to request API: ", error);
      }
    };
    getCategories();
  }, []);

  const [shopCarts, setShopCarts] = useState([]);
  useEffect(() => {
    const getShopCarts = async () => {
      try {
        const { data } = await shopCartsApiRequest.getAll();
        setShopCarts(data);
        console.log(data);
      } catch (error) {
        console.log("Failed to request API: ", error);
      }
    };
    getShopCarts();
  }, []);

  const onHandleAdd = async (product) => {
    try {
      const { data } = await productsApiRequest.create(product);
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
    productsApiRequest.update(updateProduct.id, updateProduct);
  };

  const onHandleRemove = async (id) => {
    try {
      const { data } = await productsApiRequest.remove(id);
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
          brands={brands}
          categories={categories}
          shopCarts={shopCarts}
          onAdd={onHandleAdd}
          onRemove={onHandleRemove}
          onUpdate={onHandleUpdate}
        />
      </div>
    </div>
  );
}

export default App;
