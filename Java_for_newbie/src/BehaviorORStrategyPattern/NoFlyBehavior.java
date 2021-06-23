package BehaviorORStrategyPattern;

/*
    This is one strategy
*/
public class NoFlyBehavior implements IFlyBehavior {
    @Override
    public void fly() {
        System.out.println("Does not fly");
    }
}
