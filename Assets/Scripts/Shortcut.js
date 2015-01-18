#pragma strict


public static class Shortcut extends MonoBehaviour
{

	private var cache : CachingSystem = GameObject.FindGameObjectWithTag("UberController").GetComponent("CachingSystem") as CachingSystem;

	public static function ToSpawner() : Spawner 
	{
		return this.cache.GetSpawner();	
	}
	
	public static function ToAllPlayers() : GameObject[] 
	{
		GameObject.FindGameObjectsWithTag("PlayerCharacter");
	}
	
	public static function ToCachingSystem()
	{
		return this.cache;
	}

}