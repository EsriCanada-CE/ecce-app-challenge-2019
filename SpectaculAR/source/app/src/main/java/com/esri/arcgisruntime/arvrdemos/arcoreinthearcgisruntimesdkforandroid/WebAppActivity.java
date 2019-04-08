package com.esri.arcgisruntime.arvrdemos.arcoreinthearcgisruntimesdkforandroid;

import android.app.ActivityOptions;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebAppActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_app);

        WebView webView = (WebView) findViewById(R.id.webViewWebApp);
        webView.setWebViewClient(new WebViewClient());
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setGeolocationEnabled(true);
        webView.loadUrl("http://bit.ly/ECCE-2019-WAC-SMART-3DWebApp");
    }

    public void pageMainActivity(View view) {
        Intent intent = new Intent(this, MainActivity.class);

        startActivity(intent, ActivityOptions.makeSceneTransitionAnimation(this).toBundle());
    }
}
