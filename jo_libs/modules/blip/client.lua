local Blips = {}
jo.blip = {}

AddEventHandler('onResourceStop', function(resourceName)
  if (GetCurrentResourceName() ~= resourceName) then return end
  for _,blip in pairs (blips) do
		RemoveBlip(blip)
	end
end)

---@param location table the location of the blip
---@param name string name of the blip
---@param sprite string sprite of the blip
---@param blipHash? integer the type of blip
---@return integer blip the blip ID
function jo.blip.create(location,name,sprite, blipHash)
  if not blipHash then blipHash = 1664425300 end
  if type(sprite) == "string" then sprite = joaat(sprite) end
  local blip = BlipAddForCoords(blipHash,location.x, location.y, location.z)
  SetBlipSprite(blip, sprite)
  SetBlipName(blip, name)
  Blips[#Blips+1] = blip
  return blip
end

return jo.blip