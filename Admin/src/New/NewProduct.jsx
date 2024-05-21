import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProductAPI from "../API/ProductAPI";
import Wrapper from "../Wrapper/Wrapper";

const NewProduct = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const productNameRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const shortdescRef = useRef();
  const longdescRef = useRef();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (
      productNameRef.current.value === "" ||
      categoryRef.current.value === "" ||
      priceRef.current.value === "" ||
      shortdescRef.current.value === "" ||
      longdescRef.current.value === ""
    ) {
      alert("Vui lòng điền đầy đủ thông tin sản phẩm!");
      return;
    }
    if (file === undefined) {
      alert("Vui lòng thêm hình ảnh!");
      return;
    }
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("image", file[i]);
    }
    formData.append("productName", productNameRef.current.value);
    formData.append("category", categoryRef.current.value);
    formData.append("price", priceRef.current.value);
    formData.append("shortdesc", shortdescRef.current.value);
    formData.append("longdesc", longdescRef.current.value);
    await ProductAPI.postAddProduct(formData).then((result) => {
      if (result === "not admin") {
        alert("Chỉ Admin được thêm sản phẩm!");
        return;
      } else {
        alert("Thêm sản phẩm thành công!");
        navigate("/products");
      }
    });
  };

  return (
    <Wrapper>
      <div className="page-wrapper">
        <div className="page-breadcrumb" style={{ margin: "40px 0px" }}>
          <div className="row">
            <form style={{ width: "50%", marginLeft: "100px" }} action="">
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Product Name"
                  ref={productNameRef}
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Category"
                  ref={categoryRef}
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Price"
                  ref={priceRef}
                />
              </div>
              <div class="form-group">
                <label>Short Description</label>
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Enter Short Description"
                  ref={shortdescRef}
                ></textarea>
              </div>
              <div class="form-group">
                <label>Long Description</label>
                <textarea
                  class="form-control"
                  rows="6"
                  placeholder="Enter Long Description"
                  ref={longdescRef}
                ></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlFile1">
                  Upload image (4 images)
                </label>
                <input
                  type="file"
                  name="image"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                  multiple
                  onChange={(e) => setFile(e.target.files)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleAddProduct}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewProduct;
