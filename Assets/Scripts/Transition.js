#pragma strict

static public class Transition 
{
	static public function ToGame()
	{	
		// Enable this later!!!
		Network.isMessageQueueRunning = false;		
		Application.LoadLevel("Game");
	}
	
	static public function ToServerSelect()
	{
		Application.LoadLevel("ServerSelect");
	}

}