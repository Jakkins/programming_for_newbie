package jakkins.zefiro.utils;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;

public class SharedPref {

	public SharedPreferences get(Activity activity) {
		return activity.getPreferences(Context.MODE_PRIVATE);
	}

	public SharedPreferences set(Activity activity) {
		return activity.getPreferences(Context.MODE_PRIVATE);
	}
}
