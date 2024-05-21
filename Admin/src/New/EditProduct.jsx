import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductAPI from "../API/ProductAPI";

const EditProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const params = useParams();
  const prodId = params.id;
 
  const productNameRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const shortdescRef = useRef();
  const longdescRef = useRef();

  const fetchProducts = async () => {
    await ProductAPI.getDetailProduct(prodId).then((res) => {
      setProduct(res);
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", productNameRef.current.value);
    formData.append("category", categoryRef.current.value);
    formData.append("price", priceRef.current.value);
    formData.append("shortdesc", shortdescRef.current.value);
    formData.append("longdesc", longdescRef.current.value);
    await ProductAPI.postEditProduct(formData, prodId).then((result) => {
      if (result === "not admin") {
        alert("Chỉ Admin được chỉnh sửa sản phẩm!");
        return;
      }
    });
    navigate("/products");
  };

  return (
    <div className="page-wrapper">
      <div className="page-breadcrumb">
        <div className="row">
          <form style={{ width: "50%", marginLeft: "40px" }} action="">
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue={product.name}
                ref={productNameRef}
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                className="form-control"
                defaultValue={product.category}
                ref={categoryRef}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                defaultValue={product.price}
                ref={priceRef}
              />
            </div>
            <div class="form-group">
              <label>Short Description</label>
              <textarea
                class="form-control"
                rows="3"
                defaultValue={product.short_desc}
                ref={shortdescRef}
              ></textarea>
            </div>
            <div class="form-group">
              <label>Long Description</label>
              <textarea
                class="form-control"
                rows="6"
                defaultValue={product.long_desc}
                ref={longdescRef}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleEdit}
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
