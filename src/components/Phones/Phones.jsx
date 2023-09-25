import PropTypes from 'prop-types';
import SinglePhone from './SinglePhone';

const Phones = ({phones}) => {
    // console.log(phones)
    return (
        <section>
           <h3 className="text-2xl font-semibold text-center my-5">----Our Phones Collections----</h3> 

           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              phones.map((phone) => <SinglePhone
                key={phone.id}
                phone={phone}
                ></SinglePhone>)
            }
           </div>

        </section>
    );
};



Phones.propTypes = {
    phones: PropTypes.array,
    
}

export default Phones;