#pragma strict


public class Character extends MonoBehaviour 
{
	
	public function ChangeColor( c : Color , rpc : boolean ) : void 
	{
		this.renderer.material.color = c;
		
		if ( rpc ) {
			this.gameObject.networkView.RPC("ChangeColorRPC", RPCMode.OthersBuffered, c.r, c.g, c.b);
		}
	}
	
	@RPC 
	private function ChangeColorRPC(r : float, g : float, b : float)
	{	
		this.ChangeColor(new Color(r,g,b), false);
	}
	
}
