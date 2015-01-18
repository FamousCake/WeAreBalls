#pragma strict

public class ConnectedGame extends MonoBehaviour implements Networkable
{
	public var Data : HostData;
	public var OnConnectionMade : Function;
	
	public function SetParameters ( Data : HostData)
	{
		this.Data = Data;
	}
	
	public function MakeConnection(callback : Function)
	{
	 	this.OnConnectionMade = callback;
	 	
		if ( this.Data.useNat ) {       
	    	Network.Connect(this.Data.guid);
	    }
	    
	    else {
	    	Network.Connect(this.Data.ip, this.Data.port);	    	
	    }
	}
	
	public function OnConnectedToServer() : void
	{
		this.OnConnectionMade();
	}
	
}