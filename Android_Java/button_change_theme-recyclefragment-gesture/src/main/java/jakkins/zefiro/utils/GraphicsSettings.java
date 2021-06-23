package jakkins.zefiro.utils;

import android.view.Window;
import android.view.WindowInsets;
import android.view.WindowInsetsController;

public class GraphicsSettings {

	private static WindowInsetsController controller;

	public static void setFullImmersive(Window window) {
		window.setDecorFitsSystemWindows(false);
		controller = window.getInsetsController();
		if (controller != null) {
			controller.hide(WindowInsets.Type.statusBars() | WindowInsets.Type.navigationBars());
			controller.setSystemBarsBehavior(WindowInsetsController.BEHAVIOR_SHOW_BARS_BY_SWIPE);
		}
	}

	public static void dismissStatusAndNavigation() {
		if (controller != null) {
			controller.hide(WindowInsets.Type.statusBars() | WindowInsets.Type.navigationBars());
		}
	}

}
