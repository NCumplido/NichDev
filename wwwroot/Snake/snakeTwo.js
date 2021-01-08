document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    //First div in grid
    let currentIndex = 0
    let appleIndex = 0

    //First div in grid is 2(the head), 0 being the end( tail) and 1s are the middle. 
    let currentSnake = [2, 1, 0] //Snake array

    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    //Start/restart 
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove("snake"))
        squares[appleIndex].classList.remove("apple")
        clearInterval(interval)
        score = 0
        randomApple()
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2, 1, 0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add("snake"))
        interval = setInterval(moveOutcomes, intervalTime)
    }

    //Process outcomes of the Snake
    function moveOutcomes() {

        //Contact with border and self
        if (
            (currentSnake[0] + width >= (width * width) && direction === width) || //Hits bottom
            (currentSnake[0] % width === width - 1      && direction === 1) ||         //Hits right
            (currentSnake[0] % width === 0              && direction === -1) ||               //Hits left
            (currentSnake[0] - width <   0              && direction === -width) ||             //Hits top
            squares[currentSnake[0] + direction].classList.contains("snake")     //Hits self    
            )
        {
            return clearInterval(interval) 
        }

        const tail = currentSnake.pop()    
        squares[tail].classList.remove("snake")
        currentSnake.unshift(currentSnake[0] + direction)   //Give direction to head of the array

        //When snake hits apple
        if (squares[currentSnake[0]].classList.contains("apple"))
        {
            squares[currentSnake[0]].classList.remove("apple")
            squares[tail].classList.add("snake")
            currentSnake.push(tail)

            //randomApple()
            score++
            scoreDisplay.textContent = score
            clearInterval(interval)
            intervalTime = intervalTime * speed
            interval = setInterval(moveOutcomes, intervalTime)
        }

        squares[currentSnake[0]].classList.add("snake")
    }

    function randomApple() {
        do {
            appleIndex = Math.floor(Math.random() * squares.length)
        } while (squares[appleIndex].classList.contains('snake')) //making sure apples dont appear on the snake
        squares[appleIndex].classList.add('apple')
    }

    function control(e) {
        squares[currentIndex].classList.remove("snake")

        if (e.keyCode === 39) {
            direction = 1   //Right arrow
        } else if (e.keyCode === 38) {
            direction = -width //Up arrow   Go back ten divs, appearing to go up
        } else if (e.keyCode == 37) {
            direction = -1 //Left arrow, one div to the left
        } else if (e.keyCode === 40) {
            direction = +width //Down button, ten divs away from the snake
        }
    }

    document.addEventListener("keyup", control)
    btnStart.addEventListener("click", startGame)

})