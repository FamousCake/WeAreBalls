#pragma strict

public interface Networkable
{
	function SetParameters () : void;
	function OnConnectedToServer() : void;

}