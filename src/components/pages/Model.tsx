import React from 'react';
import {adidasArr, AdidasItem} from './Adidas';
import {useParams} from 'react-router-dom';

export const Model = () => {
    const params = useParams()
    console.log(params)
    const currentModel= adidasArr.find(el => el.id === Number(params.id))
    return (

        <div style={{textAlign: 'center'}}>
            {currentModel
                ? <>
                    <h2>{currentModel.model}</h2>
                    <p>{currentModel.collection}</p>
                    <p>{currentModel.price}</p>
                    <img src={currentModel.picture} alt="shoes"/>
                </>
                : <h3>Модуль отсутствует</h3>}

        </div>

    );
};


//----------------------------------
// import React from 'react';
// import {adidasArr} from './Adidas';
// import {useParams} from 'react-router-dom';
//
// export const Model = () => {
//     const params = useParams()
//     console.log(params)
//     return (
//         <div style={{textAlign:'center'}}>
//             <h2>{adidasArr[Number(params.id)].model}</h2>
//             <p>{adidasArr[Number(params.id)].collection}</p>
//             <p>{adidasArr[Number(params.id)].price}</p>
//             <img src={adidasArr[Number(params.id)].picture} alt="shoes"/>
//         </div>
//     );
// };

