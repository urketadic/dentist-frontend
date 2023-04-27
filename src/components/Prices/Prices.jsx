import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header'; 
import './Prices.scss'
import { useTranslation } from "react-i18next";

const Prices =()=>{

    const { t, i18n } = useTranslation();

    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);

    useEffect(() => {
        const initialPrices = t("pricelist:prices", { returnObjects: true });
        setAllData(initialPrices);
        setFilteredData(initialPrices);
        }, [t, i18n.language]);

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = allData.filter((data) => {
          return data.description.toLowerCase().search(value) !== -1;
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
                        <th> {t("price")} </th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.length == 0 ? 
                        <p className="error">{t("nepostoji")}</p> :  
                        filteredData.map((value,index)=>{
                            return(
                                <tr key={value.code}>
                                    <td>{value.description}</td>
                                    <td>{value.price} €</td>
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