export const EventQueueHandler = function* (events) {
    let i =0;
    for(i = 0; i< events.length; i++){
        yield events[i]();
    }
}