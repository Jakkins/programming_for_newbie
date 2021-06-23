package BehaviorORStrategyPattern;

/*
    Behavior Pattern OR Strategy Pattern

    Duck has 2 interfaces
*/
public class Duck {

    IFlyBehavior flyB;
    IQuackBehavior quackB;

    public Duck(IFlyBehavior flyB, IQuackBehavior quackB) {
        this.flyB = flyB;
        this.quackB = quackB;
    }

}
