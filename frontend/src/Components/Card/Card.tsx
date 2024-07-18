    import React from 'react';
    import "./Card.css";
    
    interface Props {
        companyName: string;
        ticker: string;
        price: number;
    }
    
    const Card: React.FC<Props> = ({companyName, ticker, price}: Props): JSX.Element => {
      return (
        <div className='card'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />
            <div className='details'> 
                <h2>{companyName} ({ticker})</h2>
                <p>${price}</p>
            </div>
            <div>
                <p className='info'>apple hisse değeri</p>
            </div>
        </div>
      )
    }
    
    export default Card