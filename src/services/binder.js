class BindingService {
    static services = {};

    static listen(name, updateFunction) {
        // console.log("new listener: ", name, updateFunction);
        if(!this.services[name])
            this.services[name] = {lastSignalArgs: null, listeners: []};

        if(this.services[name].lastSignalArgs)
            updateFunction(this.services[name].lastSignalArgs);

        this.services[name].listeners.push(updateFunction);
    }

    static signal(name, ...args) {
        // console.log("signaled: ", name, args[0]);
        if(this.services[name]) {
            const listeners = this.services[name].listeners;
            for (let i = 0; i < listeners.length; i++)
                listeners[i](args);

            this.services[name].lastSignalArgs = args;
        } else {
            this.services[name] = {lastSignalArgs: args, listeners: []}
        }
    }
}

export default BindingService;