import { useState } from 'react';
import { useEffect } from 'react';
import Cart from './Cart';

const Cards = () => {
    const [allCardsData, setCardData] = useState([]);
    const [cardsSelected, setCardsSelected] = useState([]);
    const [remainingCredit, setRemainingCredit] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    useEffect(() => {
        fetch('./cardData.json')
            .then((res) => res.json())
            .then((data) => setCardData(data))
    }, []);

    // BTN Handler section
    const cardsBtnHandle = (cards) => {
        const isClick = cardsSelected.find((item) => item.id == cards.id) ;        
        let sum = cards.credit_hour;
       
        if(isClick){
            return alert("Try Another One")
        }
        else{
            cardsSelected.forEach((item) => {
                sum = sum + item.credit_hour;
            });
        }
        const subTotal = 20 - sum;
        if(sum > 20){
            return alert("Sorry there is no Limit")
        }
        else{
            setTotalCredit(sum);
            setRemainingCredit(subTotal);
            setCardsSelected([...cardsSelected, cards]);
        }
    };
    return (
        <div className='flex'>

            <div className='card grid grid-cols-3 gap-4 w-2/3 card-compact text-center p-2 '>
                {allCardsData.map(cards => (
                    <div key={cards.id} className=' w-full rounded-xl bg-white p-4' >
                        <figure className='m-auto'>
                            <img className='w-full ' src={cards.image}></img>
                        </figure>

                        <div className='card-body text-[#777676] mt-2'>
                            <h1 className='font-semibold'> {cards.course_name}</h1>
                            <small>{cards.description}</small>
                            <div className='flex font-normal text-[#777676] text-2xs justify-between p-3 '>
                                <h3 className='flex items-center '><span><img className='w-5' src="https://i.ibb.co/pdYJr2W/dollar-sign-1.png" /></span>Price: {cards.price}</h3>
                                <h4 className='flex items-center '> <img className='w-5' src="https://i.ibb.co/BVHcB14/Frame.png" alt="" /> <span>Credit: {cards.credit_hour} hr</span></h4>
                            </div>
                        </div>
                        <button onClick={() => cardsBtnHandle(cards)} className='bg-blue-400 p-1 font-semibold text-white w-full text-center rounded-2xl'>Select</button>

                    </div>
                ))}
            </div>

            <div className='mx-auto '>
                <Cart cardsSelected={cardsSelected} remainingCredit={remainingCredit} totalCredit={totalCredit}></Cart>
            </div>

        </div>

    );
};

export default Cards;