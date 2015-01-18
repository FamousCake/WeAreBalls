#pragma strict

public class ServerSelectEvents extends MonoBehaviour
{
	public function OnConnectedToServer() : void
	{
		Debug.Log("You have successfully CONNECTED to a SERVER!");
		Transition.ToGame();		
	}
}