using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Academy.HoloToolkit.Unity;


public class MenuEffect : MonoBehaviour {

    private Color originalColor;
    public Image image;
    // Use this for initialization
    void Start()
    {
        originalColor = image.color;
    }

    public void OnGazeLeave()
    {
        image.color = originalColor;
    }

    public void OnGazeEnter()
    {
        var color = image.color;
        var brigherColor = new Color(color.r * 0.9f, color.g * 0.9f, color.b * 0.9f, color.a);

        image.color = brigherColor;
    }
}
