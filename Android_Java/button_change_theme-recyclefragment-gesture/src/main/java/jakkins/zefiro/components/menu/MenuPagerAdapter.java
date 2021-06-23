package jakkins.zefiro.components.menu;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import jakkins.zefiro.R;

public class MenuPagerAdapter extends RecyclerView.Adapter<MenuViewHolder> {

	private final LayoutInflater mInflater;
	private final String[] datas;

	public MenuPagerAdapter(Context context, String[] datas) {
		this.mInflater = LayoutInflater.from(context);
		this.datas = datas;
	}

	@Override
	public long getItemId(int position) {
		return datas[position].hashCode();
	}

	@Override
	public int getItemCount() {
		return datas.length;
	}

	/**
	 * set the layout
	 *
	 * @param parent
	 * @param viewType
	 * @return
	 */
	@NonNull
	@Override
	public MenuViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
		View view = mInflater.inflate(R.layout.menu_root_item, parent, false);
		return new MenuViewHolder(view);
	}

	/**
	 * set the item
	 *
	 * @param holder
	 * @param position
	 */
	@Override
	public void onBindViewHolder(@NonNull MenuViewHolder holder, int position) {
		String values = datas[position];
		holder.b.setText(values);
	}

}

/**
 * set layout of the item
 */
class MenuViewHolder extends RecyclerView.ViewHolder {

	Button b;

	public MenuViewHolder(@NonNull View itemView) {
		super(itemView);
		b = itemView.findViewById(R.id.button_menu_root_item);
	}
}
