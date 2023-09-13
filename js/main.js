document.querySelector(".control-button span").onclick = function(){

    let yourName = prompt('Whats Your Name?');

    if(yourName == null || yourName == ""){

        document.querySelector(".name span").innerHTML = "UnKnown";

    }else{

        document.querySelector(".name span").innerHTML = yourName ;

    }

    document.querySelector(".control-button").remove() ;
}


let duration = 1000;

let blockContainer = document.querySelector('.memory-game-block');

let blocks = Array.from(blockContainer.children);

let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange)

blocks.forEach( (block, index)=> {

    block.style.order = orderRange[index] ;

    block.addEventListener('click', function(){

        flipBlock(block);

    })
    
});

function flipBlock (selectedBlock){

    selectedBlock.classList.add('is-flipped');

    let allFlippedBlock = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    if(allFlippedBlock.length === 2){

        stopClicking();

        checkMathedBlock(allFlippedBlock[0], allFlippedBlock[1]);
        

    }

};

function checkMathedBlock(firstBlock, secondBlock){

    let triesElement = document.querySelector('.tries span')

    if(firstBlock.dataset.social === secondBlock.dataset.social){

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

    } else{

        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1 ;
        
        setTimeout(() => {

            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');

        },duration)

    }

};

function stopClicking(){

    blockContainer.classList.add('no-clicking')

    setTimeout(() => {
    
        blockContainer.classList.remove('no-clicking')

    },duration)

};

function shuffle(Array){

    let current = Array.length,
    temp,
    random;

    while(current > 0){

        random = Math.floor(Math.random() * current);

        current--;
        
        temp = Array[current];

        Array[current] = Array[random];

        Array[random] = temp;

    }

        return Array ;

}
