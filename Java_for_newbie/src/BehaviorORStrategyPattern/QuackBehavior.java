package BehaviorORStrategyPattern;

public class QuackBehavior implements IQuackBehavior {
    @Override
    public void quack() {
        System.out.println("Quack!");
    }
}
