//如果是跳转过来就根据参数取得
function getProductByID(obj) {

    var prolist = [];
    var proid = jQuery.url.param("id");
    var typeid = jQuery.url.param("typeid");
    var proinfo = Enumerable.from(proList).firstOrDefault("$.typeid==" + typeid + " && $.id==" + proid);
    //设置上一个，下一个
    getinfo(proinfo, obj);

    return proinfo;
}

function getinfo(info, obj) {
    var query = Enumerable.from(proList).where("$.typeid==" + info.typeid + " && $.id>" + info.id);
    $(".next").addClass("disabled");
    obj.nextName("无");
    if (query.count() > 0) {
        var minInfo = query.minBy("$.id");
        if (minInfo) {
            $(".next").removeClass("disabled");
            obj.nextName(minInfo.name);
        }
    }

    obj.preName("无");
    $(".previous").addClass("disabled");
    query = Enumerable.from(proList).where("$.typeid==" + info.typeid + " && $.id<" + info.id)
    if (query.count() > 0) {
        var maxInfo = query.maxBy("$.id");
        if (maxInfo) {
            $(".previous").removeClass("disabled");
            obj.preName(maxInfo.name);
        }
    }
 
}

function ViewModel() {
    var self = this;
    self.click = function(type) {
        var info = {};
        var current = self.ProInfo();

        var query = Enumerable.from(proList).where("$.typeid==" + current.typeid + " && $.id" + (type ? ">" : "<") + current.id);
        if (type == 1) {
            if (query.count() > 0) {
                info = query.minBy("$.id");
            }
        } else {
            if (query.count() > 0) {
                info = query.maxBy("$.id");
            }
        }
        if (info) {
            self.ProInfo(info);
            getinfo(info, self);
        }
    };
    self.preName = ko.observable("无");
    self.nextName = ko.observable("无");
    self.ProInfo = ko.observable(getProductByID(self));
}
var vm = new ViewModel();
ko.applyBindings(vm);