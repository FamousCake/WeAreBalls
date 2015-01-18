#pragma strict



public class RPCManager extends MonoBehaviour 
{
	public function Update ()
	{
		// Debug.Log("fa");
		if (Input.GetKeyUp("q")) {
		
			this.ChangeBallsColor(new Color(Random.Range(0.0, 1.0), Random.Range(0.0, 1.0), Random.Range(0.0, 1.0)));
		}
		
		//Debug.Log(Network.connections.Length);
	}
	
	
	//private function 
	
	
	
	
	private function ChangeBallsColor(c : Color)
	{
		
		var a : GameObject[]  = Shortcut.ToCachingSystem().GetPlayers();//GameObject.FindGameObjectsWithTag("PlayerCharacter");
		
		Debug.Log(a.Length);
		
		for ( var z : GameObject in a) {
			(z.GetComponent("Character") as Character).ChangeColor(c, true);
		}
		
		this.OriginalColor();
	}
	
	private function OriginalColor()
	{
		yield WaitForSeconds(3);
		
		var a : GameObject[]  = Shortcut.ToCachingSystem().GetPlayers();//GameObject.FindGameObjectsWithTag("PlayerCharacter");
		
		Debug.Log(a.Length);
		
		for ( var z : GameObject in a) {
			var c : Color = (z.GetComponent("PlayerInfo") as PlayerInfo).GetBallColour();
			(z.GetComponent("Character") as Character).ChangeColor(c, true);
		}
	}
	
	
	
	
	
	
	
	
	

}