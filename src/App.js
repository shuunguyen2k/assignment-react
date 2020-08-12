import React, { useState, useEffect } from "react";
import Routers from "./routers";
import productsApiRequest from "./api/productApi";
import brandsApiRequest from "./api/brandApi";
import categoryApiRequest from "./api/categoryApi";
import shopCartApiRequest from "./api/shopCartApi";
import customerApiRequest from "./api/customerApi";
import blogApiRequest from "./api/blogApi";

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
  const onHandleAdd = async (product) => {
    try {
      const { data } = await productsApiRequest.create(product);
      setProducts([...products, data]);
      window.alert("Add Successfully!!");
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
    window.alert("Update successfully!!");
    productsApiRequest.update(updateProduct.id, updateProduct);
  };
  const onHandleRemove = async (id) => {
    try {
      const { data } = await productsApiRequest.remove(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
      window.alert("Delete Successfully!!");
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

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
  const onHandleAddBrand = async (brand) => {
    try {
      const { data } = await brandsApiRequest.create(brand);
      setBrands([...brands, data]);
      window.alert("Add Successfully!!");
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  const onHandleUpdateBrand = (updateBrand) => {
    const newBrands = brands.map(
      (brand) => (brand.id === updateBrand.id ? updateBrand : brand) // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    // localStorage.setItem("products", JSON.stringify(newProducts));
    setBrands(newBrands);
    window.alert("Update successfully!!");
    brandsApiRequest.update(updateBrand.id, updateBrand);
  };
  const onHandleRemoveBrand = async (id) => {
    try {
      const { data } = await brandsApiRequest.remove(id);
      const newBrands = brands.filter((brand) => brand.id !== id);
      setBrands(newBrands);
      window.alert("Delete Successfully!!");
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

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
        const { data } = await shopCartApiRequest.getAll();
        setShopCarts(data);
      } catch (error) {
        console.log("Failed to request API: ", error);
      }
    };
    getShopCarts();
  }, []);
  const onHandleAddShopCart = async (shopCart) => {
    try {
      const { data } = await shopCartApiRequest.create(shopCart);
      setShopCarts([...shopCarts, data]);
      // window.alert("Add Successfully!!");
      console.log("thêm shopcart");
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const getCustomers = async () => {
      try {
        const { data } = await customerApiRequest.getAll();
        setCustomers(data);
      } catch (error) {
        console.log("Failed to request API: ", error);
      }
    };
    getCustomers();
  }, []);
  const onHandleAddCustomer = async (customer) => {
    try {
      const { data } = await customerApiRequest.create(customer);
      setCustomers([...customers, data]);
      // window.alert("Add Successfully!!");
      console.log("thêm customer");
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const { data } = await blogApiRequest.getAll();
        // console.log(data);
        setBlogs(data);
      } catch (error) {
        console.log("Failed to request API: ", error);
      }
    };
    getBlogs();
  }, []);

  const onHandleAddBlog = async (blog) => {
    try {
      const { data } = await blogApiRequest.create(blog);
      setBlogs([...blogs, data]);
      window.alert("Add Successfully!!");
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  const onHandleUpdateBlog = (updateBlog) => {
    const newBlogs = blogs.map(
      (blog) => (blog.id === updateBlog.id ? updateBlog : blog) // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    // localStorage.setItem("products", JSON.stringify(newProducts));
    setBlogs(newBlogs);
    window.alert("Update successfully!!");
    blogApiRequest.update(updateBlog.id, updateBlog);
  };
  const onHandleRemoveBlog = async (id) => {
    try {
      const { data } = await blogApiRequest.remove(id);
      const newBlogs = blogs.filter((blog) => blog.id !== id);
      setBlogs(newBlogs);
      window.alert("Delte Successfully!!");
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  return (
    <div className="App">
      <Routers
        products={products}
        brands={brands}
        categories={categories}
        shopCarts={shopCarts}
        customers={customers}
        blogs={blogs}
        onAdd={onHandleAdd}
        onRemove={onHandleRemove}
        onUpdate={onHandleUpdate}
        onAddBrand={onHandleAddBrand}
        onRemoveBrand={onHandleRemoveBrand}
        onUpdateBrand={onHandleUpdateBrand}
        onAddShopCart={onHandleAddShopCart}
        onAddCustomer={onHandleAddCustomer}
        onAddBlog={onHandleAddBlog}
        onRemoveBlog={onHandleRemoveBlog}
        onUpdateBlog={onHandleUpdateBlog}
      />
    </div>
  );
}

export default App;
