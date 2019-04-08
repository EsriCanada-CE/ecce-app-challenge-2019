package com.esri.arcgisruntime.arvrdemos.arcoreinthearcgisruntimesdkforandroid;

import android.Manifest;
import android.app.ActivityOptions;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.Toast;

import com.esri.arcgisruntime.layers.ArcGISSceneLayer;
import com.esri.arcgisruntime.mapping.ArcGISScene;
import com.esri.arcgisruntime.mapping.Basemap;
import com.esri.arcgisruntime.mapping.view.ARCoreMotionDataSource;
import com.esri.arcgisruntime.mapping.view.AtmosphereEffect;
import com.esri.arcgisruntime.mapping.view.Camera;
import com.esri.arcgisruntime.mapping.view.FirstPersonCameraController;
import com.esri.arcgisruntime.mapping.view.ARCoreMotionDataSource;
import com.esri.arcgisruntime.mapping.view.SceneView;
import com.google.ar.core.exceptions.CameraNotAvailableException;
import com.google.ar.sceneform.ArSceneView;
import com.google.ar.sceneform.Scene;

public class MainActivity extends AppCompatActivity {
  private static final int PERMISSION_TO_USE_CAMERA = 0;

  private SceneView mSceneView;
  private ArSceneView mArSceneView;
  private ArcGISSceneLayer mSceneBuildings;
    private ArcGISSceneLayer mSceneFoundation;
    private ArcGISScene mScene;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    mSceneView = findViewById(R.id.scene_view);

      Log.d("onCreate","before camera");
    // Request camera permissions...
    checkForCameraPermissions();

    Log.d("onCreate","after camera");
  }

  //Setup the Scene for Augmented Reality
  private void setUpARScene() {


    // Create scene without a basemap.  Background for scene content provided by device camera.
    mSceneView.setScene(new ArcGISScene(Basemap.createImagery()));



    // Add San Diego scene layer.  This operational data will render on a video feed (eg from the device camera).
    //mSceneView.getScene().getOperationalLayers().add(new ArcGISSceneLayer("https://tiles.arcgis.com/tiles/Imiq6naek6ZWdour/arcgis/rest/services/San_Diego_Textured_Buildings/SceneServer/layers/0"));

      // Testing with Vancouver Scene data
    //mSceneView.getScene().getOperationalLayers().add(new ArcGISSceneLayer("https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Building_Vancouver/SceneServer/layers/0"));

      // Testing with city of Toronto Multip-patch data section 50G South 2
//    mSceneView.getScene().getOperationalLayers().add(new ArcGISSceneLayer("https://tiles.arcgis.com/tiles/qU80cCGJEmdjMJVt/arcgis/rest/services/Multipatch_50G_SOUTH_2_SINGLE/SceneServer/layers/0"));

      // Testing with city of Toronto Multip-patch data section 51G
//      mSceneView.getScene().getOperationalLayers().add(new ArcGISSceneLayer("https://tiles.arcgis.com/tiles/qU80cCGJEmdjMJVt/arcgis/rest/services/Multipatch_51G/SceneServer/layers/0"));

      // Production AR Scene Data URL for Toronto Waterfront Project
      mSceneBuildings = new ArcGISSceneLayer("https://tiles.arcgis.com/tiles/qU80cCGJEmdjMJVt/arcgis/rest/services/ECCE_2019_WAC_SMART_Buildings/SceneServer/layers/0");
      mSceneFoundation = new ArcGISSceneLayer("https://tiles.arcgis.com/tiles/qU80cCGJEmdjMJVt/arcgis/rest/services/ECCE_2019_WAC_SMART_Foundation/SceneServer/layers/0");
//      mSceneLayer2 = new ArcGISSceneLayer("https://tiles.arcgis.com/tiles/qU80cCGJEmdjMJVt/arcgis/rest/services/Multipatch_51G/SceneServer/layers/0");

//      mScene = new ArcGISScene("http://jrmistry.maps.arcgis.com/home/webscene/viewer.html?webscene=96100632f654402ba81ca35d1746756f");

      mSceneView.getScene().getOperationalLayers().add(mSceneBuildings);
      mSceneView.getScene().getOperationalLayers().add(mSceneFoundation);
//      mSceneView.getScene().getOperationalLayers().add(mSceneLayer2);

      //// Try to load from Scene URL
//      ArcGISScene scene3D = new ArcGISScene("http://jrmistry.maps.arcgis.com/home/item.html?id=96100632f654402ba81ca35d1746756f");
//      mSceneView.setScene(scene3D);


      mSceneView.setAtmosphereEffect(AtmosphereEffect.REALISTIC);




    // Enable AR for scene view.
    mSceneView.setARModeEnabled(true);

    // Create our Preview view and set it as the content of our activity.
    mArSceneView = new ArSceneView(this);


    ////



    // Create an instance of Camera
    FrameLayout preview = findViewById(R.id.camera_preview);
    preview.removeAllViews();
    FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
    preview.addView(mArSceneView, params);

    //Camera cameraSanDiego = new Camera(32.707, -117.157, 60, 270, 0, 0);
    Camera cameraSanDiego = new Camera(
            43.647,
            -79.340,
            200,
            260,
            0,
            0);
    FirstPersonCameraController fpcController = new FirstPersonCameraController();
    fpcController.setInitialPosition(cameraSanDiego);

    fpcController.setTranslationFactor(500);

    ARCoreMotionDataSource arMotionSource = new ARCoreMotionDataSource(mArSceneView,this);
    fpcController.setDeviceMotionDataSource(arMotionSource);

    fpcController.setFramerate(FirstPersonCameraController.FirstPersonFramerate.SPEED);
    mSceneView.setCameraController(fpcController);

    // To update position and orientation of the camera with device sensors use:
    arMotionSource.startAll();
  }


  @Override
  protected void onDestroy() {
    if (mArSceneView != null) mArSceneView.destroy();
    super.onDestroy();
  }

  @Override
  protected void onPause(){
    mSceneView.pause();
    if (mArSceneView != null) mArSceneView.pause();
    super.onPause();
  }

  @Override
  protected void onResume(){
    mSceneView.resume();
    if (mArSceneView != null) {
      try {
        mArSceneView.resume();
      }
      catch(CameraNotAvailableException e){}
    }
    super.onResume();
  }

  /**
   * Determine if we're able to use the camera
   */
  private void checkForCameraPermissions() {
    // Explicitly check for privilege
    if (android.os.Build.VERSION.SDK_INT >= 23) {
      final int permissionCheck = ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA);
      if (permissionCheck == PackageManager.PERMISSION_GRANTED) {
        Log.i("MainActivity", "Camera permission granted");
        setUpARScene();

      } else {
        Log.i("MainActivity", "Camera permission not granted, asking ....");
        ActivityCompat.requestPermissions(this,
            new String[] { Manifest.permission.CAMERA },
            PERMISSION_TO_USE_CAMERA);
      }
    }
  }
  @Override
  public void onRequestPermissionsResult(int requestCode,
                                         String[] permissions, int[] grantResults) {
    switch (requestCode) {
      case PERMISSION_TO_USE_CAMERA: {
        // If request is cancelled, the result arrays are empty.
        if (grantResults.length > 0
            && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
          Log.i("MainActivity", "Camera permission granted...");
          setUpARScene();
        } else {
          Log.i("MainActivity", "Camera permission denied...");
        }
        return;
      }
    }
  }
}