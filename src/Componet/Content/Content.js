import React,{useEffect, useState} from 'react';
import {Row,Col ,Container} from 'react-bootstrap'
import './Content.css';
import fakeData from '../../fakeDate'
import Booking from '../Booking/Booking';
import Sajek from '../../Image/cox.png';
import Sreemongol from '../../Image/Sreemongol.png';
import sundorbon from '../../Image/sundorbon.png';
import Header from '../Header/Header'

const Content = (props) => {
    
    const all = fakeData.slice(0,3);
    const [data,setData] = useState(all)
    const [filter,setFilter] = useState([])

    useEffect(()=>{
     const allSet = data.filter((pd) => pd.category === 'Cox' )
     setFilter(allSet)
     document.getElementById('Sundarban').classList.remove('active');
     document.getElementById('Cox').classList.add('active'); 
     document.getElementById('Sreemangal').classList.remove('active');
    },[data])

    const hendleBook = () =>{
        const setBook = data.filter(pd => pd.category === 'Cox')
        setFilter(setBook)
        document.getElementById('Sundarban').classList.remove('active');
        document.getElementById('Cox').classList.add('active'); 
        document.getElementById('Sreemangal').classList.remove('active');
    }
    const hendleBooks = () =>{
        const setBook = data.filter(pd => pd.category === 'Sreemangal')
        setFilter(setBook)
        
        document.getElementById('Sundarban').classList.remove('active');
        document.getElementById('Sreemangal').classList.add('active'); 
        document.getElementById('Cox').classList.remove('active');
         
    }
    const hendleBookz = () =>{
        const setBook = data.filter(pd => pd.category === 'Sundarban')
        setFilter(setBook)
        
        document.getElementById('Cox').classList.remove('active');
        document.getElementById('Sundarban').classList.add('active'); 
        document.getElementById('Sreemangal').classList.remove('active');
         
    }
 
    return (
        <div className = "home " > 
            <div className="layer"> 
        <div className="full-content ">  
        <Container>
            <Header></Header>
            <Row className="headers">
                <Col md={5}>
                 {
                     filter.map(dt =>   <Booking 
                        key={dt.id}
                        book={dt}  ></Booking>  )
                }
               </Col> 
               <Col md={6}>      
               <div className="all_content ">

                  <div id="Cox" onClick={hendleBook} className="content-img home__destination-display-item mr-3">
                   <img className="img-fluid" src={Sajek} alt="" />
                     <div className="home__destination-display-item-overlay">
                       <h4 >Cox's Bazar</h4>
                    </div>
                  </div>   

                    <div  id="Sreemangal" onClick={hendleBooks} className="content-img home__destination-display-item mr-3">
                   <img className="img-fluid" src={Sreemongol} alt="" />
                   <div className="home__destination-display-item-overlay">
                      <h4 >Sreemangal</h4>
                     </div>
                   </div>  


                    <div id="Sundarban" onClick={hendleBookz} className="content-img home__destination-display-item">
                   <img className="img-fluid" src={sundorbon} alt="" />
                   <div className="home__destination-display-item-overlay">
                    <h4 >Sundarban</h4>
                    </div>
                    </div> 


                 </div>
               </Col>
            </Row>
             </Container>
        </div> 
        </div> 
        </div> 
    );
};

export default Content;