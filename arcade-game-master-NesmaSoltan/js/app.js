// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if(this.x >= 505)
    {
        this.x=0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(x,y){
    this.x = x;
    this.y = y;
    this.sprite='images/char-princess-girl.png';
};
   var score=0;

Player.prototype.update=function(dt){
    if(player.y<=-1)
       {
         this.reset();
         window.alert("congratulations You win\!:)");
          score++;
        document.getElementById('score').innerHTML = "Your score : "+score;
       }
       this.collision();
};

Player.prototype.reset=function(){
    player.x=200;
    player.y=400;
};

Player.prototype.collision=function(){
    for(var i=0;i<allEnemies.length;i++)
    {
        if((player.x<=(allEnemies[i].x+40) )&& (player.x>=(allEnemies[i].x-40)))
        {
            if((player.y>=(allEnemies[i].y-40)) && (player.y<=(allEnemies[i].y+40)))
            {
                this.reset();
                window.alert("Game over (:");
                score--;
                if(score<=0)
                {
                    score=0;
                }
                document.getElementById('score').innerHTML = "Your score : "+score;
            }
        }
    }
};

Player.prototype.render=function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput=function(inputKey){
    if(inputKey=='left')
    {
        this.x -= 100;
        if(this.x <= 0)
        {
          this.x=5;
        }
    }
    if(inputKey =='up')
    {
        this.y -=100;
    }
    if(inputKey =='right')
    {
        this.x += 100;
        if(this.x >=500)
        {
          this.x =400;
        }
    }
    if(inputKey =='down')
    {
        this.y +=100;
         if(this.y >= 400)
        {
          this.y = 400;
        }
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var Enemy1 = new Enemy(2,60,120);
var Enemy2 = new Enemy(2,140,40);
var Enemy3 = new Enemy(2,230,80);
var allEnemies=[Enemy1,Enemy2,Enemy3];
var player = new Player(200,400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});