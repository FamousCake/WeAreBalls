#pragma strict

static public class Transition 
{
	static public function ToGame()
	{
		Network.isMessageQueueRunning = false;		
		Application.LoadLevel("Game");
	}

}