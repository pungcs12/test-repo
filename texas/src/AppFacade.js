
puremvc.define(
    // CLASS INFO
    {
        name: 'AppFacade',
        parent: puremvc.Facade,

        constructor: function (multitonKey) {
            puremvc.Facade.call(this, multitonKey);
        }
    },
    // INSTANCE MEMBERS
    {
        initializeController: function () {
          console.log("controller");
            puremvc.Facade.prototype.initializeController.call(this);
            this.registerCommand(AppFacade.STARTUP, Texas.StartupCommand);
        },
        initializeModel: function () {
          console.log("Model");
            puremvc.Facade.prototype.initializeModel.call(this);
        },
        initializeView: function () {
          console.log("View");
            puremvc.Facade.prototype.initializeView.call(this);
        },

        startup: function () {
            console.log("Starup");
            this.sendNotification(AppFacade.STARTUP);
        }
    },
    // STATIC MEMBERS
    {
        getInstance: function(multitonKey) {

            var instanceMap = puremvc.Facade.instanceMap;
            var instance = instanceMap[multitonKey];
            if(instance) {
                return instance;
            }
            return instanceMap[multitonKey] = new AppFacade(multitonKey);
        },
        NAME: 'AppFacade',
        STARTUP: 'Startup'
    }
);
