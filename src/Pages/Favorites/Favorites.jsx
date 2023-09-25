import { useEffect, useState } from 'react';
import FavPhoneCard from '../FavPhoneCard/FavPhoneCard';

const Favorites = () => {
    const[favorites, setFavorites] = useState([]) ;
    const[noData, setNoData] = useState('');


    useEffect(()=>{
        
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));
       if(favoriteItems){
        setFavorites(favoriteItems)
       }
       else{
        setNoData('No data Found')
       }

    }, []);
    // console.log(favorites)

    const handleRemove =()=>{
        localStorage.clear();
        setFavorites([]);
        setNoData('No data Found Here')
    }

    return (
        <div>
          {
            noData ? <p className='h-[80vh] flex justify-center items-center text-xl font-semibold text-red-600'>{noData} !!</p> : <div>

                {favorites.length > 0 &&  <button onClick={handleRemove} className="btn btn-wide block mx-auto my-10">Delete All favorites</button>}
                <div className='grid md:grid-cols-2 gap-4'>
                {favorites.map(phone => <FavPhoneCard
                    key={phone.id}
                    phone={phone}
                    ></FavPhoneCard> )}
                </div>

            </div>
          }
        </div>
    );
};

export default Favorites;