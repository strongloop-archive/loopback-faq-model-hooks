#loopback-faq-model-hooks
```
git clone git@github.com:strongloop/loopback-faq-model-hooks.git
cd loopback-faq-model hooks
slc run
```

- [How do you use model hooks?](#how-do-you-use-model-hooks)
- [What model hooks are available?](#what-model-hooks-are-available)

##How do you use model hooks?
1. Determine which hook you would like to use ([`afterInitialize`](/common/models/coffee-shop.js), [`beforeValidate`](/common/models/coffee-shop.js), ...)
2. Add the hook to your [`model.js` file](/common/models/coffee-shop.js)

##What model hooks are available?
See http://docs.strongloop.com/display/LB/Model+hooks
