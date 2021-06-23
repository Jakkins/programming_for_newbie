package BehaviorORStrategyPattern;

public class Main {
    public static void main(String[] args) {
        Duck rubberDuck = new Duck(new NoFlyBehavior(), new NoQuackBeavior());
        rubberDuck.flyB.fly();
        rubberDuck.quackB.quack();

        Duck realDuck = new Duck(new FlyBehavior(), new QuackBehavior());
        realDuck.flyB.fly();
        realDuck.quackB.quack();
     }
}
