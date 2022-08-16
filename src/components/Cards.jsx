import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from '../utils/axios';
import { handleList } from '../redux/action/list';
import { Link } from 'react-router-dom';
import { Context } from '../pages/Home';

function Cards() {
  const { search } = useContext(Context);
  const [stock, setStock] = useState(1);
  const [detail, setDetail] = useState([]);
  const pokes = useSelector((state) => state.pokes.pokes.results);
  const dispatch = useDispatch();
  // api call
  const getPokes = () => (dispatch) => {
    axios
      .get(`/pokemon`)
      .then((res) => dispatch(handleList(res.data)))
      .catch((err) => console.log(err));
  };
  // filter data
  const getData = () => {
    const getData = pokes.filter((col) => {
      return col.name.toLowerCase().includes(search.toLowerCase());
    });
    setDetail(getData);
  };

  useEffect(() => {
    dispatch(getPokes());
    getData();
  }, [search]);
  return (
    <div className="w-[640px] divide-y phone:w-[300px]">
      <div className="flex justify-between font-bold py-3">
        <p>Name</p>
        <p>Stock</p>
      </div>
      {pokes === undefined ? (
        <p>No data yet</p>
      ) : detail.length > 0 ? (
        detail.map((col, idx) => {
          return (
            <Link to={`/${col.name}`}>
              <div className="flex justify-between py-3 font-bold" key={idx}>
                <p className="text-frm-primary">{col.name}</p>
                <p>{stock} pcs</p>
              </div>
            </Link>
          );
        })
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
