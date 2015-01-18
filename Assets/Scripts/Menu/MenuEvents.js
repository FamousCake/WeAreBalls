#pragma strict

public class MenuEvents extends MonoBehaviour 
{
	public function OnServerInitialized()
	{	
		Debug.Log("You have successfully initialized a NEW SERVER!");		
		Transition.ToGame();
	}	
}