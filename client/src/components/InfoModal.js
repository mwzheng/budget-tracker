import React, { useState } from 'react';

const InfoModal = () => {
    const [showModal, setShowModal] = useState(false)

    const openModal = (e) => {
        setShowModal(!showModal);
    };

    return <div>
        <button onClick={e => openModal(e)} id='info_modal_btn'>&#8505;</button>

        {showModal ? <div className="modal">
            <div className="modal-content">
                <div onClick={e => openModal(e)} className="close">&times;</div>
                <p><span className='need split'>Red</span> Expenses = Needs</p>
                <p><span className='want split'>Yellow</span> Expenses = Wants</p>
                <p><span className='savingOrDebt split'>Green</span> Expenses = Savings/Debts</p>
                <div>
                    <h3>Needs</h3>
                    <p className='description'>
                        This portion of your budget should include absolute essentials. It should be
                        roughly {<b>~50%</b>} of your total budget. For example: Housing,
                        Food, Transportation, Utilities, Insurance, Child care.
                    </p>
                </div>
                <div>
                    <h3>Wants</h3>
                    <p className='description'>
                        This portion of your budget consist of any expenses that you enjoy that aren't
                        absolutely necessary. It should be roughly {<b>~30%</b>} of your total budget.
                        For Example: Any monthly subscriptions (Hulu, Netflix, Disney, etc), Travel, Entertainment,
                        Eating out, etc.
                    </p>
                </div>
                <div>
                    <h3>Savings/Debts</h3>
                    <p className='description'>
                        This portion of your budget is used to prepare for the future or pay down current debts. It
                        should be roughly {<b>~20%</b>} of your total budget. For example: Starting/Growing an emergency fund,
                        Saving up for retirement, paying off any high interest debts.
                    </p>
                </div>
            </div>
        </div> : null}
    </div>
}

export default InfoModal;