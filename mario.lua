
-- https://datacrystal.romhacking.net/wiki/Super_Mario_Bros.:RAM_map

while true do
	local dir = memory.readbyte(0x0033) --0x0003 movment dir
	local powerup = memory.readbyte(0x001B)
	local speed = memory.readbyte(0x0057)
	local playerX = memory.readbyte(0x0086)
	local levelX = memory.readbyte(0x006D)
	local cameraX = memory.readbyte(0x03AD)
	
	local world = memory.readbyte(0x075F)
	local level = memory.readbyte(0x0760)

	local state = memory.readbyte(0x0756)
	local lives = memory.readbyte(0x075A)
	
	local isEnemy1 = memory.readbyte(0x000F)
	local enemy1 = memory.readbyte(0x0016)
	
	
	local data = dir .. ',' .. powerup .. ',' .. speed .. ',' .. playerX .. ',' .. levelX .. ',' .. cameraX .. ',' .. level .. ',' .. state .. ',' .. lives .. ',' .. isEnemy1 ..',' .. enemy1 .. ',' .. world
	
	-- writes the data into a file
	file = io.open("data.txt", "w")
	file:write(data)
	file:close()
	

	emu.frameadvance() -- This essentially tells FCEUX to keep running

end