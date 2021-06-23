package jakkins.zefiro.activities;

import android.os.Bundle;
import android.view.Menu;
import android.view.MotionEvent;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import jakkins.zefiro.R;
import jakkins.zefiro.components.ThemeSwitcher;
import jakkins.zefiro.components.menu.MenuPagerAdapter;
import jakkins.zefiro.events.MySwipeListener;
import jakkins.zefiro.utils.GraphicsSettings;
import jakkins.zefiro.utils.SharedPref;

/**
 * TODO
 *  menu -> navigation
 *      navigazione con menu con tante pagine sotto la metà dello schermo
 *  bottone cambia tema da migliorare la grafica del bottone
 */
public class MainActivity extends AppCompatActivity {

	RecyclerView recycleMenu;

	final String[] buttons = new String[]{
			"ciao", "botton2", "altro bottone", "prova", "prova", "prova",
			"ciao", "botton2", "altro bottone", "prova", "prova", "prova",
			"ciao", "botton2", "altro bottone", "prova", "prova", "prova",
			"ciao", "botton2", "altro bottone", "prova", "prova", "prova",
			"ciao", "botton2", "altro bottone", "prova", "prova", "prova",
			"ciao", "botton2", "altro bottone", "prova", "prova", "prova"};

	@Override
    protected void onCreate(Bundle savedInstanceState) {
	    super.onCreate(savedInstanceState);

		/**
		 * graphics
		 */
		setContentView(R.layout.activity_main);
		ConstraintLayout rootView = findViewById(R.id.root_view);
		new ThemeSwitcher(this, findViewById(R.id.themeSwitcherButton));
		GraphicsSettings.setFullImmersive(getWindow());

		recycleMenu = findViewById(R.id.recycle_menu);
		recycleMenu.setVisibility(View.GONE);
		recycleMenu.setAdapter(new MenuPagerAdapter(this, buttons));
		GridLayoutManager gridLayoutManager = new GridLayoutManager(this, 6, GridLayoutManager.HORIZONTAL, true);
		recycleMenu.setLayoutManager(gridLayoutManager); // MUST

		/**
		 * listener
		 */
		rootView.setOnTouchListener(new MySwipeListener(this, recycleMenu));
	}

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main_menu, menu);
        return true;
    }
}