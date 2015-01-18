#pragma strict

public class Spawner extends MonoBehaviour
{
	public var playerCharacterPrefab : GameObject;
		
	public function SpawnPlayerCharacter (position : Vector3, rotation : Quaternion, group : int) : void
	{
		var player : GameObject = Network.Instantiate(this.playerCharacterPrefab, position, rotation, group);
	
		player.AddComponent(BallController);
		
		var tempColor : Color = new Color(Random.Range(0.0, 1.0), Random.Range(0.0, 1.0), Random.Range(0.0, 1.0));
		
		// Initialize new players with random colors
		
		(player.GetComponent("PlayerInfo") as PlayerInfo).SetName("Omg" + Random.Range(0.0, 10.0), true);
		(player.GetComponent("PlayerInfo") as PlayerInfo).SetID(Network.player.guid, true);
		(player.GetComponent("PlayerInfo") as PlayerInfo).SetBallColour(tempColor, true);
		
		
		(player.GetComponent("Character") as Character).ChangeColor(tempColor, true);
	}
}