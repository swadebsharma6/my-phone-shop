import { useEffect, useState } from "react";
import FavPhoneCard from "../FavPhoneCard/FavPhoneCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noData, setNoData] = useState("");
  const[isSeeMore, setIsSeeMore] = useState(false);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItems) {
      setFavorites(favoriteItems);
    } else {
      setNoData("No data Found");
    }
  }, []);
  // console.log(favorites)

  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNoData("No data Found Here");
  };

  console.log(isSeeMore)

  return (
    <div>
      {noData ? (
        <p className="h-[80vh] flex justify-center items-center text-xl font-semibold text-red-600">
          {noData} !!
        </p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <button
              onClick={handleRemove}
              className="btn btn-wide block mx-auto my-10"
            >
              Delete All favorites
            </button>
          )}
          <div className="grid md:grid-cols-2 gap-4">
            { 
                isSeeMore ?  favorites.map((phone) => ( <FavPhoneCard
                 key={phone.id}
                  phone={phone}></FavPhoneCard>
            )) : favorites.slice(0, 4).map((phone) => ( <FavPhoneCard
                key={phone.id}
                 phone={phone}></FavPhoneCard>
           ))
        }
          </div>

          <div className="py-5">
          {
            favorites.length >4 && <button onClick={()=> setIsSeeMore(!isSeeMore)} className="btn btn-outline block mx-auto btn-secondary">{isSeeMore ? 'See Less' : 'See More'}</button>
          }
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
