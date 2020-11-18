# Debugging
debug *[ᵥₑᵣᵦ]*: Transforming a broken program into a working program.
## Detection
- Program crashes or "bugs out"
- Build/compile error
- Automated testing fails

## Mandatory Checks
- Check in the Browser console
- Check in the Server console
- Read the stack trace

## How to Tackle Bugs
- Verbalizing helps - Rubber Duck it!
- Sleeping helps - it is possible to do this, but we need a break!
- Write to the console!
    - console.logs
        &#8680; Prints to the console
    - console.traces
        &#8680; Will tell you every function that ran until you get to this
        console.trace
    - console.counts
        &#8680; Will tell you how many times a function runs
- Read the stack trace
- Use the debugger
- Use the elements tab
### Common questions to ask yourself
* Is the server running?
* Did the server restart?
* Is this the right file?
* Are you suuuure?
* Is the file saved?
* Is the build working?

## Prevention
- Readability > smallness (less lines of code)
- Simple > clever
- git hygiene (commits with small changes)
- Formatting matters!
- Use functions in your favor
    - Prefer small, single-purposed, and pure functions

### Single Responsibility Principle
- A function should complete one task and have one purpose.

### Linters (e.g. ESLint)
- Programs and features that help catch errors before execution.

### Formatter (e.g. Prettier)
- Reformats your code for neatness and uniformity

## Random Nuggets of Knowledge

### Cache
>Web browsers store a copy of the webpage code locally on your computer so it
loads quickly.

### Console.log
>Add css styles using console.log("%cTextHere", css-styling-here)

<!--@nested-tags:debugging-->
