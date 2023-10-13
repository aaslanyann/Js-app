import React from 'react';
import cl from './MyModal.module.css'
function MyModel({children}) {
    return (
        <div className={[cl.myModal, cl.active].join('  ')}>
            <div className={cl.myModalContent}>

            </div>
        </div>
    );
}

export default MyModel;