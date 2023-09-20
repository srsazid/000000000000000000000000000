/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({ cardsSelected, remainingCredit, totalCredit }) => {
    console.log(cardsSelected)
    return (
        <div>
            <div className="font-semibold text-center text-sky-500 border-b-2 mt-8 mb-2">
                <h1> Remaining Credit: <span>{remainingCredit}</span> Hour </h1>
            </div>

            <div className='text-center mx-auto h-80'>
                <h2 className="font-bold text-xl border-b-2 mt-8 mb-2">Course Name<sup className="font-normal text-sm">
                    <small> (Course No)</small></sup>
                </h2>
                {cardsSelected.map((cards) => (
                    <ol className="font-normal text-start text-lg" key={cards.id}> {cards.course_name}
                        <small className="text-sm"> <sup> {cards.id} </sup></small>
                    </ol>
                ))}
            </div>

            <div className="font-semibold text-center border-b-2 mt-8 mb-2">
                <h5>Total Credit Hour : <span>{totalCredit}</span><sub>hr</sub>
                </h5>
            </div>
        </div>


    );
};

export default Cart;