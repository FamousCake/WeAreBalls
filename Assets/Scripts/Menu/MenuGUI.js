#pragma strict


class MenuGUI extends MonoBehaviour 
{

	public var hostBtnStyle : GUIStyle;
	public var joinBtnStyle : GUIStyle;

	public function OnGUI () : void 
	{
		if ( GUI.Button(Rect(100,100,200,50), "", this.hostBtnStyle))
		{
			//new HostedGame(32, 8080, !Network.HavePublicAddress() , "", "Epic Game", "The Most Epic Game of All!").Host();		
			var Game : HostedGame = this.gameObject.GetComponent("HostedGame") as HostedGame;
			
			Game.SetParameters(32, 8080, !Network.HavePublicAddress() , "", "Epic Game", "The Most Epic Game of All!");
			
			Game.MakeConnection(function(){
				Debug.Log("You have made a new SERVER!");
				Transition.ToGame();				
			});
		}
		
		if ( GUI.Button(Rect(100,200,200,50), "", this.joinBtnStyle))
		{	
			Transition.ToServerSelect();			
		}	
	}	
	
}