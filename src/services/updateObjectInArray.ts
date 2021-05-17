
const updateObjectInArray = function <T>( array:Array<T> , key:number, newKeyValue:T) : Array<T>{
    
    const clonedArray = array.map(item => Object.assign({}, item));
    if( typeof array[key] !== 'undefined'){ // check if such index exists

        clonedArray[key] = newKeyValue;
    }

    return clonedArray;
}

export {updateObjectInArray};