function getProList(typeid) {
    var list = Enumerable.from(projectType).where("$.typeid==" + typeid).toArray();
    return list;
}

function ViewModel() {
    var self = this;
    self.domainTypes = ko.observableArray(domainType);
    self.projectTypePCB = ko.observableArray(getProList(1));
    self.projectTypesFPC = ko.observableArray(getProList(2));
}
var vm = new ViewModel();
ko.applyBindings(vm);