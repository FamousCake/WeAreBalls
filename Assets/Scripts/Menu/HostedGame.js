#pragma strict

public class HostedGame extends MonoBehaviour implements Networkable
{
	public var MaxPlayers : int;
	public var Port : int;
	public var UseNat : boolean;
	public var Password : String;
	public var Name : String;
	public var Description : String;
	public var OnConnectionMade : Function;	
	
	public function SetParameters ( MaxPlayers : int , Port: int , UseNat : boolean, Password : String, Name : String, Description : String) 
	{
		this.MaxPlayers = MaxPlayers;
		this.Port = Port;
		this.UseNat = UseNat;
		this.Password = Password;
		this.Name = Name;
		this.Description = Description;
	}	
	
	public function MakeConnection(callback : Function) : void 
	{
	
		this.OnConnectionMade = callback;
		
		if (this.Password != "") {
			//Network.incomingPassword = this.Password;
		}
				
		Network.InitializeSecurity();
		
		Network.InitializeServer(this.MaxPlayers, this.Port, this.UseNat);
		
		MasterServer.RegisterHost(Globals.GameModeName, this.Name, this.Description);		
	}
	
	public function OnServerInitialized()
	{	
		this.OnConnectionMade();		
	}	
}