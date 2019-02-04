package com.wingapp;

import android.content.Intent;
import com.reactnativenavigation.controllers.SplashActivity;
import android.content.Intent; // <-- include if not already there

public class MainActivity extends SplashActivity {
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        //probably some other stuff here
    }
}
