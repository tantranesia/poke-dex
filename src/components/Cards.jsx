import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from '../utils/axios';
import { handleList } from '../redux/action/list';
import { Link } from 'react-router-dom';

function Cards() {
  const [stock, setStock] = useState(1);
  const pokes = useSelector((state) => state.pokes.pokes.results);
  const dispatch = useDispatch();
  const getPokes = () => (dispatch) => {
    axios
      .get(`/pokemon`)
      .then((res) => dispatch(handleList(res.data)))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    dispatch(getPokes());
  }, []);
  return (
    <div className="w-[640px] divide-y phone:w-[300px]">
      <div className="flex justify-between font-bold py-3">
        <p>Name</p>
        <p>Stock</p>
      </div>
      {pokes === undefined ? (
        <p>No data yet</p>
      ) : (
        pokes.map((col, idx) => {
          return (
            <Link to={`/${col.name}`}>
              <div className="flex justify-between py-3 font-bold" key={idx}>
                <p className="text-frm-primary">{col.name}</p>
                <p>{stock} pcs</p>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}

export default Cards;
