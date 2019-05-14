import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';

const ticket = props => {
    const {
        origin,
        origin_name,
        destination,
        destination_name,
        departure_date,
        departure_time,
        arrival_date,
        arrival_time,
        carrier,
        stops,
        price,
    } = props;

    return (
        <div>
            <div>
                <div>{carrier}</div>
                <Button clicked={() => alert('click')}>Купить за {price}$</Button>
            </div>
            <div>
                <div>
                    <div>
                        {departure_time}
                    </div>
                    <div>
                        {stops + stops === 1 ? 'Пересадка' : 'Пересадки'}
                        <span></span>
                    </div>
                    <div>
                        {arrival_time}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{origin}, {origin_name}</div>
                        <div>{departure_date}</div>
                    </div>
                    <div>
                        <div>{destination_name}, {destination}</div>
                        <div>{arrival_date}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ticket.propTypes = {
    origin: PropTypes.string,
    origin_name: PropTypes.string,
    destination: PropTypes.string,
    destination_name: PropTypes.string,
    departure_date: PropTypes.string,
    departure_time: PropTypes.string,
    arrival_date: PropTypes.string,
    arrival_time: PropTypes.string,
    carrier: PropTypes.string,
    stops: PropTypes.number,
    price: PropTypes.number,
};

export default ticket;