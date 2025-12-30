
import { TrialConfig } from './types';

export const TRIALS: TrialConfig[] = [
  {
    id: 1,
    type: 'HOTEL',
    objectCount: 4,
    dimensionCount: 4,
    instruction: "假如你现在在选一个备考酒店，选择一个价格在300-500元范围内、环境相对安静、同时满足大床房、评分在4.8分以上的酒店。",
    reminder: "备考酒店，300-500元，安静，大床房，评分4.8+。",
    products: [
      { 
        id: 'h1', 
        name: '桔子酒店 (中关村店)', 
        price: 424, 
        rating: 4.9, 
        imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400', 
        summary: '距考场100米，双层隔音玻璃，深度睡眠系统', 
        attributes: [
          { label: '环境', value: '非常安静' }, 
          { label: '早餐', value: '丰富自助' }, 
          { label: '位置', value: '考场旁' }, 
          { label: '房型', value: '高级大床' }
        ]
      },
      {
        id: 'h2',
        name: '汉庭酒店 (海淀黄庄店)',
        price: 378,
        rating: 4.8,
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
        summary: '商务地段，交通便利，性价比之选',
        attributes: [
          { label: '环境', value: '临街，略有杂音' },
          { label: '早餐', value: '包含基础早餐' },
          { label: '位置', value: '需打车10分钟' },
          { label: '房型', value: '高级大床' }
        ]
      },
      {
        id: 'h3',
        name: '均禾悦酒店 (苏州街店)',
        price: 367,
        rating: 4.6,
        imageUrl: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=400&q=80',
        summary: '全屋智能控制，机器人送餐服务',
        attributes: [
           { label: '环境', value: '周边装修中，白天吵' },
           { label: '早餐', value: '不含早' },
           { label: '位置', value: '距北大380米' },
           { label: '房型', value: '悦动双床房' }
        ]
      },
      {
        id: 'h4',
        name: '亚朵酒店 (西单店)',
        price: 580,
        rating: 4.9,
        imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80',
        summary: '高品质床品，人文书吧，入住赠送夜宵',
        attributes: [
           { label: '环境', value: '极其幽静' },
           { label: '早餐', value: '精致自助' },
           { label: '位置', value: '距离考场5公里' },
           { label: '房型', value: '行政大床' }
        ]
      }
    ]
  },
  {
    id: 2,
    type: 'PHONE',
    objectCount: 4,
    dimensionCount: 3,
    instruction: "假如你现在在选一个新手机，选择一个价格在3000-5000元范围内、内存≥256G，续航能力强的手机。",
    reminder: "3000-5000元，内存≥256G，续航强。",
    products: [
      { id: 'p1', name: '华为 Mate 50E', price: 3999, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', summary: '昆仑玻璃，应急模式，信号强', attributes: [{ label: '内存', value: '256GB' }, { label: '电池', value: '4460mAh' }, { label: '快充', value: '66W' }] },
      { id: 'p2', name: '小米 13', price: 3299, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400', summary: '徕卡光学镜头，小屏手感佳', attributes: [{ label: '内存', value: '256GB' }, { label: '电池', value: '4500mAh' }, { label: '快充', value: '67W' }] },
      { id: 'p3', name: 'iPhone 13', price: 4699, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400', summary: 'A15芯片，色彩还原真实', attributes: [{ label: '内存', value: '128GB' }, { label: '电池', value: '3227mAh' }, { label: '快充', value: '20W' }] },
      { id: 'p4', name: '一加 11', price: 3899, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400', summary: '哈苏影像，顶级震感马达', attributes: [{ label: '内存', value: '512GB' }, { label: '电池', value: '5000mAh' }, { label: '快充', value: '100W' }] }
    ]
  },
  {
    id: 3,
    type: 'SCOOTER',
    objectCount: 4,
    dimensionCount: 2,
    instruction: "假如你现在上班，需要买一辆电瓶车通勤。请你选择价格区间在1000-2000以内，续航距离超过70km的电瓶车。",
    reminder: "1000-2000元，续航>70km。",
    products: [
      { id: 's1', name: '雅迪 冠能M9', price: 1899, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=400', summary: '增程系统，石墨烯电池，动力强劲', attributes: [{ label: '续航', value: '80km' }, { label: '轮胎', value: '防滑真空胎' }] },
      { id: 's2', name: '爱玛 露娜Q1', price: 1599, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=400', summary: '复古造型，轻巧易操控，适合女性', attributes: [{ label: '续航', value: '50km' }, { label: '轮胎', value: '普通胎' }] },
      { id: 's3', name: '绿源 ZFA', price: 1999, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400', summary: '液冷电机，超长质保，耐用可靠', attributes: [{ label: '续航', value: '63km' }, { label: '轮胎', value: '钢丝防扎胎' }] },
      { id: 's4', name: '台铃 标兵', price: 1750, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400', summary: '云动力系统，结实耐骑', attributes: [{ label: '续航', value: '72km' }, { label: '轮胎', value: '耐磨胎' }] }
    ]
  },
  {
    id: 4,
    type: 'CLOTHING',
    objectCount: 4,
    dimensionCount: 5,
    instruction: "假如你现在在准备一个求职面试，需要购置合适的服装。请选择价格区间在2000-3000以内，面料为羊毛，款式为修身，颜色为暗灰，3日内可到货的西装。",
    reminder: "面试西装，2000-3000元，暗灰色，羊毛面料，修身版型，3日内可到货。",
    products: [
      { id: 'c1', name: 'G2000 商务款', price: 2199, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '抗皱面料，职场新人首选', attributes: [{ label: '面料', value: '聚酯纤维混纺' }, { label: '剪裁', value: '修身' }, { label: '发货', value: '次日达' }, { label: '颜色', value: '暗灰色' }, { label: '厚度', value: '中等' }] },
      { id: 'c2', name: '报喜鸟 尊享款', price: 2899, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '精纺羊毛，透气舒爽', attributes: [{ label: '面料', value: '100%羊毛' }, { label: '剪裁', value: '修身' }, { label: '发货', value: '48h发货' }, { label: '颜色', value: '暗灰色' }, { label: '厚度', value: '轻薄' }] },
      { id: 'c3', name: '威可多 VICUTU', price: 2550, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '意式风格，高级垂感', attributes: [{ label: '面料', value: '80%羊毛' }, { label: '剪裁', value: '直筒' }, { label: '发货', value: '3-5天发货' }, { label: '颜色', value: '深灰色' }, { label: '厚度', value: '加厚' }] },
      { id: 'c4', name: '优衣库 基础款', price: 1299, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '可机洗，快时尚', attributes: [{ label: '面料', value: '仿毛化纤' }, { label: '剪裁', value: '宽松' }, { label: '发货', value: '次日达' }, { label: '颜色', value: '浅灰色' }, { label: '厚度', value: '轻薄' }] }
    ]
  },
  {
    id: 5,
    type: 'CLOTHING',
    objectCount: 3,
    dimensionCount: 4,
    instruction: "假如你现在在准备一个求职面试，需要购置合适的服装。请选择价格2000-3000、明日到货、无口袋、无垫肩的套装。",
    reminder: "暗灰，2-3k，明日到，无口袋，无垫肩。",
    products: [
      { id: 'c5', name: '雅戈尔 睿智', price: 2450, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '极简设计，舒适无感', attributes: [ { label: '物流', value: '次日达' }, { label: '垫肩', value: '无' }, { label: '价格', value: '2450' }, { label: '口袋', value: '无口袋' }] },
      { id: 'c6', name: '蓝豹 LAMPO', price: 2999, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '全毛面料，手工缝合', attributes: [{ label: '物流', value: '次日达' }, { label: '垫肩', value: '薄垫肩' }, { label: '价格', value: '2999' }, { label: '口袋', value: '无口袋' }] },
      { id: 'c7', name: '海澜之家', price: 1800, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '国民品牌，尺码齐全', attributes: [ { label: '物流', value: '2-3天' }, { label: '垫肩', value: '无' }, { label: '价格', value: '1800' }, { label: '口袋', value: '有口袋' }] }
    ]
  },
  {
    id: 6,
    type: 'GIFT',
    objectCount: 3,
    dimensionCount: 3,
    instruction: "假如马上快要过年了，你想给自己的老师买一个新年礼物，你的老师非常喜欢喝咖啡。请选择价格在300-600元、深度烘培、销量最高的咖啡豆。",
    reminder: "300-600元，深烘，高销量。",
    products: [
      { id: 'g1', name: '皮爷 Peets', price: 458, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400', summary: '迪克森上校，浓烈烟草香', attributes: [{ label: '烘培', value: '深度' }, { label: '销量', value: '12万+' }] },
      { id: 'g2', name: '星巴克 臻选', price: 388, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=400', summary: '单一产区，黑巧克力风味', attributes: [{ label: '烘培', value: '中度' }, { label: '销量', value: '5万+' }] },
      { id: 'g3', name: 'Blue Bottle', price: 580, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', summary: '极客最爱，新鲜烘焙', attributes: [{ label: '烘培', value: '深度' }, { label: '销量', value: '2万+' }] }
    ]
  },
  {
    id: 7,
    type: 'GIFT',
    objectCount: 3,
    dimensionCount: 2,
    instruction: "假如马上快要过年了，你想给自己的老师买一个新年礼物，你的老师非常喜欢喝咖啡。请选择价格在800-900元、焦糖风味的咖啡豆。",
    reminder: "800-900，焦糖风味。",
    products: [
      { id: 'g4', name: '三顿半 礼盒', price: 929, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400', summary: '精品即溶，多彩星球设计', attributes: [{ label: '风味', value: '焦糖' }] },
      { id: 'g5', name: 'LAVAZZA 意式', price: 720, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400', summary: '经典配方，奶油般触感', attributes: [{ label: '风味', value: '坚果巧克力' }] },
      { id: 'g6', name: '隅田川', price: 880, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400', summary: '挂耳咖啡，如焦糖般甜蜜', attributes: [{ label: '风味', value: '焦糖' }] }
    ]
  },
  {
    id: 8,
    type: 'LAPTOP',
    objectCount: 3,
    dimensionCount: 5,
    instruction: "你是一名即将毕业的研究生，需要写长达数万字的论文并运行复杂的模拟数据，因此计划买一台笔记本电脑。请选择性能可靠，双风扇，内存超过15G，价格在12000左右，可上门售后的电脑。",
    reminder: "价格在1.2万左右，性能稳定，内存≥15G，可上门售后，双风扇。",
    products: [
      { id: 'l1', name: 'MBP 14 M3', price: 12999, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', summary: 'Mac系统稳定，Retina屏幕', attributes: [{ label: '内存', value: '18G' }, { label: '稳定性', value: '极高' }, { label: '售后', value: '店面保修' }, { label: '散热', value: '双风扇' }, { label: '重量', value: '1.6kg' }] },
      { id: 'l2', name: 'ThinkPad X1', price: 11500, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', summary: '商务典范，极致键盘手感', attributes: [ { label: '内存', value: '32G' }, { label: '稳定性', value: '极高' }, { label: '售后', value: '全球上门' }, { label: '散热', value: '双风扇' }, { label: '重量', value: '1.1kg' }] },
      { id: 'l3', name: 'Surface Laptop', price: 9500, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400', summary: '全铝机身，触控交互', attributes: [ { label: '内存', value: '16G' }, { label: '稳定性', value: '一般' }, { label: '售后', value: '寄修服务' }, { label: '散热', value: '无风扇' }, { label: '重量', value: '1.3kg' }] }
    ]
  },
  {
    id: 9,
    type: 'MEDICAL',
    objectCount: 2,
    dimensionCount: 4,
    instruction: "你计划为年迈的父母购买一份深度体检套餐，这是一项重要的健康投资。请选择价格在5000-8000元、含 PET-CT、三甲专家报告、能在24h内可预约的套餐。",
    reminder: "价格5-8k，包含PET-CT，专家报告，24h预约。",
    products: [
      { id: 'm1', name: '瑞慈 尊享版', price: 6800, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400', summary: '专注肿瘤筛查，全流程导诊', attributes: [{ label: '影像', value: '含PET-CT' }, { label: '专家', value: '三甲主任' }, { label: '预约', value: '12h响应' }] },
      { id: 'm2', name: '美年 基础版', price: 5300, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400', summary: '常规体检，连锁网点多', attributes: [{ label: '影像', value: '含PET-CT' }, { label: '专家', value: '普通医师' }, { label: '预约', value: '12h响应' }] }
    ]
  },
  {
    id: 10,
    type: 'EDUCATION',
    objectCount: 2,
    dimensionCount: 3,
    instruction: "你正在寻求职业转型，准备报考一项昂贵的计算机高级认证培训。这项投资关乎你未来 10 年的职业薪资。请选择价格 2 万左右、学员通过率高于 85%、并提供行业认可证书的课程。",
    reminder: "价格2万左右，>85%通过率，含行业认可证书。",
    products: [
      { id: 'e1', name: 'Udacity 架构师', price: 19800, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400', summary: '硅谷前沿技术，项目实战驱动', attributes: [{ label: '通过率', value: '88%' }, { label: '认可度', value: '行业认可' }] },
      { id: 'e2', name: '国内机构 训练营', price: 21000, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', summary: '全中文讲解，1对1辅导', attributes: [{ label: '通过率', value: '76%' }, { label: '认可度', value: '行业认可' }] }
    ]
  },
  {
    id: 11,
    type: 'FINANCE',
    objectCount: 2,
    dimensionCount: 2,
    instruction: "你打算将一笔闲置资金进行实物黄金投资作为长期避险资产。这涉及你资产的底层安全。请选择具有 99.99% 纯度且附带国检证书的投资金条。",
    reminder: "99.99%纯度，国检证书。",
    products: [
      { id: 'f1', name: '中国黄金 金条', price: 55000, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400', summary: '央企品质，回购保障', attributes: [{ label: '纯度', value: '99.99%' }, { label: '证书', value: '国家中心检测' }] },
      { id: 'f2', name: '老庙 饰品金', price: 62000, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400', summary: '百年老字号，设计感强', attributes: [{ label: '纯度', value: '99.9%' }, { label: '证书', value: '国家中心检测' }] }
    ]
  },
  {
    id: 12,
    type: 'MEDICAL',
    objectCount: 2,
    dimensionCount: 5,
    instruction: "你计划为年迈的父母购买一份深度体检套餐，这是一项重要的健康投资。请选择保额为50万，含多次赔付，含豁免，等待期少于120天，有就医绿通的保险。",
    reminder: "保额50万，含多次赔付，含豁免，等待期<120天，有绿通。",
    products: [
      { id: 'm3', name: '平安 E生保', price: 1200, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400', summary: '保障全面，理赔快捷', attributes: [{ label: '保额', value: '50万' }, { label: '多重赔付', value: '包含' }, { label: '保费豁免', value: '包含' }, { label: '等待期', value: '90天' }, { label: '增值服务', value: '尊享绿通' }] },
      { id: 'm4', name: '众安 卫士', price: 450, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400', summary: '极致性价比，互联网爆款', attributes: [{ label: '保额', value: '50万' }, { label: '多重赔付', value: '包含' }, { label: '保费豁免', value: '不含' }, { label: '等待期', value: '110天' }, { label: '增值服务', value: '无' }] }
    ]
  },
  {
    id: 13,
    type: 'SAFETY',
    objectCount: 5,
    dimensionCount: 4,
    instruction: "假如现在你所处的地方空气污染非常严重。你急需购置一台医用空气净化器。请选择价格4000-6000元、滤网为HEPA 13、CADR >600、质保超过3年的净化器。",
    reminder: "4-6k，HEPA 13，CADR > 600，质保 > 3年。",
    products: [
      { id: 's5', name: 'IQAir HealthPro', price: 4999, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '瑞士原装，医疗级净化力', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '550' }, { label: '质保', value: '5年' }] },
      { id: 's6', name: '飞利浦 8000i', price: 4200, rating: 4.7, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '除甲醛能手，夜间超静音', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '500' }, { label: '质保', value: '2年' }] },
      { id: 's7', name: 'Blueair 经典', price: 4800, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '环保机身，低噪音运行', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '620' }, { label: '质保', value: '5年' }] },
      { id: 's8', name: '霍尼韦尔 H9', price: 6800, rating: 4.8, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '高能效比，实时PM2.5显示', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '800' }, { label: '质保', value: '4年' }] },
      { id: 's9', name: '小米 4 Pro', price: 1299, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '全屋智能联动，耗材便宜', attributes: [{ label: '滤网', value: 'HEPA 12' }, { label: 'CADR', value: '500' }, { label: '质保', value: '1年' }] }
    ]
  },
  {
    id: 14,
    type: 'FINANCE',
    objectCount: 5,
    dimensionCount: 3,
    instruction: "假如现在你计划为父母购置一份退休年金险。请选择收益率超过3.0%、起领年龄≥60岁、包含身故保险金评估的保险。",
    reminder: "收益>3.0%，起领≥60岁，含身故评估。",
    products: [
      { id: 'f3', name: '泰康 幸福年', price: 100000, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400', summary: '养老社区权益，稳健收益', attributes: [{ label: '年化', value: '3.5%' }, { label: '起领', value: '60岁' }, { label: '身故金', value: '不含' }] },
      { id: 'f4', name: '友邦 充裕', price: 100000, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400', summary: '全球配置，美元收益', attributes: [{ label: '年化', value: '4.2%' }, { label: '起领', value: '65岁' }, { label: '身故金', value: '含' }] },
      { id: 'f5', name: '平安 尊享', price: 100000, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400', summary: '国民大品牌，理赔有保障', attributes: [{ label: '年化', value: '3.0%' }, { label: '起领', value: '60岁' }, { label: '身故金', value: '含' }] },
      { id: 'f6', name: '人寿 鑫裕', price: 100000, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400', summary: '国资背景，安全第一', attributes: [{ label: '年化', value: '2.5%' }, { label: '起领', value: '55岁' }, { label: '身故金', value: '含' }] },
      { id: 'f7', name: '中宏 乐享', price: 100000, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400', summary: '灵活支取，高流动性', attributes: [{ label: '年化', value: '3.1%' }, { label: '起领', value: '55岁' }, { label: '身故金', value: '不含' }] }
    ]
  },
  {
    id: 15,
    type: 'GADGET',
    objectCount: 5,
    dimensionCount: 2,
    instruction: "假如你是一个专业的摄影爱好者，需要买一个全画幅的、价格在20000-30000之间的职业摄影机。",
    reminder: "全画幅，20-30k。",
    products: [
      { id: 'g7', name: 'Sony A7R5', price: 23500, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', summary: '6100万像素，AI对焦系统', attributes: [{ label: '画幅', value: '半画幅' }] },
      { id: 'g10', name: 'Canon R5', price: 21800, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', summary: '8K视频录制，机身防抖', attributes: [{ label: '画幅', value: '中画幅' }] },
      { id: 'g12', name: 'Nikon Z8', price: 26500, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', summary: '全能机型，顶级连拍', attributes: [{ label: '画幅', value: '全画幅' }] },
      { id: 'g9', name: 'Fujifilm GFX', price: 42000, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', summary: '中画幅画质，极致细节', attributes: [{ label: '画幅', value: '中画幅' }] },
      { id: 'g11', name: 'Sony ZV-E1', price: 15500, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', summary: 'Vlog神器，超轻便', attributes: [{ label: '画幅', value: '全画幅' }] }
    ]
  },
  {
    id: 16,
    type: 'GADGET',
    objectCount: 5,
    dimensionCount: 5,
    instruction: "假如现在母亲节还有7天就要到了，你想给母亲购置一条项链。请选择价格在10000-20000之间，材质为黄金，包含免费清洗的售后服务，店铺为官方旗舰店，在5日内可送达的项链。",
    reminder: "1-2万，黄金，免费清洗，旗舰店，5日达。",
    products: [
      { id: 'g8', name: 'Tiffany & Co.', price: 12500, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400', summary: '时尚前卫，国际大牌', attributes: [{ label: '材质', value: '18黄金' }, { label: '售后', value: '有偿清洗' }, { label: '店铺', value: '品牌旗舰店' }, { label: '物流', value: '7-10天' }] },
      { id: 'g14', name: '周大福 传承', price: 13800, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400', summary: '古法工艺，厚重典雅', attributes: [{ label: '材质', value: '合金镀金' }, { label: '售后', value: '终身免洗' }, { label: '店铺', value: '品牌旗舰店' }, { label: '物流', value: '3天' }] },
      { id: 'g15', name: 'VCA 梵克雅宝', price: 19800, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400', summary: '四叶草经典，名媛首选', attributes: [{ label: '材质', value: '18K黄金' }, { label: '售后', value: '品牌免费养护' }, { label: '店铺', value: '品牌旗舰店' }, { label: '物流', value: '5天' }] },
      { id: 'g13', name: 'Cartier Love', price: 22000, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400', summary: '经典螺丝设计，极具辨识度', attributes: [{ label: '材质', value: '合金镀金' }, { label: '售后', value: '无偿保养' }, { label: '店铺', value: '品牌旗舰店' }, { label: '物流', value: '2天' }] },
      { id: 'g16', name: '施华洛世奇', price: 2800, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400', summary: '亮眼仿水晶，多变造型', attributes: [{ label: '材质', value: '合金镀金' }, { label: '售后', value: '无清洗服务' }, { label: '店铺', value: '官方自营' }, { label: '物流', value: '次日达' }] }
    ]
  },
  {
    id: 17,
    type: 'GADGET',
    objectCount: 5,
    dimensionCount: 5,
    instruction: "假如你是一个职业博主，需要买一台性能极致的旗舰手机来拍摄视频。请选择价格8000以上、存储1TB、支持8K录制、必须是钛金属机身、续航需支持重度使用24小时。",
    reminder: "8k+价格，1TB，8K摄影，钛金属，24h续航。",
    products: [
      { id: 'ph17_1', name: 'iPhone 15 Pro Max', price: 10999, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400', summary: 'ProRes视频拍摄，钛金属机身', attributes: [{ label: '机身', value: '钛金属' }, { label: '存储', value: '1TB' }, { label: '视频', value: '4K/60fps' }, { label: '续航', value: '29h视频' }] },
      { id: 'ph17_2', name: 'Samsung S24 Ultra', price: 9299, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400', summary: '8K视频，10倍光学变焦', attributes: [{ label: '机身', value: '钛金属' }, { label: '存储', value: '1TB' }, { label: '视频', value: '8K/30fps' }, { label: '续航', value: '30h通话' }] },
      { id: 'ph17_3', name: '小米 14 Ultra', price: 8299, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', summary: '徕卡光学镜头，专业相机模式', attributes: [{ label: '机身', value: '钛金属' }, { label: '存储', value: '512GB' }, { label: '视频', value: '8K/24fps' }, { label: '续航', value: '24h+' }] },
      { id: 'ph17_4', name: '华为 Pura 70 U', price: 10999, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', summary: '伸缩摄像头，卫星通讯', attributes: [{ label: '机身', value: '高分子材料' }, { label: '存储', value: '1TB' }, { label: '视频', value: '4K全焦段' }, { label: '续航', value: '26h' }] },
      { id: 'ph17_5', name: 'OPPO Find X7 U', price: 6999, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400', summary: '双潜望长焦，哈苏影调', attributes: [{ label: '机身', value: '钛金属' }, { label: '存储', value: '512GB' }, { label: '视频', value: '4K/60fps' }, { label: '续航', value: '22h' }] }
    ]
  },
  {
    id: 18,
    type: 'SAFETY',
    objectCount: 5,
    dimensionCount: 4,
    instruction: "假如你刚刚搬进新房，需要买一台极致性能的空气净化器。请选择价格3000-5000、HEPA等级13以上、CADR值超过800、具备5年质保。",
    reminder: "3-5k，HEPA 13+，CADR > 800，5年质保。",
    products: [
      { id: 'sf18_1', name: '飞利浦 旗舰型', price: 4500, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '医疗级净化，除过敏原', attributes: [{ label: '滤网', value: 'HEPA 14' }, { label: 'CADR', value: '910' }, { label: '质保', value: '3年' }] },
      { id: 'sf18_2', name: '布鲁雅尔 7系', price: 4800, rating: 4.8, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '静电吸附技术，超静音', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '820' }, { label: '质保', value: '5年' }] },
      { id: 'sf18_3', name: '小米 4 Ultra', price: 2999, rating: 4.7, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '全屋智能，高能效比', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '810' }, { label: '质保', value: '2年' }] },
      { id: 'sf18_4', name: 'IQAir Health', price: 9200, rating: 5.0, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '顶级滤除，专业认证', attributes: [{ label: '滤网', value: 'HyperHEPA' }, { label: 'CADR', value: '650' }, { label: '质保', value: '10年' }] },
      { id: 'sf18_5', name: '霍尼韦尔 Z3', price: 4200, rating: 4.6, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '专业除醛，商用级别', attributes: [{ label: '滤网', value: 'HEPA 12' }, { label: 'CADR', value: '850' }, { label: '质保', value: '5年' }] }
    ]
  },
  {
    id: 19,
    type: 'EDUCATION',
    objectCount: 5,
    dimensionCount: 3,
    instruction: "假如你准备利用晚间时间提升AI编程能力，现在需要选一个性价比最高的课程。请选择学费1000-2000元、通过率超过90%、提供行业认证证书。",
    reminder: "1-2k学费，>90%通过率，行业证书。",
    products: [
      { id: 'ed19_1', name: 'Coursera AI专项', price: 1500, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400', summary: '斯坦福教授，权威认证', attributes: [{ label: '通过率', value: '92%' }, { label: '证书', value: '行业证书' }] },
      { id: 'ed19_2', name: 'Udemy 深度学习', price: 1200, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400', summary: '实操为主，终身访问', attributes: [{ label: '通过率', value: '95%' }, { label: '证书', value: '内部证明' }] },
      { id: 'ed19_3', name: '极客时间 训练营', price: 1800, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400', summary: '大厂架构师，实战点评', attributes: [{ label: '通过率', value: '91%' }, { label: '证书', value: '内部证书' }] },
      { id: 'ed19_4', name: '网易云课堂 进阶', price: 900, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400', summary: '零基础友好，配套练习', attributes: [{ label: '通过率', value: '78%' }, { label: '证书', value: '内部证书' }] },
      { id: 'ed19_5', name: 'GitHub 原创课', price: 2500, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400', summary: '开源社区项目，硬核代码', attributes: [{ label: '通过率', value: '85%' }, { label: '证书', value: '行业证书' }] }
    ]
  },
  {
    id: 20,
    type: 'FINANCE',
    objectCount: 5,
    dimensionCount: 2,
    instruction: "假如你现在想要定投实物黄金作为避险资产。请选择纯度为99.99%、价格在550/g以内。",
    reminder: "99.99%纯度，＜550/g。",
    products: [
      { id: 'fn20_1', name: '建设银行 龙鼎金', price: 545, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400', summary: '银行托管，纯度极高', attributes: [{ label: '纯度', value: '99.99%' }, { label: '价格', value: '615元/g' }] },
      { id: 'fn20_2', name: '中国黄金 条', price: 550, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400', summary: '官定投资条，权威背书', attributes: [{ label: '纯度', value: '99.99%' }, { label: '价格', value: '510元/g' }] },
      { id: 'fn20_3', name: '周大福 饰品金', price: 635, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400', summary: '精美设计，品牌价值高', attributes: [{ label: '纯度', value: '99.9%' }, { label: '价格', value: '530元/g' }] },
      { id: 'fn20_4', name: '金雅福 压制金', price: 538, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400', summary: '低门槛，适合初学者', attributes: [{ label: '纯度', value: '99.9%' }, { label: '价格', value: '500元/g' }] },
      { id: 'fn20_5', name: '老凤祥 金砖', price: 565, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400', summary: '传统名店，保值力强', attributes: [{ label: '纯度', value: '99.99%' }, { label: '价格', value: '680元/g' }] }
    ]
  },
  {
    id: 21,
    type: 'SAFETY',
    objectCount: 4,
    dimensionCount: 5,
    instruction: "假如你刚刚搬进新房。请选择价格3000-5000、HEPA等级13以上、CADR值超过800、具备5年质保、噪音低于30分贝。",
    reminder: "3-5k，HEPA 13+，CADR > 800，5年质保，噪音<30分贝。",
    products: [
      { id: 'sf21_1', name: '飞利浦 尊享', price: 4200, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '静音专利，医用净化', attributes: [{ label: '滤网', value: 'HEPA 14' }, { label: 'CADR', value: '900' }, { label: '质保', value: '5年' }, { label: '分贝', value: '32dB' }] },
      { id: 'sf21_2', name: '霍尼韦尔 H9', price: 4800, rating: 4.8, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '气态污染物克星', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '850' }, { label: '质保', value: '5年' }, { label: '分贝', value: '29dB' }] },
      { id: 'sf21_3', name: '小米 4 Max', price: 2999, rating: 4.7, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '超大面积净化，智能控制', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '810' }, { label: '质保', value: '2年' }, { label: '分贝', value: '35dB' }] },
      { id: 'sf21_4', name: '布鲁雅尔 尊享', price: 5800, rating: 5.0, imageUrl: 'https://images.pexels.com/photos/7417513/pexels-photo-7417513.jpeg', summary: '无臭氧技术，纯净空气', attributes: [{ label: '滤网', value: 'HEPA 13' }, { label: 'CADR', value: '700' }, { label: '质保', value: '10年' }, { label: '分贝', value: '30dB' }] }
    ]
  },
  {
    id: 22,
    type: 'CLOTHING',
    objectCount: 4,
    dimensionCount: 4,
    instruction: "假如你通过了知名公司的终面，需要买一套高质量西装参加入职典礼。请选择价格3000-5000元、100%纯羊毛面料、无垫肩、3天内必须拿到成衣。",
    reminder: "3-5k，100%羊毛，无垫肩，3天内拿。",
    products: [
      { id: 'cl22_1', name: 'VICUTU 威可多', price: 4500, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '入职优选，24小时发货', attributes: [{ label: '面料', value: '100%羊毛' }, { label: '垫肩', value: '无' }, { label: '工期', value: '即时发货' }, { label: '光泽度', value: '高级亚光' }] },
      { id: 'cl22_2', name: '雅戈尔 行政', price: 3200, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '版型稳重，垂感十足', attributes: [{ label: '面料', value: '80%羊毛' }, { label: '垫肩', value: '薄垫肩' }, { label: '工期', value: '3天' }, { label: '光泽度', value: '自然光泽' }] },
      { id: 'cl22_3', name: '报喜鸟 尊享', price: 4800, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '全手工工艺，优雅剪裁', attributes: [{ label: '面料', value: '100%羊毛' }, { label: '垫肩', value: '有垫肩' }, { label: '工期', value: '3天' }, { label: '光泽度', value: '亮面' }] },
      { id: 'cl22_4', name: '萨维尔 定制', price: 8800, rating: 5.0, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '大师亲剪，传世品质', attributes: [{ label: '面料', value: 'Super 150羊毛' }, { label: '垫肩', value: '无' }, { label: '工期', value: '15天' }, { label: '光泽度', value: '极高' }] }
    ]
  },
  {
    id: 23,
    type: 'LAPTOP',
    objectCount: 4,
    dimensionCount: 3,
    instruction: "假如你是大学电竞社社长，需要买一台极致性能的游戏本参加全国大赛。请选择价格15000左右、显卡必须是RTX 4080以上、屏幕刷新率必须超过240Hz的电脑。",
    reminder: "1.5万左右，4080显卡，屏幕刷新率240Hz+。",
    products: [
      { id: 'lp23_1', name: 'ROG 枪神7 P', price: 15999, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', summary: '败家之眼，光效拉满', attributes: [{ label: '显卡', value: 'RTX 4080' }, { label: '刷新率', value: '240Hz' }] },
      { id: 'lp23_2', name: '拯救者 Y9000P', price: 14500, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', summary: '冰魄散热，满血性能', attributes: [{ label: '显卡', value: 'RTX 4080' }, { label: '刷新率', value: '120Hz' }] },
      { id: 'lp23_3', name: '外星人 m18', price: 23999, rating: 5.0, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', summary: '极致信仰，堆料机皇', attributes: [{ label: '显卡', value: 'RTX 4090' }, { label: '刷新率', value: '480Hz' }] },
      { id: 'lp23_4', name: '暗影精灵 10', price: 11000, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', summary: '主流大作通杀，高性价比', attributes: [{ label: '显卡', value: 'RTX 4070' }, { label: '刷新率', value: '165Hz' }] }
    ]
  },
  {
    id: 24,
    type: 'GIFT',
    objectCount: 4,
    dimensionCount: 2,
    instruction: "假如明天是你恋人父亲的生日，你第一次上门，需要买一份体面的顶级燕窝礼盒。请选择产地为马来西亚、价格在2000-3000元之间的燕窝礼盒。",
    reminder: "马产燕窝，2-3k。",
    products: [
      { id: 'gf24_1', name: '同仁堂 总统牌', price: 2800, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400', summary: '药企背景，真材实料', attributes: [{ label: '产地', value: '马来西亚' }] },
      { id: 'gf24_2', name: '燕安居 珍享', price: 2200, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400', summary: '纯手工挑毛，无添加', attributes: [{ label: '产地', value: '马来西亚' }] },
      { id: 'gf24_3', name: '小仙炖 礼盒', price: 1800, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400', summary: '鲜炖冷链，即开即食', attributes: [{ label: '产地', value: '印尼' }] },
      { id: 'gf24_4', name: '正官庄 高丽参', price: 2500, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400', summary: '韩国珍宝，补气神品', attributes: [{ label: '产地', value: '韩国' }] }
    ]
  },
  {
    id: 25,
    type: 'SAFETY',
    objectCount: 3,
    dimensionCount: 5,
    instruction: "假如你打算带全家人去泡温泉。请选择价格2000左右、必须有5个以上室外池、包含全天自助餐、有山景房可选、距离市中心1小时车程内。",
    reminder: "2k作业，5个以上室外池，含全天自助，山景房，1h内至市区。",
    products: [
      { id: 'ht25_1', name: '古北水镇 温泉', price: 2200, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400', summary: '边泡汤边看长城，亲子友好', attributes: [{ label: '室外池', value: '12个' }, { label: '餐食', value: '全天自助' }, { label: '客房', value: '山景/水街房' }, { label: '车程', value: '55min' }] },
      { id: 'ht25_2', name: '春晖园 度假', price: 1600, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400', summary: '老牌温泉，设施经典', attributes: [{ label: '室外池', value: '4个' }, { label: '餐食', value: '含早午餐' }, { label: '客房', value: '园林房' }, { label: '车程', value: '40min' }] },
      { id: 'ht25_3', name: '安缦颐和', price: 6800, rating: 5.0, imageUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400', summary: '顶级私密，管家服务', attributes: [{ label: '室外池', value: '8个' }, { label: '餐食', value: '私人订制' }, { label: '客房', value: '皇宫景' }, { label: '车程', value: '30min' }] }
    ]
  },
  {
    id: 26,
    type: 'CLOTHING',
    objectCount: 3,
    dimensionCount: 4,
    instruction: "假如你需要订做一套顶级西装。请选择价格10000元以上、全手工缝制、面料为意大利进口、具备抗皱功能的西装 。",
    reminder: "价格1万+，全手工，意产面料，抗皱。",
    products: [
      { id: 'cl26_1', name: 'Zegna 杰尼亚', price: 18500, rating: 5.0, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '面料之父，无与伦比的质感', attributes: [{ label: '制作', value: '全手工定制' }, { label: '面料', value: '意产面料' }, { label: '功能', value: '纳米抗皱' }] },
      { id: 'cl26_2', name: 'Suitsupply 尊享', price: 6800, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '半工半定制，高性价比奢侈', attributes: [{ label: '制作', value: '半手工' }, { label: '面料', value: '意产羊毛' }, { label: '功能', value: '基本抗皱' }] },
      { id: 'cl26_3', name: 'W.W. Chan', price: 12500, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400', summary: '百年老店，匠心独具', attributes: [{ label: '制作', value: '全手工定制' }, { label: '面料', value: '英产面料' }, { label: '功能', value: '不抗皱' }] }
    ]
  },
  {
    id: 27,
    type: 'GADGET',
    objectCount: 3,
    dimensionCount: 3,
    instruction: "假如你选一家全自动意式咖啡机。请选择压力稳定在15bar以上、必须是不锈钢双锅炉、价格在8000-10000元的咖啡机。",
    reminder: "压力15bar+，双锅炉，价格8k-10k。",
    products: [
      { id: 'cf27_1', name: 'Breville 920', price: 9500, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400', summary: '精准温控，商用级萃取', attributes: [{ label: '压力', value: '15bar' }, { label: '锅炉', value: '双锅炉' }] },
      { id: 'cf27_2', name: '德龙 EC9155', price: 6999, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400', summary: '全自动一体，简单操作', attributes: [{ label: '压力', value: '19bar' }, { label: '锅炉', value: '双锅炉' }] },
      { id: 'cf27_3', name: '惠家 KD-310', price: 8200, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400', summary: '三加热块系统，极速加热', attributes: [{ label: '压力', value: '15bar' }, { label: '锅炉', value: '加热块' }] }
    ]
  },
  {
    id: 28,
    type: 'MEDICAL',
    objectCount: 3,
    dimensionCount: 2,
    instruction: "假如由于长期伏案工作，你需要办一张离家近的高端瑜伽卡。请选择月费少于1500元、距离家步行10分钟内的瑜伽店。",
    reminder: "<1500/月，近家<10mins。",
    products: [
      { id: 'yg28_1', name: 'Pure Yoga', price: 2100, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg', summary: '五星级更衣室，全明星导师', attributes: [{ label: '月均', value: '2100' }, { label: '路程', value: '5min' }] },
      { id: 'yg28_2', name: '梵音 瑜伽', price: 1350, rating: 4.5, imageUrl: 'https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg', summary: '课程丰富，氛围温馨', attributes: [{ label: '月均', value: '1350' }, { label: '路程', value: '8min' }] },
      { id: 'yg28_3', name: '乐刻 普拉提', price: 1600, rating: 4.0, imageUrl: 'https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg', summary: '全城通店，随时开练', attributes: [{ label: '月均', value: '1600' }, { label: '路程', value: '12min' }] }
    ]
  },
  {
    id: 29,
    type: 'GADGET',
    objectCount: 2,
    dimensionCount: 5,
    instruction: "假如由于你是自由摄影师。请选择价格5000以内、必须是8盘位、处理器Intel架构、支持全自动容灾备份、支持外网穿透极速下载。",
    reminder: "5k内，8盘位，Intel，自动容灾，极速穿透。",
    products: [
      { id: 'ns29_1', name: '极空间 Z4S', price: 4800, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', summary: '上手简单，自带极影视', attributes: [{ label: '盘位', value: '8盘' }, { label: '架构', value: 'Intel' }, { label: '备份', value: '自动容灾' }, { label: '穿透', value: '内置极速' }] },
      { id: 'ns29_2', name: '群晖 DS1821+', price: 9200, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', summary: 'DSM系统稳定，企业级安全', attributes: [{ label: '盘位', value: '8盘' }, { label: '架构', value: 'Ryzen(非Intel)' }, { label: '备份', value: '自动容灾' }, { label: '穿透', value: '内置极速' }] }
    ]
  },
  {
    id: 30,
    type: 'SOCIAL',
    objectCount: 2,
    dimensionCount: 4,
    instruction: "假如在选一家毕业照。请选择价格在15000-20000元、至少包含5套造型、摄影师必须是总监级、必须提供底片全送服务的摄影店。",
    reminder: "1.5-2万，≥5套，总监拍摄，底片全送。",
    products: [
      { id: 'ws30_1', name: '金夫人 旅拍', price: 18800, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/19421499/pexels-photo-19421499.jpeg', summary: '老品牌，服务体贴', attributes: [{ label: '造型', value: '6套' }, { label: '职级', value: '总监' }, { label: '底片', value: '全部赠送' }] },
      { id: 'ws30_2', name: '铂爵 旅拍', price: 14500, rating: 4.7, imageUrl: 'https://images.pexels.com/photos/19421499/pexels-photo-19421499.jpeg', summary: '时尚风格，修图自然', attributes: [{ label: '造型', value: '5套' }, { label: '职级', value: '总监' }, { label: '底片', value: '精选赠送' }] }
    ]
  },
  {
    id: 31,
    type: 'GADGET',
    objectCount: 2,
    dimensionCount: 3,
    instruction: "你打算买一辆竞速公路自行车。请选择碳纤维车架、必须搭配Shimano 105以上套件、价格在10000-15000元的竞速自行车。",
    reminder: "碳架，Shimano 105+套件，1-1.5万。",
    products: [
      { id: 'bk31_1', name: 'Giant TCR', price: 12800, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400', summary: '几何平衡，爬坡神器', attributes: [{ label: '材质', value: '碳纤维' }, { label: '套件', value: 'Shimano 105' }] },
      { id: 'bk31_2', name: 'Specialized Allez', price: 11500, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400', summary: '气动造型，巡航稳定', attributes: [{ label: '材质', value: '铝合金' }, { label: '套件', value: 'Shimano 105' }] }
    ]
  },
  {
    id: 32,
    type: 'GIFT',
    objectCount: 2,
    dimensionCount: 2,
    instruction: "你需要买一瓶顶级红酒送给你的重要合作伙伴。请选择评分95分以上、价格超过3000元的红酒。",
    reminder: "评分95分+，价格3k+。",
    products: [
      { id: 'wn32_1', name: '拉菲古堡 2018', price: 8800, rating: 5.0, imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400', summary: '名庄之首，极具收藏价值', attributes: [{ label: '专家分', value: '94' }] },
      { id: 'wn32_2', name: '作品一号 Opus', price: 3850, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400', summary: '纳帕谷顶尖跨界佳作', attributes: [{ label: '专家分', value: '97' }] }
    ]
  }
];
