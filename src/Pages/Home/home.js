
import React from "react";
import Art from './homeart';
import Paint from './homepaint';
import Decor from './homedecor';



const Direction = () => (
    <p className="what">
        Pick your poison:
    </p>
    <div>
    <Paint/>
    <Art/>
    <Decore/>
    </div>
);

export default Direction;






