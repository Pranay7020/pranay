import React, { useState, useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const getData = (url) => {
  return axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
};

const SingleUserPage = () => {
  const [data, setData] = useState({});

  console.log("data:", data);

  const { productid } = useParams();
  const apiUrl = `https://fakestoreapi.com/products/${productid}`;

  useEffect(() => {
    getData(apiUrl)
      .then((res) => setData(res.data))
      .catch((err) => console.log("err:", err));
  }, [productid]);

  return (
    <div>
      <div
        key={data.id}
        style={{
          border: "2px solid black",
          padding: "15px",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          textDecoration: "none",
          color: "black",
        }}
      >
        <h4 style={{ textAlign: "center" }}>{data.title}</h4>

        <img
          src={data.image}
          alt="product"
          style={{ width: "210px", margin: "auto", display: "block" }}
        />

        <h3 style={{ textTransform: "capitalize" }}>Title: {data.title}</h3>
        <h3>Price: ${data.price}</h3>
        <h3 style={{ textTransform: "capitalize" }}>
          Category: {data.category}
        </h3>

        <p>
          <b>
            <u>Description: </u>
          </b>
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default SingleUserPage;
