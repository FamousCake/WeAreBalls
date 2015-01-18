#pragma strict


public class ServerSelectGUI extends MonoBehaviour 
{
	function Awake() {
    	MasterServer.RequestHostList(Globals.GameModeName);
    }

	function OnGUI() {
	
		var data : HostData[] = MasterServer.PollHostList();	    
	    
	    // Copied most of this from the unit documentation #sorrynotsorry
	    for (var element : HostData in data)
	    {	    
	        GUILayout.BeginHorizontal();    
	        var name = element.gameName + " " + element.connectedPlayers + " / " + element.playerLimit;
	        GUILayout.Label(name);  
	        GUILayout.Space(5);
	        var hostInfo;
	        hostInfo = "[";
	        for (var host in element.ip)
	            hostInfo = hostInfo + host + ":" + element.port + " ";
	            
	        hostInfo = hostInfo + "]";
	        
	        GUILayout.Label(hostInfo + " ");  
	        GUILayout.Space(5);
	        
	        GUILayout.Label(element.comment);
	        GUILayout.Space(5);
	        
	        GUILayout.FlexibleSpace();
	        if (GUILayout.Button("Connect"))
	        {
	        	if ( element.useNat ) {       
	            	Network.Connect(element.guid);
	            }
	            
	            else
	            	Network.Connect(element.ip, element.port);
	            
	        }
	        GUILayout.EndHorizontal();  
	    }
	}	

}