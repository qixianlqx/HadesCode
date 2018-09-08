function ViewModel() {
    var self = this;
    self.ProDetails = ko.observableArray(getProctions());
}
var vm = new ViewModel();
ko.applyBindings(vm);

//初始化产品数据
function getProctions() {
    var data = proList;
    var prolist = [];
    var count = 1;
    $.each(data, function(index, obj) {

        if (Enumerable.from(prolist).count("$.typeid==" + obj.typeid) < 8) {
            prolist.push(obj);
        }

    });
    return prolist;
}