package BehaviorORStrategyPattern;

public class NoQuackBeavior implements IQuackBehavior {
    @Override
    public void quack() {
        System.out.println("No Quack");
    }
}
