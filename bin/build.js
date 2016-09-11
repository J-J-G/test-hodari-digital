/**
 * isometric map layout - 1 collision point
 */ 
var map = [
	[1,1,1,1,1,1,1],
	[1,0,0,0,0,0,1],
	[1,0,0,0,0,0,1],
	[1,0,0,0,0,0,1],
	[1,0,0,0,0,0,1],
	[1,0,0,0,0,0,1],
	[1,1,1,1,1,1,1]
];


/**
 * image cache, player location.
 */
var tileGraphics = [],
	playerX = 2,
	playerY = 2
;


/**
 * Robot Game
 * @access public
 * @param {obj} isometric - ctx
 */
(function Main( isometric ) {


/**
 * Image loading helper
 * @acces public
 */
function loadImg() {
   
	// Images to be loaded and used.
	// Tutorial Note: As water is loaded first it will be represented by a 0 on the map and land will be a 1.
	var tileGraphicsToLoad = [ "./img/wood1.png", "./img/robot.png" ],
		tileGraphicsLoaded = 0
	;
	
	for ( var i = 0; i < tileGraphicsToLoad.length; i++ ) {
		
		tileGraphics[i] = new Image();
		tileGraphics[i].src = tileGraphicsToLoad[i];
		tileGraphics[i].onload = function() {
			
			// Once the image is loaded increment the loaded graphics count and check if all images are ready.
			tileGraphicsLoaded++;
			
			if ( tileGraphicsLoaded === tileGraphicsToLoad.length )
				drawMap();
			
		}
		
	}

}


/**
 * Render Stage.
 * @acces public
 */
function drawMap() {
  
	// create the canvas context
	var ctx = document.getElementById( 'game-stage-canvas' ).getContext( '2d' );
	
	// Set as your tile pixel sizes, alter if you are using larger tiles.
	var tileH = 25;
	var tileW = 52;
	
	// mapX and mapY are offsets to make sure we can position the map as we want.
	var mapX = 120;
	var mapY = 0;//52;
	
	var drawTile;
	
	// Clear the  canvas
	ctx.clearRect( 0, 0, 500, 500 );
	
	// loop through our map and draw out the image represented by the number.
	for ( var i = 0; i < map.length; i++ ) {
		
		for ( var j = 0; j < map[i].length; j++ ) {
			
			drawTile = map[i][j];
			// Draw the represented image number, at the desired X & Y coordinates followed by the graphic width and height.
			if ( drawTile === 0 )
				ctx.drawImage( tileGraphics[drawTile], ( i - j ) * tileH + mapX, ( i + j ) * tileH / 2 + mapY );
			
			if ( playerX === i && playerY === j )
				ctx.drawImage( tileGraphics[1], ( i - j ) * tileH + mapX, ( i + j ) * tileH / 2 + mapY - tileH );
		
		}
		
	}
	
}


/**
 * Collision Dection
 * @param {int} posX - playerX
 * @param {int} posY - playerY
 * @access public
 */
function collisionDection( posX, posY ) {
	
	return ( map[posX][posY] === 1 )? true : false;
		
}


/**
 * Init game.
 * @acces public
 */
function init() {
	
	// Remove Event Listener and load images.
	isometric.removeEventListener( 'load', init );
	
	loadImg();
	
	// Add game controls - dpad
	isometric.addEventListener( 'keyup', function( e ) {
		
		switch( e.keyCode ) {
		
			case 37:
				if ( !collisionDection( ( playerX - 1 ), playerY ) )
					playerX--;
			break;
			
			case 39:
				if ( !collisionDection( ( playerX + 1 ), playerY ) )
					playerX++;
			break;
			
			case 38:
				if ( !collisionDection( playerX, ( playerY - 1 ) ) )
					playerY--;
			break;
			
			case 40:
				if ( !collisionDection( playerX, ( playerY + 1 ) ) )
					playerY++;
			break;
		
		}
		
		drawMap();
		
	});
	
};


/**
 * Echo out robot location
 * @access public - externally
 */
window.handleReportLocation = function() {
	
	alert( playerX + ' : ' + playerY );
	
}


// Add Event Listener to dectect when page has fully loaded.
isometric.addEventListener( 'load', init, false );


})( this );