#pragma strict


class MenuGUI extends MonoBehaviour 
{

	public var hostBtnStyle : GUIStyle;
	public var joinBtnStyle : GUIStyle;

	public function OnGUI () : void 
	{
		if ( GUI.Button(Rect(100,100,200,50), "", this.hostBtnStyle))
		{
			
		}
		
		if ( GUI.Button(Rect(100,200,200,50), "", this.joinBtnStyle))
		{
			
			
		}	
	}
}