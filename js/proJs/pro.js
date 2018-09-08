//pcb类型
var proType = [{ name: 'PCB', id: 1 },
    { name: 'FPC&RFPC', id: 2 }
];
//产品项目类
var projectType = [
    { num: 1, name: '层数', attr: '2-24(层)(layers)', typeid: 1 },
    { num: 2, name: '完成板尺寸(最大)', attr: '21.5″×24.5″（546mm×622mm）', typeid: 1 },
    { num: 3, name: '板厚度', attr: '板厚度', typeid: 1 },
    { num: 4, name: '成品厚度公差', attr: '±10% \n ±3mil （ 板 厚 ≤ 0.8mm \n Board Thickness ≤ 0.8mm', typeid: 1 },
    { num: 5, name: '板曲(最小)', attr: '≤0.7%', typeid: 1 },
    { num: 6, name: '钻孔孔径', attr: '0.005”-0.255” (0.15mm~6.5mm)', typeid: 1 },
    { num: 7, name: '外层底铜厚度', attr: '1/3 OZ-3OZ (0.012mm -0.102mm)', typeid: 1 },
    { num: 8, name: '内层底铜厚度', attr: '1/2 OZ-3 OZ (0.017mm -0.105mm)', typeid: 1 },
    { num: 9, name: '板料类型', attr: 'FR-4 (130℃Tg-180℃Tg）、CM3、无卤等', typeid: 1 },
    { num: 10, name: '孔电镀纵横比(最大)', attr: '10:1', typeid: 1 },
    { num: 11, name: '孔径公差(镀通孔)', attr: '±3mil ( ±0.075mm)', typeid: 1 },
    { num: 12, name: '孔径公差(非镀通孔)', attr: '±1mil ( ±0.025mm)', typeid: 1 },
    { num: 13, name: '孔壁铜厚', attr: '≥0.8mil (≥0.020mm)', typeid: 1 },
    { num: 14, name: '内层设计线宽/ 间距(最小)', attr: 'H/HOZ 3.0mil/3.0mil(0.075mm /0.075mm) \n 1/1OZ 4mil/4mil(0.1016mm/ 0.1016mm) \n 2/2OZ 5mil/5mil(0.127mm/0.127mm) \n 3/3OZ6mil/6mil(0.152mm/0.152mm)', typeid: 1 },
    { num: 15, name: '外层设计线宽/ 间距(最小)', attr: 'T/TOZ 3.0mil/3.0mil (0.075mm/ 0.075mm）\n H/HOZ 3.5mil/3.5mil(0.089mm/0.089mm) \n 1/1OZ 4.5mil/4.5mil (0.114mm/0.114mm ) \n 2/2OZ 6mil/6mil (0.152mm/0.152mm ) \n 3/3OZ 7mil/7mil (0.152mm/0.152mm)', typeid: 1 },
    { num: 16, name: '阻焊桥宽(最小)', attr: '2. 5mil (0.064mm)', typeid: 1 },
    { num: 17, name: '外形公差(孔到边)(最小)', attr: '±4mil ( ±0.101mm)', typeid: 1 },
    { num: 18, name: '热冲击', attr: '288 ℃ 10秒（3次）', typeid: 1 },
    { num: 19, name: '离子污染测试', attr: '<1.56ug/cm2(NaCl)', typeid: 1 },
    { num: 20, name: '抗剥离强度', attr: '≥1.4N/mm', typeid: 1 },
    { num: 21, name: '特性阻抗控制', attr: '±10%', typeid: 1 },
    { num: 22, name: '阻焊剂强度', attr: '>6H', typeid: 1 },
    { num: 23, name: '表面处理', attr: '抗氧化，沉金，无铅喷锡，电镍/金，碳油，蓝胶等', typeid: 1 },

    { num: 1, name: '层数', attr: 'FPC：2-6 (层)(layers) RFPC：2-10 (层)(layers)', typeid: 2 },
    { num: 2, name: '完成板尺寸(最大)', attr: '19.7″×19.7″（500mm×500mm）', typeid: 2 },
    { num: 3, name: '主要材料品牌', attr: 'Doosan\Thinflex\Shengyi\Taiyo\DongYi', typeid: 2 },
    { num: 4, name: '成品厚度公差', attr: '±10% \n ±0.03mm （板厚≤ 0.2mm）\n ±0.05mm （0.2mm＜板厚≤ 0.5mm）', typeid: 2 },
    { num: 5, name: '分层结构/盲埋孔', attr: 'YES', typeid: 2 },
    { num: 6, name: '最小孔径孔径', attr: '机械钻孔：0.1mm~6.5mm \n 镭射钻孔：0.1-0.125mm', typeid: 2 },
    { num: 7, name: '外层底铜厚度', attr: '1/3 OZ-1OZ (0.012mm -0.035mm)', typeid: 2 },
    { num: 8, name: '内层底铜厚度', attr: '1/3OZ-1 OZ (0.012mm -0.035mm)', typeid: 2 },
    { num: 9, name: '板厚度', attr: '0.07mm-2.0mm', typeid: 2 },
    { num: 10, name: '孔电镀纵横比(最大)', attr: '8:1', typeid: 2 },
    { num: 11, name: '孔径公差(镀通孔)', attr: '±3mil ( ±0.075mm)', typeid: 2 },
    { num: 12, name: '孔径公差(非镀通孔)', attr: '±1mil ( ±0.025mm)', typeid: 2 },
    { num: 13, name: '孔壁铜厚', attr: '10um min或按客户要求', typeid: 2 },
    { num: 14, name: '内层设计线宽/ 间距(最小)', attr: 'T/TOZ 1.6mil/1.6mil(0.04mm /0.04mm) \n H/HOZ 2.0mil/2.0mil(0.05mm /0.05mm) \n 1/1OZ 3mil/3mil(0.075mm/ 0.075mm)', typeid: 2 },
    { num: 15, name: '外层设计线宽/ 间距(最小)', attr: 'T/TOZ 2.0mil/2.0mil (0.05mm/ 0.05mm）\n H/HOZ 3.0mil/3.0mil(0.075mm/0.075mm) \n 1/1OZ 4.0mil/4.0mil (0.1mm/0.1mm )', typeid: 2 },
    { num: 16, name: '阻焊桥宽(最小)', attr: '2.5mil (0.064mm)', typeid: 2 },
    { num: 17, name: '阻焊对位公差', attr: '±2mil (±0.05mm)', typeid: 2 },
    { num: 18, name: '覆盖膜桥宽(最小)', attr: '8mil (0.2mm)', typeid: 2 },
    { num: 19, name: '覆盖膜对位公差', attr: '±6mil (±0.15mm)', typeid: 2 },
    { num: 20, name: '外形公差 (孔到边)(最小)', attr: '±4mil ( ±0.1mm)', typeid: 2 },
    { num: 21, name: '最小测试能力', attr: 'PAD Size min （0.1mm）\n PAD Pitch min (0.4mm)', typeid: 2 },
    { num: 22, name: '电磁屏蔽工艺', attr: '电磁屏蔽膜/丝印银桨', typeid: 2 },
    { num: 23, name: '表面处理', attr: '抗氧化（OSP），沉镍金（ENIG），电镍金', typeid: 2 }
];

//产品应用领域
var domainType = [{ name: '消费电子', id: 1, img: '消费电子.jpg' },
    { name: '汽车电子', id: 2, img: '汽车电子.jpg' },
    { name: '电脑及周边', id: 3, img: '电脑及周边.jpg' },
    { name: '能源', id: 4, img: '能源.jpg' },
    { name: 'IT通讯', id: 5, img: 'IT通讯.jpg' },
    { name: '工控及其他', id: 6, img: '工控及其他.jpg' },
    { name: '安防', id: 7, img: '安防.jpg' },
    { name: '医疗', id: 8, img: '医疗.jpg' },
    { name: 'LED光电', id: 9, img: '' }
];
//产品
var proList = [
    { id: 1, name: '多层沉金板', typeid: 1, model: 'CP6I11806B4', num: 6, dispose: '沉金', minlinewidth: '0.178mm', minlinerange: '0.152mm', craft: '普通板', ply: '1.575mm', panel: 'FR-4，TG大于150', bore: '0.3mm', img: '多层沉金板.jpg' },
    { id: 2, name: '双面沉银板', typeid: 1, model: 'CS2S16940A0', num: 2, dispose: '沉银', minlinewidth: '0.208mm', minlinerange: '0.117mm', craft: '沉银板', ply: '0.65mm', panel: 'RO4350,高TG', bore: '0.3mm', img: '双面沉银板.jpg' },
    { id: 3, name: '高多层板', typeid: 1, model: 'CSBI13616A0', num: 12, dispose: '沉金', minlinewidth: '0.1mm', minlinerange: '0.125mm', craft: '高多层板', ply: '1.84mm', panel: '板材为IT180I,TG170', bore: '0.25mm', img: '高多层板.jpg' },
    { id: 4, name: '高频混压树脂塞孔板', typeid: 1, model: 'CS4E11291A0', num: 4, dispose: 'OSP', minlinewidth: '0.15mm', minlinerange: '0.114mm', craft: 'POFV树脂塞孔', ply: '1.6mm', panel: '斗山DS-7408FR-4普通TG', bore: '0.3mm', img: '高频混压树脂塞孔板.jpg' },
    { id: 5, name: '多层半孔沉金板', typeid: 1, model: 'CP4I14479A0', num: 4, dispose: '沉金', minlinewidth: '0.127mm', minlinerange: '0.076mm', craft: '半孔板', ply: '1.2mm', panel: '板材为IT158FR-4中TG', bore: '0.2mm', img: '多层半孔沉金板.jpg' },
    { id: 6, name: '多层沉金板', typeid: 1, model: 'CP4I16751A0', num: 6, dispose: '沉金', minlinewidth: '0.12mm', minlinerange: '0.082mm', craft: '阻焊最小通孔0.2mm', ply: '1.575mm', panel: '使用S1000-2  高TG', bore: '0.2mm', img: '多层沉金板2.jpg' },
    { id: 7, name: '树脂塞孔板', typeid: 1, model: 'CP2I14132A0', num: 2, dispose: '沉金', minlinewidth: '', minlinerange: '', craft: '树脂塞孔', ply: '1.575mm', panel: 'EM827FR-4,高TG', bore: '0.45mm', img: '树脂塞孔板.jpg' },
    { id: 8, name: '双面普通板', typeid: 1, model: 'CP2E15261B0', num: 2, dispose: 'OSP', minlinewidth: '0.099mm', minlinerange: '0.101mm', craft: '普通板', ply: '1.6mm', panel: 'NY-2170有水印，FR-4，TG170', bore: '0.3mm', img: '双面普通板.jpg' },

    { id: 9, name: '高频混压板', typeid: 1, model: 'CS4I14334A0', num: 4, dispose: '沉金', minlinewidth: '0.127mm', minlinerange: '0.216mm', craft: '混压+控深铣', ply: '1.5mm', panel: 'RO4350B+联茂IT180A(高TG)', bore: '0.35mm', img: '高频混压板.jpg' },
    { id: 10, name: '双面喷锡板', typeid: 1, model: 'CP2F13217A1', num: 2, dispose: '无铅喷锡', minlinewidth: '0.25mm', minlinerange: '0.2mm', craft: '普通板', ply: '1.6mm', panel: 'KB,FR-4,TG130', bore: '0.3mm', img: '双面喷锡板.jpg' },
    { id: 11, name: '多层主机板', typeid: 1, model: 'CP4E04177B1', num: 2, dispose: 'OSP', minlinewidth: '0.099mm', minlinerange: '0.101mm', craft: '主机板', ply: '1.6mm', panel: 'NY-2170有水印，FR-4，TG170', bore: '0.3mm', img: '多层主机板.jpg' },
    { id: 12, name: '多层主机板', typeid: 1, model: 'CS4E08290A0', num: 4, dispose: 'OSP', minlinewidth: '0.102mm', minlinerange: '0.102mm', craft: '主机板', ply: '1.6mm', panel: '宏仁（MTC-97)FR-4，TG140', bore: '0.25mm', img: '多层主机板2.jpg' },
    { id: 13, name: '高多层主机板', typeid: 1, model: 'CS8E16924A0', num: 8, dispose: 'OSP', minlinewidth: '0.095mm', minlinerange: '0.101mm', craft: '主机板', ply: '1.6mm', panel: '板材为IT158,FR-4中TG', bore: '0.25mm', img: '高多层主机板.jpg' },
    { id: 14, name: '高多层主机板', typeid: 1, model: 'CSAE13379A0', num: 10, dispose: 'OSP', minlinewidth: '0.122mm', minlinerange: '0.133mm', craft: '普通板', ply: '2.0mm', panel: 'TU-662,FR-4，中TG', bore: '0.25mm', img: '高多层主机板2.jpg' },

];

//产品
var proList2 = [
    { id: 1, name: '多层沉金板', typeid: 1, model: 'CP6I11806B4', num: 6, dispose: '沉金', linewidth: '3.9mil', min: '0.20mm', craft: '普通板', ply: '1.575mm', panel: 'FR-4，TG大于150', bore: '0.3mm', img: '多层沉金板.jpg' },
    { id: 2, name: '多层选化板', typeid: 1, num: 6, linewidth: '3mil', min: '0.35mm', domain: '电视主板', domainType: 1, img: '多层选化板.PNG' },
    { id: 3, name: '双面沉金板', typeid: 1, num: 2, linewidth: '4mil', min: '0.40mm', domain: '汽车电子', domainType: 2, img: '双面沉金板.PNG' },
    { id: 3, name: '双面沉银板', typeid: 1, num: 2, linewidth: '0.117mm', min: '0.208mm', domain: '汽车电子', domainType: 2, img: '双面沉银板.jpg' },
    { id: 4, name: '双面无铅喷锡板', typeid: 1, num: 2, linewidth: '10mil', min: '0.350mm', domain: '工业制造', domainType: 6, img: '双面无铅喷锡板.PNG' },
    { id: 5, name: '多层沉金板', typeid: 1, num: 6, linewidth: '4mil', min: '0.30mm', domain: '能源', domainType: 4, img: '多层沉金板.PNG' },
    { id: 6, name: '多层沉金板', typeid: 1, num: 4, linewidth: '8mil', min: '0.30mm', domain: '安防', domainType: 7, img: '多层沉金板2.PNG' },
    { id: 7, name: '双面沉金板', typeid: 1, num: 2, linewidth: '10mil', min: '0.30mm', domain: '医疗', domainType: 8, img: '双面沉金板2.PNG' },
    { id: 8, name: '双面无铅喷锡板', typeid: 1, num: 2, linewidth: '5mil', min: '0.30mm', domain: 'LED光电', domainType: 9, img: '双面无铅喷锡板2.PNG' },

    { id: 1, name: '柔性电路板', typeid: 2, num: 4, linewidth: '0.15±0.03mm', min: '0.15/0.1mm', bqtype: 'SUS', img: '柔性电路板.PNG' },
    { id: 2, name: '柔性电路板', typeid: 2, num: 2, linewidth: '0.15±0.03mm', min: '0.15/0.1mm', bqtype: 'SUS', img: '柔性电路板2.PNG' },
    { id: 3, name: '柔性电路板', typeid: 2, num: 2, linewidth: '0.15±0.03mm', min: '0.15/0.1mm', bqtype: 'SUS', img: '柔性电路板3.PNG' },
    { id: 4, name: '柔性电路板', typeid: 2, num: 4, linewidth: '0.15±0.03mm', min: '0.15/0.1mm', bqtype: 'SUS', img: '柔性电路板4.PNG' },
    { id: 5, name: '软硬结合板', typeid: 2, num: 4, linewidth: '0.15±0.03mm', min: '0.6/0.03mm', bqtype: 'SUS', img: '软硬结合板.PNG' },
    { id: 6, name: '软硬结合板', typeid: 2, num: 4, linewidth: '0.15±0.03mm', min: '0.6/0.03mm', bqtype: 'SUS', img: '软硬结合板2.PNG' },
    { id: 7, name: '软硬结合板', typeid: 2, num: 4, linewidth: '0.15±0.03mm', min: '0.6/0.03mm', bqtype: 'SUS', img: '软硬结合板3.PNG' },
    { id: 8, name: '软硬结合板', typeid: 2, num: 4, linewidth: '0.15±0.03mm', min: '0.6/0.03mm', bqtype: 'N.A', img: '软硬结合板4.PNG' },
];