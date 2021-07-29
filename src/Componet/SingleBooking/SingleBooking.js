import React from "react";
import { useParams } from 'react-router';
import fakeData from '../../fakeDate'
import './SingleBooking.css'  
import {Row,Col ,Container} from 'react-bootstrap' 
import { Auth } from "../useContext/useContext"; 
import { useForm } from "react-hook-form";
import {  useHistory } from "react-router-dom"; 
import Header from '../Header/Header' 
 
const SingleBooking = () => {  

    const { register, handleSubmit,  reset, formState: { errors } } = useForm();
    const history = useHistory()
    const {Category} = useParams(); 
    const book = fakeData.find(pd => pd.category === Category);
    const { name ,Description} = book;  

     const auth = Auth();
     const { namez,setnamez,date,setDate,dates,setDates,users} = auth; 

     const hendleSubmit = () =>{ 
            
          const allUsers ={ 
              Name:namez,
              Date:date,
              Dates:dates,
            }     
            if(users.email){
                history.push('/X/'+Category)
            }else{
                history.push('/login')
            }  
            localStorage.setItem("data", JSON.stringify(allUsers)) 
            reset();
       } 
      
    
        
     
    return (
        <div>
            <div className = "home " > 
            <div className="layer"> 
            <Container>
                <Header ></Header>
            <div className="booking-area">
                 <Row>
                 <Col md={4} className="mr-5">
                 <h1>{name}</h1>
                  <p  className="mt-3 pb-2">{Description}</p>
                 </Col>
                 <Col md={6} className="ml-5">
                     <div className="book-area">  
                      <form   onSubmit={handleSubmit(hendleSubmit)}  >
                         <label  for="origins">Origin</label> <br />

                         <input  id="origins" {...register("namez", { required: true,minLength:5 })}   type="text"   name="namez"
                         value={namez} onChange={(e)=> setnamez(e.target.value)}   placeholder="Origin"   />    
                         
                             {errors.namez && <span className="mt-1 error">Please type minimum five character</span>}

                            <br/>
                         <label className="mt-2"  for="origins">Destination</label> <br />
                         <input  id="origins" name="origin" disabled value={name} className="origin" />
                         
                  <Row> 
                     <Col md={6}>
                        <label className="mt-2"  for="originss">From</label> <br />
                         <input  className="data-pic"  type="date"   id="originss"name="date"  
                        value={date} onChange={(e)=> setDate(e.target.value)} 
                        required /> 
                       
   
                         </Col>
                        <Col md={6}>
                        <label className="mt-2"  for="originz">To</label> <br />
                         <input  type="date" id="originz"   name="dates"
                          value={dates} onChange={(e)=> setDates(e.target.value)} 
                         required />    

                             </Col>
                         </Row>   
                         <input type="submit"   className="mt-4 Books" value="Start Booking" />   
                      </form>  
                     </div>    
                 </Col>
                </Row> 
            </div>
           </Container>
        </div>
        </div>
        </div>
    );
};

export default SingleBooking;