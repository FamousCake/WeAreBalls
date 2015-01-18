#pragma strict

public class BallController extends MonoBehaviour
{
	// Object caching for better performance
	private var rbody : Rigidbody;
	
	public function Awake () : void 
	{
		this.rbody = this.gameObject.rigidbody;
	}
	
	public function FixedUpdate () : void 
	{
		if ( Input.GetAxis("Horizontal") ) {
			this.rbody.AddForce(Vector3.right * 150 * Input.GetAxis("Horizontal"));
		}
		
		if ( Input.GetAxis("Vertical") ) {
			this.rbody.AddForce(Vector3.forward* 150 * Input.GetAxis("Vertical"));		
		}
	}

}