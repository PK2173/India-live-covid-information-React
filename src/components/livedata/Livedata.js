import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./livedata.css";

export default function Livedata() {
    const [maindata, setmaindata] = useState([])
  useEffect(() => {
    try {
      axios.get('https://data.covid19india.org/data.json').then((result) => {
        setmaindata(result.data.statewise)
      console.log(result.data.statewise);
      }).catch((err) => {
      console.log(err);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="livedatacontainer">
      <h1>INDIA LIVE COVID INFO</h1>
      <div className="headinslags">
        <table className="tablecon">
          <thead>
            <tr>
              <th className="headings">STATE</th>
              <th className="headings">CONFIRMED</th>
              <th className="headings">RECOVERED</th>
              <th className="headings">DEATHS</th>
              <th className="headings">ACTIVE</th>
              <th className="headings">UPDATE</th>
            </tr>
          </thead>
          {maindata.map((e)=>{
            return(
                <tr>
            <td>{e.state}</td>
            <td>{e.confirmed}</td>
            <td>{e.recovered}</td>
            <td>{e.deaths}</td>
            <td>{e.active}</td>
            <td>{e.lastupdatedtime}</td>
          </tr>
            )
          })}
          
        </table>
      </div>
    </div>
  );
}
