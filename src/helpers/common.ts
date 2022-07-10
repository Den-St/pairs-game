import {images} from "../game";

const getRandomInt = (n:number) => {
    return Math.floor(Math.random() * (n - 1)) + 1;
}

export const getRandomArrElement = (arr: any[]) => {
    const index = getRandomInt(arr.length)
    return arr[index];
}

export const getRandomPictures = (n:number) =>{
    const randomIds:number[] = [];
    for (let i = 0;i < n;i++){
        let id = getRandomArrElement(images)?.id;
        while (randomIds.includes(id)) {
            id = getRandomArrElement(images)?.id;
            if(!randomIds.includes(id)) {
                randomIds?.push(id);
                id = null;
            }
        }
        id && randomIds?.push(id);
    }
    console.log(randomIds);
    return randomIds.map((el) => images.find(img => img.id === el));
}

export const shuffle = (array:any[]) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

