---
layout: til
date: 2021-12-21
tags: [blog, til]
til: about distinct (or opaque) types
# eleventyComputed:
#   title: "TIL {{title}}"
---

In TypeScript, type aliases are just names for another type, for example:

```
type CustomerId = number;
type OrderId = number;
```

Because both are numbers, TypeScript treats them as compatible, interchangeable, or _transparent_. You could have a function that takes a `CustomerId` and pass it an `OrderId` instead, and TypeScript would not complain.

However, semantically this makes little sense. They may both be _represented_ numbers, but they are two different types. In the domain we're modeling, they are _distinct_.

I've learned this through watching [Scott Wlaschin's talk "Domain Modeling Made Functional"](https://www.youtube.com/watch?v=2JB1_e5wZmU). Scott uses F#, where you can _wrap_ a type to make it distinct.

Trying to find out how this would work in TypeScript, I found [this blog post by Charles Pick](https://codemix.com/opaque-types-in-javascript/) from 2017 --- and it seems like TypeScript still does not have any native support for opaque types.

And thus for TypeScript to recognize two types as incompatible, they need to be _structurally different_. Charles' suggestion, therefore, is to use intersections that add a unique property to your base type, effectively making it opaque.

But if I'm adding a property... does this work for primitives?

It does! TypeScript seems to have no issues with intersections between a number and an object type :man_shrugging:. The secret is that we're not _actually_ adding the property to the values we're storing; we're just adding them to the type and casting the primitive to our new distinct one.

```
type CustomerId = number & { _type: 'CustomerId' };
type OrderId = number & { _type: 'OrderId' };

const makeCustomerId = (id: number) => id as CustomerId;
const makeOrderId = (id: number) => id as OrderId;
```

In this example, the `CustomerId` and `OrderId` types are no longer compatible, and once a primitive number is cast to either, it won't be accepted where the other is expected.

The downside is that we explicitly need to _create_ or at least cast these values, but, as Scott mentions in his talk, this only needs to happen at the boundaries of your application --- following user input, or receiving data from a database or network request. The advantage here is that we can use the point of creation also as point of validation; making sure the values follow specific constraints.

Happy (static) typing!

:keyboard:

*[TIL]: Today I learned
