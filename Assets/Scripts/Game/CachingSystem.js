#pragma strict

public class CachingSystem extends MonoBehaviour
{

	public var Spawner : Spawner = null;	


	public function RecacheSpawner () : Spawner {
		return GameObject.FindGameObjectWithTag("UberController").GetComponent("Spawner") as Spawner;
	}
	
	public function GetSpawner () : Spawner
	{
		if ( this.Spawner == null ) {
			this.Spawner = this.RecacheSpawner();
		}
		
		return this.Spawner;	
	}
	
	
	
	public var Players : GameObject [] = null;
	
	
	public function GetPlayers() : GameObject[]
	{
		Debug.Log('f');
		
		if (this.Players == null ) {
			this.Players = GameObject.FindGameObjectsWithTag("PlayerCharacter");
			Debug.Log("I CACHED IT AGAIN!!!!");			
		}
		
		return this.Players;
	}
	
	@RPC
	public function GetPlayersRPC()
	{
		this.Players = null;
		this.GetPlayers();		
	}
	
	
	
	function OnPlayerDisconnected(player: NetworkPlayer) {		
		//this.Players = null;
		//this.networkView.RPC("GetPlayersRPC", RPCMode.AllBuffered);
		//if (Network.isServer) {
			this.blq();
		//}
	}
	
	public function blq()
	{
		yield ;//WaitForSeconds(0.001);
		this.networkView.RPC("GetPlayersRPC", RPCMode.All);
	}
		
	
	
	
}