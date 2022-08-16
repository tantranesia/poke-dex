import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Modal(props) {
  let { name } = useParams();
  const [qty, setQty] = useState(0);
  const [bundle, setBundle] = useState(0);
  const [items, setItems] = useState({
    total: 0,
    pcs: 0,
    lusin: 0,
    time: '',
    date: '',
    name: ''
  });

  const lusin = bundle * 12;

  //   handle time
  let date = new Date();
  let today = date.toLocaleDateString();
  var time =
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems(() => ({
      total: parseInt(lusin) + parseInt(qty),
      pcs: qty,
      lusin: bundle,
      time: time,
      date: today,
      name: name
    }));
    console.log(items);
    window.location.href = `/${name}/confirmation`;
  };

  useEffect(() => {
    localStorage.setItem('update', JSON.stringify(items));
  }, [items]);

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-60 transition-opacity flex items-center justify-center gap-5"
      show={props.show}
    >
      <form onSubmit={handleSubmit}>
        <div className="bg-frm-white w-[400px] rounded-lg flex flex-col items-center py-6 px-2 phone:w-[350px]">
          <p className="font-bold text-xl phone:text-lg">Update Stock</p>
          <p className="text-center">
            Masukkan jumlah stok yang tersedia di rak saat ini.
          </p>
          <div className="grid grid-rows-1 my-10 divide-y">
            <div className="grid grid-rows-1 grid-flow-col gap-12 font-bold phone:gap-4">
              <p className="col-span-3">Kemasan</p>
              <p className="col-span-3 text-center">Jumlah</p>
              <p>Stock</p>
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-12 font-bold items-center py-3">
              <p className="col-span-3">Pcs</p>
              <div className="col-span-3 text-center">
                <div className="grid grid-rows-1 grid-flow-col items-center">
                  <p>1 X</p>
                  <input
                    className="w-[48px] p-2 border border-frm-grey rounded-lg"
                    onChange={(e) => setQty(e.target.value)}
                  />
                  <p>=</p>
                </div>
              </div>
              <p>{qty}</p>
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-12 font-bold items-center py-3">
              <p className="col-span-3">Lusin</p>
              <div className="col-span-3 text-center">
                <div className="grid grid-rows-1 grid-flow-col items-center">
                  <p>12 X</p>
                  <input
                    className="w-[48px] p-2 border border-frm-grey rounded-lg"
                    onChange={(e) => setBundle(e.target.value)}
                  />
                  <p>=</p>
                </div>
              </div>
              <p>{lusin}</p>
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-12 items-center py-3">
              <p className="col-span-6">
                <span className="font-bold">Total stok </span>(dalam pcs)
              </p>
              <p>{parseInt(lusin) + parseInt(qty)}</p>
            </div>
            <div className="grid grid-rows-1 grid-flow-col justify-items-end pt-16">
              <button
                className="bg-frm-primary after:bg-frm-primary p-4 border text-frm-white w-[100px] text-center font-bold rounded-lg col-span-6 phone:w-[80px] phone:p-2"
                type="submit"
              >
                Simpan
              </button>
              <button
                className="bg-frm-white border border-frm-grey p-4 text-frm-primary w-[100px] text-center font-bold rounded-lg  phone:w-[80px] phone:p-2"
                onClick={props.close}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
