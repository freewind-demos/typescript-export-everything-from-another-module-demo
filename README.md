TypeScript Export Everything from Another Module Demo
=====================================================

在一个module中把另一个module中所有的成员原原本本的再次export出去，需要：

1. export * from './hello';

这里的`*`，代表了除`default`以外的其它所有成员

2. export {default} from './hello';

它的意思是把`default`拿到再次export出去

以上两者结合起来才代表“全部”。


```
npm install
npm run demo
```
