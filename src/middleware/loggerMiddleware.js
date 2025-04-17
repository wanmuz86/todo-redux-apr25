const loggerMiddleware = (store) => (next) => (action) => {
    // Before retrieval
    console.log('Dispatching:',action)
    console.log('Current store:',store.getState())
    
    // Perform the action from the reducer
    const result = next(action) 
    // After the action
    console.log('Current state after action ', store.getState())
    return result
}

export default loggerMiddleware;