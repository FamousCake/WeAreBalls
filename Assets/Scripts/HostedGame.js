#pragma strict

public class HostedGame
{
	public var MaxPlayers : int;
	public var Port : int;
	public var UseNat : boolean;
	public var Password : String;
	public var Name : String;
	public var Description : String;	
	
	public function HostedGame ( MaxPlayers : int , Port: int , UseNat : boolean, Password : String, Name : String, Description : String) 
	{
		this.MaxPlayers = MaxPlayers;
		this.Port = Port;
		this.UseNat = UseNat;
		this.Password = Password;
		this.Name = Name;
		this.Description = Description;
	}	
	
	public function Host() : void 
	{
		if (this.Password != "") {
			Network.incomingPassword = this.Password;
		}
				
		Network.InitializeSecurity();
		
		Network.InitializeServer(this.MaxPlayers, this.Port, this.UseNat);
		
		MasterServer.RegisterHost(Globals.GameModeName, this.Name, this.Description);
	}
}