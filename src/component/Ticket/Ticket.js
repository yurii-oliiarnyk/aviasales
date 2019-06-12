import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import './Ticket.scss';
import carrierLogo from '../../assets/images/Logo.png';
import { connect } from 'react-redux';

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

    const getButtonCurrency = (price) => {
        switch(props.currentCurrency) {
            case 'eur': return (props.exchangeRates.EUR * price).toFixed(2) + '€';
            case 'usd': return (props.exchangeRates.USD * price).toFixed(2) + '$'
            default: return price + '₽';
        }
    };

    return (
        <div className="ticket">
            <div className="ticket-left">
                <div><img src={carrierLogo} alt="carrier"/></div>
                <Button clicked={() => alert('click')}>Купить за {getButtonCurrency(price)}</Button>
            </div>
            <div className="ticket-right">
                <div className="ticket-times">
                    <div className="ticket-time ticket-time--departure">
                        {departure_time}
                    </div>
                    <div className="ticket-stops">
                        {stops ? stops + ' ' + (stops === 1 ? 'Пересадка' : 'Пересадки') : null}
                        <span></span>
                    </div>
                    <div className="ticket-time ticket-time--arriaval">
                        {arrival_time}
                    </div>
                </div>
                <div className="ticket-origins">
                    <div>{origin}, {origin_name}</div>
                    <div>{destination_name}, {destination}</div>
                </div>
                <div className="ticket-dates">
                    <div>{departure_date}</div>
                    <div>{arrival_date}</div>
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

const mapStateToProps = state => {
    return {
        currentCurrency: state.currency,
        exchangeRates: state.exchangeRates
    }
}

export default connect(mapStateToProps)(ticket);
