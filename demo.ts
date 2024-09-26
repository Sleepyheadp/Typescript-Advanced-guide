class Cat {
	// meow() {}
	eat() {}
}
class Dog {
	eat() {}
	whatever() {}
}
function feedCat(cat: Cat) {}
// 报错！
// 我们给Dog类添加了一个新的方法,没有报错,为什么?
// 因为Dog类包含了eat方法,所以它是Cat类的子类
feedCat(new Dog());
