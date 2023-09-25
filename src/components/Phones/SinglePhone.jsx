import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SinglePhone = ({phone}) => {

    const {id, image, phone_name, price,} = phone || {};
    
    return (
        <div className='m-4'>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            With plenty of talk and listen time, voice-activated Siri access, and an
            available wireless charging case.
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/phones/${id}`}>
          <button  className="btn btn-primary w-full" type="button" > See Details </button>
          </Link>
        </div>
      </div>
        </div>
    );
};

SinglePhone.propTypes = {
    phone: PropTypes.object,
    
}

export default SinglePhone;