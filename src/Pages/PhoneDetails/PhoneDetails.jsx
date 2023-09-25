import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCart from "../../components/Phones/PhoneCart";



const PhoneDetails = () => {
  const [phone, setPhone] = useState({});


    const {id} = useParams();
    
    const phones = useLoaderData();
 

    useEffect(()=>{

      const findPhone = phones.find(phone => phone.id === id);
     

      setPhone(findPhone)

    }, [id, phones]);

    console.log(phone)

     return (
       <div >
       <PhoneCart phone={phone}></PhoneCart>
       </div> 
    );
};

export default PhoneDetails;