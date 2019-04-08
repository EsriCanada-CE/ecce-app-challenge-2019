package com.esri.arcgisruntime.arvrdemos.arcoreinthearcgisruntimesdkforandroid;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class ContactFragment extends Fragment {

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        View viewContact = inflater.inflate(R.layout.fragment_contact, container, false);

//        WebView webView = (WebView) viewContact.findViewById(R.id.webViewContact);
//        webView.setWebViewClient(new WebViewClient());;
//        webView.getSettings().setJavaScriptEnabled(true);
//        webView.getSettings().setGeolocationEnabled(true);
//        webView.loadUrl("https://jrmistry.github.io/ECCE2019AC_Contact.html");

        return viewContact;
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }
}
