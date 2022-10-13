

This document describes klm127s opinion so far on the code commenting policy.


# How the standard JSDoc Format looks

Here is an example I created for an imagined class called CoolVector. 

This is fully documented. 

```typescript

/**
 *
 *
 * @export
 * @class CoolVector
 */
export class CoolVector {


    static vectorsCreated : number 

    x : number
    /**
     * Creates an instance of CoolVector.
     * @memberof CoolVector
     */
    constructor(x:number, y:number, z:number) {
    }

    /**
     * Sets vector components to the given parameters..
     *
     * @param {number} x - the number to change the x component to
     * @param {number} y - the number to change the y component to
     * @param {number} z - the number to change the z component to
     * @memberof CoolVector
     */
    set(x:number, y:number, z:number) {

    }

    
    /**
     * Returns the magnitude of the CoolVector.
     * 
     * @return {*}  {number}
     * @memberof CoolVector
     */
    magnitude() : number {

    }

    /**
     * Rotates the vector. 
     *
     * @param {number[][]} quaternion - A quaternion rotation to apply.
     * @memberof CoolVector
     */
    transform(quaternion:number[][]) {

    }
}



/**
 * traverseVectors steps through an array of functions and applies callback to each one, replacing it it with the returned value of the callback function.
 *
 * @param {CoolVector[]} vectors
 * @param {(thisVec:CoolVector, thisIndex:number, allVecs:CoolVector[])=>string} callback
 */
function traverseVectors(vectors:CoolVector[], callback:(thisVec:CoolVector, thisIndex:number, allVecs:CoolVector[])=>CoolVector) {

}
```


# How we should do ours

## Less by Default
It is not necessary to comment every piece of code to the degree shown above. Parameters and returns can be figured out by intellisense and can often be quickly discerned from the code context. The raison d'etre for typescript is also to force additional information into the code itself. 

## Describe when necessary
Comments should be used when describing things that are not clear from the mathematic and semantic information present, or whenever we want to add additional information. Parameters like `x:number`,`y:number`, or `z:number` may be obvious in some contexts, but a parameter named `lastBrowserSetting:BSetting` may require a sentence. 

## JS/TSDoc when applicable
JSDoc/TSDoc syntax, such as `@param {type} name - description` or `@returns {type} - description` should be used when commenting on those sorts of things, for the benefit of documentation generation.

## Thoughtful naming
We can comment less if we have high semantic clarity through thoughtful naming. We should follow proper naming conventions and refactor frequently. Most functions are verbs, though getters could optionally be nouns. 

## Start with name of what is being described
A good practice when commenting anything is to start with the name of that thing. E.g. `// myFunc calculates...`. Thus, the subject of the sentence is guaranteed to be obvious.

## Document what you dont get
Another good practice is to focus documentation efforts on any piece of code you do not understand. Document it to learn it, and provide hooks to remember it. 

# Shortcuts

You can easily generate comment blocks using `Document This`, a VSCode extension. The default keyboard shortcut is `ctrl+alt+d` while highlighting the documentation target. 

`f2` is always useful when an identifier is highlighted; you can change the name across the scope. 

# Other Things

We can go through and write/generate a bunch of documentation during refactoring periods but not do it very thoroughly during first-pass writes.

Language in our code documentation may well be useful for HW assignments in specs/design phase.






