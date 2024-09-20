import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Display";
const User = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUrl();
  }, []);

  const fetchUrl = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/getall");
      setData(res.data.result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Get Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container mt-4">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {data.map((ele) => (
              <div className="col-md-6 mb-4" key={ele._id}>
                <Display ele={ele} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default User;