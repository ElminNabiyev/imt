import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { deleteDatas, getDatas } from "../../service/service";

function Admin() {
  const [datas, setDatas] = useState([]);
  const [inp, setInp] = useState("");

  async function getAllDatas() {
    const data =await getDatas();
    setDatas(data);
  }
  async function deleteData(id) {
    const data =await deleteDatas(id);
    getAllDatas()
    return data
  }

  useEffect(() => {
    getAllDatas();
  }, []);

  function sortAZ(category) {
    setDatas(datas.toSorted((a,b) => (a[category] > b[category]) ? 1 : ((b[category] > a[category]) ? -1 : 0)))
  }
  function sortZA(category) {
    setDatas(datas.toSorted((a,b) => (a[category] < b[category]) ? 1 : ((b[category] < a[category]) ? -1 : 0)))
  }
  return (
    <>
      <Helmet>
        <title>Admin Panel</title>
      </Helmet>
      <input
        onChange={(e) => setInp(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      <button onClick={()=>sortAZ("name")}>Sort by A-Z</button>
      <button onClick={()=>sortZA("name")}>Sort by Z-A</button>
      <button onClick={()=>sortAZ("price")}>Sort by price(desc)</button>
      <button onClick={()=>sortZA("price")}>Sort by price(asc)</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price(with Dollar)</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        {datas
          .filter((x) =>
            x.name.toLowerCase().includes(inp.toLowerCase().trim())
          )
          .map((x) => (
            <tbody key={x._id}>
              <tr>
                <td><img style={{width:"30%"}} src={x.imgURL} alt="" />{x.name}</td>
                <td>{x.price}$</td>
                <td>{x.des}</td>
                <td><button onClick={()=>deleteData(x._id)}>Delete</button></td>
              </tr>
            </tbody>
          ))}
      </table>
    </>
  );
}

export default Admin;
