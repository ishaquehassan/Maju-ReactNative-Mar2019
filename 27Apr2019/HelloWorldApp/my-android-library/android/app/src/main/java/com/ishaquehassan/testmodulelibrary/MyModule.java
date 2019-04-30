package com.ishaquehassan.testmodulelibrary;

import android.animation.TimeAnimator;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyModule extends ReactContextBaseJavaModule {
    public MyModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyNativeModule";
    }

    @ReactMethod
    public void showToast(String msg){
        Toast.makeText(getCurrentActivity(),msg, Toast.LENGTH_SHORT).show();
    }
}
