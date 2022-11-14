import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header'; 
import cenovnik from '../../cenovnik.json';
import './Prices.scss'

const Prices =()=>{

    let response = cenovnik;
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);

    useEffect(() => {
        setAllData(response);
        setFilteredData(response);
        }, []);

    // console.log(response);

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = allData.filter((data) => {
        return data.name.search(value) != -1;
        });

        if(filteredData.length == 0) {
            
        }

        setFilteredData(result);
    }

    return(
        <div>       
             <Header/>
            <div style={{ margin: '0px auto'}}>
                <div style={{ marginTop: '1em' }} className="priceheader">
                    <input type="text" placeholder='PRETRAGA' onChange={(event) =>handleSearch(event)} />
                </div>

                <table className="pricelist">
                    <thead>
                        <tr>
                        <th>Naziv artikla</th>
                        <th>Cena</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.length == 0 ? 
                        <p className="error">Ne postoji takav artikal. Posaljite nam poruku ako imate posebnih zahteva.</p> :  
                        filteredData.map((value,index)=>{
                            return(
                                <tr key={value.code}>
                                    <td>{value.name}</td>
                                    <td>{value.price} RSD</td>
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