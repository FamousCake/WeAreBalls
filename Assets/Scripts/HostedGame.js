#pragma strict

public class HostedGame
{
	public var MaxPlayers : int;
	public var Port : int;
	public var UseNat : boolean;
	public var Password : String;	
	
	public function HostedGame ( MaxPlayers : int , Port: int , UseNat : boolean, Password : String) 
	{
		this.MaxPlayers = MaxPlayers;
		this.Port = Port;
		this.UseNat = UseNat;
		this.Password = Password;
	}	
	
	public function Host() : void 
	{
		if (this.Password != "") {
			Network.incomingPassword = this.Password;
		}
		
		Network.InitializeSecurity();
		
		Network.InitializeServer(this.MaxPlayers, this.Port, this.UseNat);
	}

}