function ViewModel() {
    var self = this;
    self.typeList = ko.observableArray(proType);
    self.ProDetails = ko.observableArray(getProductByType(1));
    self.typeclick = function(item) {
        self.currentTypeName(item.name);
        self.ProDetails(getProductByType(item.id));
    }
    self.currentTypeName = ko.observable("PCB");
}
var vm = new ViewModel();
ko.applyBindings(vm);

//初始化产品数据
function getProductByType(id) {

    var list = Enumerable.from(proList).where("$.typeid==" + id).toArray();
    return list;
}