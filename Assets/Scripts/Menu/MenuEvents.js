#pragma strict

public class MenuEvents extends MonoBehaviour 
{
	public function OnServerInitialized()
	{
		Network.isMessageQueueRunning = false;
		Debug.Log("You have successfully initialized a NEW SERVER!");
		
		// To Do Switch level
	}	
}