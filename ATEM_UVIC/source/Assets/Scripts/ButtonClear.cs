using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class ButtonClear : MonoBehaviour {

    GameObject[] gameObjects;

    public void OnSelect()
    {
        gameObjects = GameObject.FindGameObjectsWithTag("addressmark");

        if (gameObjects.Length > 0)
        {
            foreach (var obj in gameObjects)
            {
                Destroy(obj);
            }
        }

        gameObjects= GameObject.FindGameObjectsWithTag("suggestmark");

        if (gameObjects.Length > 0)
        {
            foreach (var obj in gameObjects)
            {
                Destroy(obj);
            }
        }
        
    }
        
}
