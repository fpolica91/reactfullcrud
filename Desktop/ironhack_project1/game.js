

const canvas = document.querySelector('#board');
const ctx = canvas.getContext('2d');

// percs///


let img = new Image()
img.src = "./assets/game.jpg"

// CREATES AND ANIMATES THE CANVAS

const city = {
    img: img,
    x: 0,
    speed: -1,
    move: function () {
        this.x += this.speed;
        this.x %= canvas.width;
    },
    draw: function () {
        ctx.drawImage(this.img, this.x, 0);
        if (this.speed < 0) {
            ctx.drawImage(this.img, this.x + canvas.width, 0);

        } else {
            ctx.drawImage(this.img, this.x - this.img.width, 0)
        }
    }
};

//ATTEMPTED TO ANIMATE COIN SPRITE
class Game {
    constructor() {
        this.coins = []
        this.score = 0
        this.platforms = []
    }
}



class Coin {
    constructor(x, y) {
        this.spriteWidth = 440
        this.spriteHeight = 40
        this.sprites = 10
        this.width = this.spriteWidth / this.sprites
        this.currentFrame = 0
        this.frameCount = 10
        this.x = x
        this.y = y
        this.speed = 12
        this.img = "./assets/coin.png"
        this.srcX = 0
        this.srcY = 0
    }
    upateFrame() {
        this.currentFrame = ++this.currentFrame % this.frameCount
        this.srcX = this.currentFrame * this.width
    }
    drawCoin() {
        this.upateFrame()
        let coinSprite = new Image()
        coinSprite.src = this.img
        ctx.drawImage(coinSprite, this.srcX, this.srcY, this.width, this.spriteHeight, this.x, this.y, this.width, this.spriteHeight)
    }


}

const juego1 = new Game()
let frames = 0;




function createGameCoins() {
    frames++;
    if (frames <= 10) {
        xrandom = Math.floor(Math.random() * 800)
        yrandom = Math.floor(Math.random() * 900)
        let coins = new Coin(xrandom, yrandom);
        juego1.coins.push(coins)
    }

    for (let i = 0; i < juego1.coins.length; i++) {
        juego1.coins[i].drawCoin()
        if (juego1.coins[i].x < char.x + char.width - 60 &&
            juego1.coins[i].x + juego1.coins[i].spriteWidth > char.x &&
            juego1.coins[i].y < char.y + char.height &&
            juego1.coins[i].y + juego1.coins[i].spriteHeight > char.y) {
            juego1.coins[i].img = null
        }
    }

}


// CREATES CHARACTER SPRITE AND ANIMATES IT

class MainChar {
    constructor() {
        this.x = 100
        this.y = 800
        this.width = 100
        this.height = 150
        this.img = "./png/idle1.png"

    }
    drawCharacter() {
        let main = new Image()
        main.src = this.img
        ctx.drawImage(main, this.x, this.y, this.width, this.height)
    }
    moveChar(key) {
        switch (key) {
            case 39:
                this.x += 5
                this.movingFrames()
                break;
            case 38:
                if (this.y === 800) {
                    this.y -= 180
                    this.jumpMan()
                }
                setTimeout(() => {
                    this.y = 800
                    this.jumpMan()
                }, 300)
        }
    }
    movingFrames() {
        if (this.img === "./png/idle1.png") {
            this.img = "./png/walk/walk1.png"
        } else if (this.img === "./png/walk/walk1.png") {
            this.img = "./png/walk/walk2.png"
        } else if (this.img === "./png/walk/walk2.png") {
            this.img = "./png/walk/walk3.png"
        } else if (this.img === "./png/walk/walk3.png") {
            this.img = "./png/walk/walk4.png"
        } else if (this.img === "./png/walk/walk4.png") {
            this.img = "./png/walk/walk1.png"
        }
    }
    jumpMan() {
        if (ths.img === "./png/idle1.png") {
            this.img = "png/jump/jump1.png"
        } else if (this.img === "png/jump/jump1.png") {
            this.img = "png/jump/jump2.png"
        }

    }


}


let char = new MainChar()


document.onkeydown = function (e) {
    let xDestination = e.keyCode;
    char.moveChar(xDestination);
};

document.onkeyup = function () {
    setTimeout(() => {
        char.img = "./png/idle1.png";
    }, 300)

}




// CLASS PLATFORMS -> CREATES PLATFORMS FOR CHARACTER TO BE ABLE TO REACH COINS HIGH IN THE CANVAS

class Platform {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.img = "./assets/platform2.png";
        this.movingRight = true;
    }
    drawPlatform() {
        const platform = new Image()
        platform.src = this.img
        ctx.drawImage(platform, this.x, this.y, 200, 100)
    }
    movePlatForm() {
        if (this.x < canvas.width - 200 && this.movingRight) {
            this.x += 3
        } else if (this.x >= canvas.width - 200) {
            this.movingRight = false;
            this.x += -3
        } else {
            this.x += -3
            if (this.x < 0) {
                this.movingRight = true;
            }
        }
    }
    newFloor() {

    }
}
const staticPlatForm = new Platform(450, 800)

function fuckajob() {
    if (staticPlatForm.x < char.x + char.width && staticPlatForm.x + 200 > char.x && staticPlatForm.y < char.y + char.height &&
        staticPlatForm.y + 100 > char.y) {
        char.y = staticPlatForm.y
    }
}



// CREATES MULTIPLE PLATFORMS AND PUSHES IT TO THE GAME OBJECT  

function createPlatforms() {
    if (frames <= 6) {
        const platform1 = new Platform(100, 750)
        const platform2 = new Platform(300, 600)
        const platForm4 = new Platform(700, 350)
        const finalPlatform = new Platform(500, 200)

        juego1.platforms.push(platform1, platform2, platForm4, finalPlatform)

    }
    juego1.platforms.forEach(plat => {
        plat.drawPlatform()
        plat.movePlatForm()
    })



}





// RECURSIVE FUNCTION, DELETES AND INSTANTIATES THE ELEMENTS. 
function drawLoop() {
    city.move();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    city.draw()
    char.drawCharacter()
    char.moveChar()
    createGameCoins()
    staticPlatForm.drawPlatform()
    createPlatforms()
    requestAnimationFrame(drawLoop)
}


drawLoop()