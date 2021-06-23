package BehaviorORStrategyPattern;

public class FlyBehavior implements IFlyBehavior {
    @Override
    public void fly() {
        System.out.println("Fly!");
    }
}
