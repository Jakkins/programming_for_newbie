package jakkins.zefiro.components;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.widget.Button;

import androidx.appcompat.app.AppCompatDelegate;

/**
 * this class needs the user to create these files
 * values/themes.xml
 * values-night/themes.xml
 */
public class ThemeSwitcher {

	public ThemeSwitcher(Activity activity, Button button) {
		SharedPref sp = new SharedPref();
		button.setOnClickListener( event -> {
			if(sp.get(activity).getInt("dark", 0) == 0) {
				AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES);
				sp.set(activity).edit().putInt("dark", 1).apply();
			}
			else {
				AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO);
				sp.set(activity).edit().putInt("dark", 0).apply();
			}
		});
	}

	private static class SharedPref {
		public SharedPreferences get(Activity activity) {
			return activity.getPreferences(Context.MODE_PRIVATE);
		}
		public SharedPreferences set(Activity activity) {
			return activity.getPreferences(Context.MODE_PRIVATE);
		}
	}

}
