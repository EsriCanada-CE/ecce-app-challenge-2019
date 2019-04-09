using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class ButtonClose : MonoBehaviour {

    public void OnSelect()
    {
        Destroy(this.transform.parent.gameObject);
    }
        
}
