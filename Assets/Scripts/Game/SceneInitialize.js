#pragma strict

function Awake () 
{
	Network.isMessageQueueRunning = true;
	Shortcut.ToSpawner().SpawnPlayerCharacter(new Vector3(0,0,0), Quaternion.identity, 0);	
	Shortcut.ToCachingSystem().blq();
	
}