import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './post.css';
import SeePost from '../allprouct/seeAllProduct/seePost/SeePost';

export default function BrandPost({ brandId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/products?filters[categories][id][$eq]=${brandId}&populate=*`;
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        });
        setData(res.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [brandId]);

  return (
    <div className="wrapcart">
      {loading ? <p>Loading...</p> : error ? <p>Error loading products.</p> : data.length > 0 ? (
        data.map((item) => (
          <SeePost item={item} key={item.id} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
