const fs = require('fs');
const client = require('discord-rich-presence')('784213154279850005');

 /*
io.on('connection', (socket) => {
    socket.on('response_evet',function(data){
        console.log("Data desde el cliente",data);
	});
	*/
	setInterval(function(){
		fs.readFile('data.txt', 'utf8', function (err,data) {
		  if (err) {
			return console.log(err);
		  }

		  data = data.split(',')

		  dir = data[0]
		  poweup = data[1]
		  speedX = data[2]
		  playerX = data[3]
		  levelX = data[4]
		  cameraX = data[5]
		  level = data[6]
		  state = data[7]
		//  socket.emit('data', { dir: data[0], powerup: data[1], speedX: data[2], playerX: data[3], levelX: data[4],cameraX: data[5] });
		large = 'right'
		
		if (dir == 2 && state == 0){
			large = 'left'
		}else if (dir == 1 && state == 0) {
			large = 'right'
		}else if (sppesX > 20 && state == 0) {
			large = 'runleft'
		}else if (dir == 2 && state == 1){
			large = 'r'
		}else if (dir == 1 && state == 1){
			large = 'right2'
		}


		console.log(data[7])
		client.updatePresence({
		  state: 'speedruning SMB 1',
		  details: 'LEVEL ' + level,
		  startTimestamp: Date.now(),
		  endTimestamp: Date.now() + 1337,
		  largeImageKey: large,
		  smallImageKey: 'right',
		  instance: true,
		});
		  
		});
	},5000)
	
	
/*
});*/