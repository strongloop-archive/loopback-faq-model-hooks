**DEPRECATED AS OF 2016-09-19**

---

#loopback-faq-model-hooks

***NOTE***: Model hooks are now deprecated.  Use [operation hooks](http://docs.strongloop.com/display/LB/Operation+hooks) instead.
See [loopback-faq-operation-hooks](https://github.com/strongloop/loopback-faq-operation-hooks) for an example. 

```
$ git clone git@github.com:strongloop/loopback-faq-model-hooks.git
$ cd loopback-faq-model hooks
$ node .
```

- [How do you use model hooks?](#how-do-you-use-model-hooks)
- [What model hooks are available?](#what-model-hooks-are-available)

##How do you use model hooks?
1. Determine which hook you would like to use ([`afterInitialize`](/common/models/coffee-shop.js), [`beforeValidate`](/common/models/coffee-shop.js), ...)
2. Add the hook to your [`model.js` file](/common/models/coffee-shop.js)

##What model hooks are available?
See http://docs.strongloop.com/display/LB/Model+hooks.  All model hooks are now deprecated, _except_ for [afterInitialize](http://docs.strongloop.com/display/LB/Model+hooks#Modelhooks-afterInitialize).
