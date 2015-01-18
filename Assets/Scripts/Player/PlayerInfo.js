#pragma strict

public class PlayerInfo extends MonoBehaviour
{

	public var Name : String;
	public var ID : String;
	public var BallColour : Color;
	
	public function PlayerInfo(Name : String, ID : String, BallColour : Color) 
	{
		this.Name = Name;
		this.ID = ID;
		this.BallColour = BallColour;
	}
	
	public function GetName()
	{	
		return this.Name;
	}
	
	public function GetID()
	{	
		return this.ID;
	}
	
	public function GetBallColour() : Color
	{	
		return this.BallColour;
	}
	
	
	
	public function SetName( Name : String, rpc : boolean)
	{	
		this.Name = Name;
		
		if ( rpc ) {
			this.networkView.RPC("SetNameRPC", RPCMode.OthersBuffered, Name);
		}
	}
	
	public function SetID( ID : String, rpc : boolean)
	{	
		this.ID = ID;
		if ( rpc ) {
			this.networkView.RPC("SetIDRPC", RPCMode.OthersBuffered, ID);
		}
	}
	
	public function SetBallColour(BallColour : Color, rpc : boolean)
	{	
		this.BallColour = BallColour;
		
		if ( rpc ) {
			this.networkView.RPC("SetBallColourRPC", RPCMode.OthersBuffered, BallColour.r, BallColour.g, BallColour.b);
		}
	}
	
	
	
	@RPC
	private function SetNameRPC( Name : String )
	{
		this.SetName(Name, false);
	}
	
	@RPC
	public function SetIDRPC( ID : String)
	{	
		this.SetID(ID, false);
	}
	
	@RPC
	public function SetBallColourRPC( r : float, g : float , b : float)
	{	
		this.SetBallColour(new Color(r,g,b), false);
	}
	
	
}









