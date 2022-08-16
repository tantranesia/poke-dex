import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import svg
import forward from '../style/svg/forward.svg';
import close from '../style/svg/close.svg';

function Confirmation() {
  let { name } = useParams();
  const [stock, setStock] = useState(0);
  const data = JSON.parse(localStorage.getItem('update'));
  const [notes, setNotes] = useState('');
  const [finalData, setFinalData] = useState([
    {
      total: 0,
      notes: notes,
      date: '',
      time: '',
      currentStock: '',
      name: '',
    },
  ]);
  //   handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const json = JSON.parse(localStorage.getItem('data'));
    json.push({
      total: data.total,
      notes: notes,
      date: data.date,
      time: data.time,
      currentStock: stock,
      name: name,
    });
    // json.shift();
    setFinalData(json);
    console.log(finalData);
    window.location.href = `/${name}`;
  };

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(finalData));
  }, [finalData]);
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_16.666666%) justify-center m-auto relative phone:mx-6">
      <form onSubmit={handleSubmit}>
        <p className="font-bold text-4xl invisible md:visible phone:text-sm">
          Konfirmasi update stok
        </p>
        <div className="visible md:invisible flex flex-row absolute top-6 gap-6">
          <Link to="/">
            <img src={close} alt="close" />
          </Link>
          <p className="font-bold text-lg">{name}</p>
        </div>
        <p className="font-bold text-lg visible md:invisible mt-16">
          {' '}
          Konfirmasi update stok
        </p>
        <div className="mt-28 phone:mt-2">
          <p className="text-lg phone:text-sm">Selisih</p>
          <p className="text-3xl phone:text-xl">+{data.total} pcs</p>
        </div>
        <div className="my-10 grid grid-rows-1 grid-flow-col items-center">
          <div>
            <p className="text-lg phone:text-sm">Di sistem</p>
            <p className="text-2xl phone:text-lg">{stock} pcs</p>
          </div>
          <img src={forward} alt="forward" className="w-6 phone:w-4" />
          <div>
            <p className="text-lg phone:text-sm">Hasil update stock</p>
            <p className="text-2xl phone:text-lg">
              {parseInt(data.total) + parseInt(stock)} pcs
            </p>
          </div>
        </div>
        <div className="my-4">
          <table className="grid grid-cols-1 table-auto py-3 divide-y-2">
            <tr className="grid grid-cols-12 gap-2 py-3 text-left text-lg phone:text-sm">
              <th className="col-span-3">Keterangan</th>
              <th className="col-span-7">Detail</th>
              <th className="col-span-2">Jumlah</th>
            </tr>
            <tr className="grid grid-cols-12 gap-2 py-3 text-left text-lg phone:text-sm">
              <td className="text-frm-primary col-span-3">
                Hasil update stock
              </td>
              <td className="col-span-7">
                {data.pcs} pcs, {data.lusin} lusin (12s)
              </td>
              <td className="col-span-2">
                {parseInt(data.total) + parseInt(stock)} pcs
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p className="font-bold text-lg phone:text-sm">Catatan</p>
          <input
            placeholder="Tulis disini"
            className="w-full border border-frm-grey rounded-lg my-6 h-[80px] p-2"
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="grid grid-rows-1 grid-flow-col justify-items-end pt-10">
          <button
            className="bg-frm-primary p-4 text-frm-white w-[120px] text-center font-bold rounded-lg col-span-11 phone:w-[80px] phone:p-2"
            type="submit"
          >
            Simpan
          </button>
          <button className="bg-frm-white border border-frm-grey p-4 text-frm-primary w-[120px] text-center font-bold rounded-lg phone:w-[80px] phone:p-2">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}

export default Confirmation;
