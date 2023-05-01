import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header'; 
import './Prices.scss'
import { useTranslation } from "react-i18next";

const Prices =({ theme } )=>{

    const { t, i18n } = useTranslation();

    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortKey, setSortKey] = useState('price');

    const normalizeString = (str) => {
        const map = {
          'ć': 'c',
          'č': 'c',
          'đ': 'd',
          'š': 's',
          'ž': 'z',
        };

        return str
        .toLowerCase()
        .replace(/[ćčđšž]/g, (match) => map[match] || match);
    };

    const sortData = (key) => {
        const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(order);
        setSortKey(key);
      
        const sortedData = [...filteredData].sort((a, b) => {
          if (order === 'asc') {
            return a[key] - b[key];
          } else {
            return b[key] - a[key];
          }
        });
      
        setFilteredData(sortedData);
      };

    useEffect(() => {
        const initialPrices = t("pricelist:prices", { returnObjects: true });
        setAllData(initialPrices);
        setFilteredData(initialPrices);
        }, [t, i18n.language]);

    const handleSearch = (event) => {
        let value = normalizeString(event.target.value);
        let result = [];
        result = allData.filter((data) => {
          return normalizeString(data.description).search(value) !== -1;
        });
      
        if (filteredData.length === 0) {
          // Do something if no results are found
        }
      
        setFilteredData(result);
    }

    return(
        <div>       
             <Header/>
            <div style={{ margin: '0px auto'}}>
                <div style={{ marginTop: '1em' }} className="priceheader">
                    <input type="text" placeholder={t("pretraga")} onChange={(event) =>handleSearch(event)} />
                </div>

                <table className="pricelist">
                    <thead>
                        <tr>
                        <th> {t("procedura")} </th>
                        <th onClick={() => sortData('price')}>
                            {t("price")}
                            {sortKey === 'price' && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
                        </th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.length == 0 ? 
                        <p className="error">{t("nepostoji")}</p> :  
                        filteredData.map((value,index)=>{
                            return(
                                <tr key={value.code}>
                                    <td>{value.description}</td>
                                    <td className='pricerow'>{value.price} {t("valuta")}</td>
                                </tr>
                            )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Prices