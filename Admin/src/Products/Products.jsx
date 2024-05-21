import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import ProductAPI from "../API/ProductAPI";
import Pagination from "./Component/Pagination";
import convertMoney from "../convertMoney";
import Wrapper from "../Wrapper/Wrapper";

function Products(props) {
  const [products, setProducts] = useState([]);

  const [pagination, setPagination] = useState({
    page: "1",
    count: "8",
    search: "",
    category: "all",
  });

  const onChangeText = (e) => {
    const value = e.target.value;

    setPagination({
      page: pagination.page,
      count: pagination.count,
      search: value,
      category: pagination.category,
    });
  };

  //Tổng số trang
  const [totalPage, setTotalPage] = useState();

  //Hàm này dùng để thay đổi state pagination.page
  //Nó sẽ truyền xuống Component con và nhận dữ liệu từ Component con truyền lên
  const handlerChangePage = (value) => {
    //console.log("Value: ", value);

    //Sau đó set lại cái pagination để gọi chạy làm useEffect gọi lại API pagination
    setPagination({
      page: value,
      count: pagination.count,
      search: pagination.search,
      category: pagination.category,
    });
  };

  //Gọi hàm useEffect tìm tổng số sản phẩm để tính tổng số trang
  //Và nó phụ thuộc và state pagination
  useEffect(() => {
    const fetchAllData = async () => {
      const res = await ProductAPI.getProducts();
      setProducts(res);
      //Tính tổng số trang = tổng số sản phẩm / số lượng sản phẩm 1 trang
      const totalPage = Math.ceil(
        parseInt(res.length) / parseInt(pagination.count)
      );
      //console.log(totalPage);

      setTotalPage(totalPage);
    };

    fetchAllData();
  }, [pagination]);

  //Gọi hàm Pagination
  useEffect(() => {
    const fetchData = async () => {
      const params = {
        page: pagination.page,
        count: pagination.count,
        search: pagination.search,
        category: pagination.category,
      };

      const query = queryString.stringify(params);

      const newQuery = "?" + query;

      const res = await ProductAPI.getProducts();

      setProducts(res);
    };

    fetchData();
  }, [pagination]);

  const deleteHandler = (e) => {
    const prodId = e.target.value;
    const productElement = e.target.closest("tr");
    const result = window.confirm("Bạn chắc chắn muốn xoá sản phẩm ?");
    if (result) {
      ProductAPI.getDelete({ prodId: prodId })
        .then((data) => {
          if (data === "not admin") {
            alert("Chỉ Admin được xoá sản phẩm!");
            return;
          } else {
            productElement.parentNode.removeChild(productElement);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Wrapper>
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div>
                <div className="card-body">
                  <h4 className="card-title">Products</h4>
                  <input
                    className="form-control w-25"
                    onChange={onChangeText}
                    type="text"
                    placeholder="Enter Search!"
                  />
                  <br />
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered no-wrap">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Image</th>
                          <th>Category</th>
                          <th width="180px">Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products &&
                          products.map((item) => (
                            <tr key={item._id}>
                              <td>{item._id}</td>
                              <td>{item.name}</td>
                              <td>{convertMoney(item.price)}</td>
                              <td>
                                <img
                                  src={` ${item.img1}`}
                                  style={{
                                    height: "60px",
                                    width: "60px",
                                  }}
                                  alt=""
                                />
                              </td>
                              <td>{item.category}</td>
                              <td>
                                <Link
                                  to={`/product/${item._id}`}
                                  style={{
                                    cursor: "pointer",
                                    color: "white",
                                  }}
                                  className="btn btn-success"
                                >
                                  Update
                                </Link>
                                &nbsp;
                                <input
                                  type="hidden"
                                  value={item._id}
                                  name="productId"
                                />
                                <button
                                  style={{
                                    cursor: "pointer",
                                    color: "white",
                                  }}
                                  className="btn btn-danger"
                                  id="btn"
                                  name="btn"
                                  type="button"
                                  value={item._id}
                                  onClick={deleteHandler}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <Pagination
                      pagination={pagination}
                      handlerChangePage={handlerChangePage}
                      totalPage={totalPage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer text-center text-muted"></footer>
      </div>
    </Wrapper>
  );
}

export default Products;
