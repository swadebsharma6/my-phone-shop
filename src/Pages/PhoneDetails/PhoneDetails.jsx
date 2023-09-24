import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const PhoneDetails = () => {

    const [phone, setPhone] = useState('');

           const phnId = useParams();
           const {id} = phnId;
    
           const phones = useLoaderData();

           useEffect(()=>{
            const select = phones.find(phn => phn.id ===id);
            setPhone(select);
           }, [id, phones]);

           const { image, phone_name, brand_name, price,} = phone || {};
           
     return (
        <div className="h-[80vh] flex justify-center items-center">
            <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={image}
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                {phone_name} ||  Price:<span>${price}</span>
              </h6>
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {brand_name}
              </h4>
              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software company
                selling licenses. Yet its own business model disruption is only part of
                the story
              </p>
              <div>
                <button className="btn btn-secondary">Add to Favorite</button>
              </div>
            </div>
          </div>
            </div>
        </div>
    );
};

export default PhoneDetails;