# my-cv
我的web前端求职简历

1. 实现一个计数器Counter,每次调用Counter,返回已经调用的次数。
``` javascript
function Counter() {
    return Counter(.prototype).count ++;
}
Counter(.prototype).count = 0;
```
``` javascript
function Counter() {                        let count = 0;
    if (!this.count) {                      function Counter() {
        this.count = 0;       等于              return count ++;
    }                                       }
    return this.count ++;                 
}
```
``` javascript
function Counter() {
    Counter == 1;
    return Counter.i;
}
Counter.toString/valueOf = () => {
    if (!Counter.i) { Counter.i = 0 };
    Counter.i++;
};
```
``` javascript
function A () {
    let count = 1;
    return () => {
        return count++;
    }
}
const Counter = A();
```
