# Redux

## What is Redux?
- State Management Library:
  - A small tool for containing, accessing, and changing a set of informaton - often called "state"
- If you do not have problems with state management, you might find the benefits of Redux harder to understand.

## Principles
- Single source of truth
- Data is read-only
- Changes are requested though actions

## Vocabulary
### Store
  - The single holder of information
  - **Read-Only**: Provides methods to **access state** & **listen for state changes**
  - Store can recevie dispatched signals (actions) meant to affect state
### State
### Actions
  - Store can receive dispatched signals (actions) meant to affect state.
  - Loosely defined as "things that happen in your app that affect state"
  - Dispatching an action triggers the **reducer** to produce a new state
### Dispatch
### Reducer (Inside the store)
  - Dispatching an action triggers the reduce to produce a new state.
  - Decides: based on this signal (action), what the new state should be.
### Subscribe

## Maplestory Vocabulay
- Store: The entire game for 1 player
- State: Player's properties
  - HP, MP, etc.
- Action: Player Options
  - Take Damage, Drink Potion, Walk, etc.
- Dispatch: Player fighting a monster, Clicking on potion, etc.
- Reducer: Game engine that changes state
- Subscribe: Game listens for player property changes
  - Runs callback that will update view

## EVENT CYCLE
- User performs an action on the webpage (fires an event, like 'click')
- The event handler dispatches an action (JS object) to the store
- The store's reduce function is invoked with the current store state and action as arguments and returns a new state.
- After the new state is returned to the store, all subscribed listeners (i.e. callbacks/Javascript functions) will be fired with the new state
  - These listeners usually re-render the webpage.


<!-- @nested-tags:redux -->
