package com.esri.arcgisruntime.arvrdemos.arcoreinthearcgisruntimesdkforandroid;

import android.app.ActivityOptions;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class DeepDiveActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_deep_dive);
    }

    public void pageMainActivity(View view) {
        Intent intent = new Intent(this, MainActivity.class);

        startActivity(intent, ActivityOptions.makeSceneTransitionAnimation(this).toBundle());
    }
}
