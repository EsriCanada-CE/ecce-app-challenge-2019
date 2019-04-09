using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Esri.HoloLens.APP;

public class ButtonShowAddress : MonoBehaviour {

	// Use this for initialization
    public void OnSelect()
    {
        this.gameObject.SendMessageUpwards("OnClickShowAddress", this.transform.parent.transform.position);
        DestroyObject(this.transform.parent.gameObject);
    }
}
