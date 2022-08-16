import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import SVG
import back from '..//style/svg/back.svg';
// import component
import Modal from '../components/Modal';

function Details() {
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState([]);
  let { name } = useParams();
  const data = JSON.parse(localStorage.getItem('data'));
  const getData = () => {
    const getData = data.filter((col) => col.name === name);
    setDetail(getData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col m-12 phone:m-6 relative">
      <div className="flex desktop:items-center justify-between phone:flex-col">
        <div className="flex gap-10 items-center phone:mb-6 phone:drop-shadow-2xl">
          <Link to={'/'}>
            <img src={back} alt="back" />
          </Link>
          <p className="text-frm-primary font-bold phone:text-frm-black">
            {' '}
            Stock Pokemon
          </p>
        </div>
        <button
          className="bg-frm-white border border-frm-grey text-frm-primary p-3 rounded-lg font-bold phone:mt-28 phone:w-40"
          onClick={() => setShow(true)}
        >
          Update Stock
        </button>
      </div>
      <p className="font-bold text-4xl phone:absolute phone:top-10 phone:text-xl phone:mt-10">
        {name}
      </p>
      <div className="my-14">
        <p className="text-lg phone:text-sm">Remining Stock</p>
        <p className="text-3xl">
          {/* {parseInt(col?.total) + parseInt(col?.currentStock) || 0} pcs */}
        </p>
      </div>
      <div className="mb-14">
        <p className="text-lg font-bold phone:text-sm">Riwayat Stock</p>
        <p className="text-lg phone:text-sm">satuan stock dalam pcs</p>
      </div>
      <div className="visible md:invisible grid grid-rows-1 my-2 divide-y-2">
        {detail.map((col, idx) => {
          return (
            <>
              <div className="grid grid-rows-12 grid-flow-col font-bold">
                <p className="col-span-8">{col?.date || ''}</p>
                <p className="col-span-2">Jmlh</p>
                <p className="col-span-2">Stock</p>
              </div>
              <div className=" grid grid-rows-12 grid-flow-col my-2 divide-y">
                <div className="col-span-8 gap-y-2">
                  <p className="text-sm">{col?.time || ''}</p>
                  <p className="text-frm-primary">Update Stock</p>
                  <p className="text-sm">{col?.notes || ''}</p>
                </div>
                <p className="col-span-2 text-frm-primary">
                  +{col?.total || ''}
                </p>
                <p className="col-span-2">
                  {parseInt(col?.total) + parseInt(col?.currentStock) || 0}
                </p>
              </div>
            </>
          );
        })}
      </div>
      <table className="grid grid-cols-1 table-auto py-3 visible phone:invisible">
        <tr className="grid grid-cols-12 gap-2 py-3 text-left">
          <th className="col-span-2">Waktu</th>
          <th className="col-span-2">Kegiatan</th>
          <th className="col-span-6 text-left">Catatan</th>
          <th>Jumlah</th>
          <th>Stock</th>
        </tr>

        {detail.map((col, idx) => {
          return (
            <tr className="hover:bg-gray-100 grid grid-cols-12 gap-2 text-left py-3 divide-y">
              <td className="col-span-2">
                {col?.date || ''} {col?.time || ''}
              </td>
              <td className="col-span-2 text-frm-primary font-bold">
                Update Stock
              </td>
              <td className="col-span-6 text-left">{col?.notes || ''}</td>
              <td>+{col?.total || ''}</td>
              <td>{parseInt(col?.total) + parseInt(col?.currentStock) || 0}</td>
            </tr>
          );
        })}
      </table>

      {show ? <Modal show={show} close={() => setShow(false)} /> : null}
    </div>
  );
}

export default Details;
