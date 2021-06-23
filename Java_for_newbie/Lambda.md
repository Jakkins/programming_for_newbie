- [Why use this?](https://stackoverflow.com/questions/2186931/java-pass-method-as-parameter)

Normal = Without lambda expressions:
```java
obj.aMethod(new AFunctionalInterface() {
    @Override
    public boolean anotherMethod(int i)
    {
        return i == 982
    }
});
```
Lambda = With lambda expressions:
```java
obj.aMethod(i -> i == 982);
```

---

Normal
```java
buttonFileChoose.setOnAction(new EventHandler<ActionEvent>() {
  @Override
  public void handle(ActionEvent event) {
    FileChooser fileChooser = new FileChooser();
    fileChooser.setTitle("Choose Preset File");
    fileChooser.getExtensionFilters().addAll(
      new FileChooser.ExtensionFilter("txt", "*.txt")
    );
    File file = fileChooser.showOpenDialog(primaryStage);
  }
});
```

Lambda
```java
buttonFileChoose.setOnAction(event -> {
  FileChooser fileChooser = new FileChooser();
  fileChooser.setTitle("Choose Preset File");
  fileChooser.getExtensionFilters().addAll(
    new FileChooser.ExtensionFilter("txt", "*.txt")
  );
  File file = fileChooser.showOpenDialog(primaryStage);
});
```
