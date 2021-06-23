package jakkins.zefiro.events;

import android.content.Context;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;

import androidx.recyclerview.widget.RecyclerView;

import jakkins.zefiro.utils.GraphicsSettings;

public class MySwipeListener implements View.OnTouchListener {

	private final GestureDetector gestureDetector;
	private final RecyclerView recycleMenu;

	public MySwipeListener(Context ctx, RecyclerView recycleMenu){
		this.recycleMenu = recycleMenu;
		gestureDetector = new GestureDetector(ctx, new GestureListener(recycleMenu));
	}

	@Override
	public boolean onTouch(View v, MotionEvent event) {
		if(event.getAction() == MotionEvent.ACTION_DOWN) {
			GraphicsSettings.dismissStatusAndNavigation();
			recycleMenu.setVisibility(View.INVISIBLE);
		}
		gestureDetector.onTouchEvent(event);
		return true;
		// return false; // this block everything
	}

	private static class GestureListener extends AOnSwipeListener {

		RecyclerView recyclerMenu;

		public GestureListener(RecyclerView recycleMenu) {
			super();
			this.recyclerMenu = recycleMenu;
		}

		@Override
		public boolean onSwipe(Direction direction) {
			if(direction == Direction.LEFT) recyclerMenu.setVisibility(View.VISIBLE);
			return true;
		}
	}
}
