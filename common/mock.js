// Mock 数据 - 美食旅游综合数据

// ============ 轮播图 ============
export const banners = [
    { id: 1, image: '/static/images/travel/jzg.jpeg', title: '九寨沟美食之旅', link: '' },
    { id: 2, image: '/static/images/travel/ddbyc.jpg', title: '西安回民街美食探秘', link: '' },
    { id: 3, image: '/static/images/travel/hs.jpeg', title: '黄山脚下徽菜盛宴', link: '' },
    { id: 4, image: '/static/images/travel/xh.jpg', title: '杭州西湖醋鱼尝鲜', link: '' }
];

// ============ 首页分类 ============
export const homeCategories = [
    { id: 1, name: '美食', icon: '🍜', color: '#FF6B35' },
    { id: 2, name: '景点', icon: '🏛️', color: '#4CAF50' },
    { id: 3, name: '酒店', icon: '🏨', color: '#2196F3' },
    { id: 4, name: '休闲', icon: '☕', color: '#9C27B0' },
    { id: 5, name: '火锅', icon: '🍲', color: '#F44336' },
    { id: 6, name: '小吃', icon: '🍢', color: '#FF9800' },
    { id: 7, name: '特产', icon: '🎁', color: '#E91E63' },
    { id: 8, name: '路线', icon: '🗺️', color: '#00BCD4' }
];

// ============ 美食列表 ============
export const foodList = [
    {
        id: 1,
        name: '老北京炸酱面',
        image: 'https://picsum.photos/seed/food1/400/300',
        rating: 4.8,
        price: 28,
        originalPrice: 38,
        sales: 2356,
        category: '面食',
        location: '北京市东城区王府井大街',
        description: '正宗老北京炸酱面，手工擀制面条，配以秘制肉酱和新鲜蔬菜，口感筋道爽滑，是老北京人最爱的传统美食之一。',
        tags: ['老字号', '必吃', '地道'],
        comments: [
            { user: '美食达人小王', avatar: '', content: '超级正宗的北京味道，炸酱浓郁，面条劲道！', rating: 5, time: '2024-12-20' },
            { user: '吃货小李', avatar: '', content: '每次来北京必吃的一家，份量十足，价格实惠。', rating: 4, time: '2024-12-18' }
        ]
    },
    {
        id: 2,
        name: '成都麻辣火锅',
        image: 'https://picsum.photos/seed/food2/400/300',
        rating: 4.9,
        price: 168,
        originalPrice: 198,
        sales: 5201,
        category: '火锅',
        location: '成都市锦江区春熙路88号',
        description: '正宗四川麻辣火锅，选用上等牛油熬制锅底，麻辣鲜香，配以几十种新鲜食材，让您体验最地道的川味火锅。',
        tags: ['人气爆棚', '川味正宗', '网红打卡'],
        comments: [
            { user: '辣妹子', avatar: '', content: '成都最好吃的火锅！牛油锅底超级香，每次都要排队。', rating: 5, time: '2024-12-22' },
            { user: '旅行者阿明', avatar: '', content: '辣得过瘾，麻得舒服，来成都旅游一定要试试！', rating: 5, time: '2024-12-15' }
        ]
    },
    {
        id: 3,
        name: '西湖醋鱼',
        image: 'https://picsum.photos/seed/food3/400/300',
        rating: 4.7,
        price: 88,
        originalPrice: 108,
        sales: 1890,
        category: '杭帮菜',
        location: '杭州市西湖区龙井路1号',
        description: '杭州传统名菜，选用西湖鲜活草鱼，以特制醋汁烹制，酸甜适口，鱼肉鲜嫩，是到杭州必尝的经典美食。',
        tags: ['杭帮名菜', '百年传承', '必点'],
        comments: [
            { user: '江南食客', avatar: '', content: '西湖边的正宗杭帮菜馆，醋鱼酸甜恰到好处，鱼肉嫩滑。', rating: 5, time: '2024-12-10' }
        ]
    },
    {
        id: 4,
        name: '西安肉夹馍',
        image: 'https://picsum.photos/seed/food4/400/300',
        rating: 4.6,
        price: 15,
        originalPrice: 20,
        sales: 8932,
        category: '小吃',
        location: '西安市碑林区回民街28号',
        description: '陕西传统名小吃，腊汁肉夹于白吉馍中，肉香浓郁，馍酥肉烂，是中国式汉堡的经典代表。',
        tags: ['回民街', '陕西名吃', '人气小吃'],
        comments: [
            { user: '西北汉子', avatar: '', content: '回民街最正宗的肉夹馍，肉质酥烂，回味无穷！', rating: 5, time: '2024-12-12' }
        ]
    },
    {
        id: 5,
        name: '广州早茶点心',
        image: 'https://picsum.photos/seed/food5/400/300',
        rating: 4.8,
        price: 98,
        originalPrice: 128,
        sales: 3456,
        category: '粤菜',
        location: '广州市越秀区北京路99号',
        description: '经典粤式早茶，虾饺、烧卖、叉烧包、肠粉等一应俱全，配以香浓普洱茶，体验地道广式慢生活。',
        tags: ['粤式经典', '早茶文化', '品质推荐'],
        comments: [
            { user: '老广味道', avatar: '', content: '虾饺皮薄馅大，烧卖鲜美多汁，正宗广式早茶！', rating: 5, time: '2024-12-08' }
        ]
    },
    {
        id: 6,
        name: '重庆小面',
        image: 'https://picsum.photos/seed/food6/400/300',
        rating: 4.5,
        price: 12,
        originalPrice: 16,
        sales: 10234,
        category: '面食',
        location: '重庆市渝中区解放碑步行街',
        description: '重庆人的早餐灵魂，麻辣鲜香的小面配上豌豆杂酱，一碗下肚，精神一整天。',
        tags: ['重庆特色', '麻辣鲜香', '街边美食'],
        comments: [
            { user: '山城娃儿', avatar: '', content: '每天一碗小面，重庆人的生活态度，麻得舒服辣得过瘾！', rating: 5, time: '2024-12-05' }
        ]
    },
    {
        id: 7,
        name: '兰州牛肉拉面',
        image: 'https://picsum.photos/seed/food7/400/300',
        rating: 4.6,
        price: 18,
        originalPrice: 25,
        sales: 6720,
        category: '面食',
        location: '兰州市城关区张掖路步行街56号',
        description: '正宗的兰州牛肉面讲究"一清二白三红四绿五黄"，汤清味浓，面条筋道，配上薄切牛肉和香葱，一碗下肚暖身又美味。',
        tags: ['百年老店', '西北风味', '人气美食'],
        comments: [
            { user: '西北狼', avatar: '', content: '兰州人的一天从一碗牛肉面开始，这家的汤头特别正！', rating: 5, time: '2024-12-03' }
        ]
    },
    {
        id: 8,
        name: '长沙臭豆腐',
        image: 'https://picsum.photos/seed/food8/400/300',
        rating: 4.4,
        price: 10,
        originalPrice: 15,
        sales: 15890,
        category: '小吃',
        location: '长沙市天心区坡子街108号',
        description: '闻起来臭吃起来香的经典长沙小吃，外酥里嫩的黑豆腐，配上秘制辣椒酱和蒜泥，一口下去满嘴留香，让人欲罢不能。',
        tags: ['网红小吃', '长沙必吃', '街边美食'],
        comments: [
            { user: '湘妹子', avatar: '', content: '排了半小时队才买到，但是真的太值了！外焦里嫩超好吃！', rating: 5, time: '2024-12-01' }
        ]
    },
    {
        id: 9,
        name: '云南过桥米线',
        image: 'https://picsum.photos/seed/food9/400/300',
        rating: 4.8,
        price: 38,
        originalPrice: 48,
        sales: 4560,
        category: '地方菜',
        location: '昆明市五华区南屏街68号',
        description: '云南最具代表性的美食，滚烫的鸡汤配上薄如蝉翼的肉片和新鲜蔬菜，米线爽滑，汤鲜味美，是到云南必尝的第一美食。',
        tags: ['云南特色', '非遗美食', '汤鲜味美'],
        comments: [
            { user: '旅行吃货', avatar: '', content: '仪式感满满的过桥米线，先下肉再下菜，汤真的绝了！', rating: 5, time: '2024-11-28' }
        ]
    },
    {
        id: 10,
        name: '新疆大盘鸡',
        image: 'https://picsum.photos/seed/food10/400/300',
        rating: 4.7,
        price: 68,
        originalPrice: 88,
        sales: 3890,
        category: '地方菜',
        location: '乌鲁木齐市天山区解放南路201号',
        description: '新疆招牌菜，大块鸡肉和土豆炖至酥烂，配上宽面条浸满浓郁汤汁，麻辣鲜香，分量十足，充满西域风情。',
        tags: ['新疆名菜', '分量十足', '西域风味'],
        comments: [
            { user: '爱吃肉的阿强', avatar: '', content: '鸡肉超多，土豆软糯，面条吸饱了汤汁，两个人吃都够了！', rating: 5, time: '2024-11-25' }
        ]
    },
    {
        id: 11,
        name: '南京盐水鸭',
        image: 'https://picsum.photos/seed/food11/400/300',
        rating: 4.9,
        price: 58,
        originalPrice: 68,
        sales: 9870,
        category: '地方菜',
        location: '南京市秦淮区夫子庙美食街15号',
        description: '南京著名特产，桂花鸭制作工艺已有千年历史，鸭肉白嫩肥而不腻，咸香入味，是金陵菜中最具代表性的名菜。',
        tags: ['南京特产', '非遗美食', '百年老店'],
        comments: [
            { user: '金陵老饕', avatar: '', content: '正宗的南京盐水鸭，肉质细嫩，咸香适口，每次来夫子庙必买！', rating: 5, time: '2024-11-22' }
        ]
    },
    {
        id: 12,
        name: '武汉热干面',
        image: 'https://picsum.photos/seed/food12/400/300',
        rating: 4.5,
        price: 8,
        originalPrice: 12,
        sales: 21560,
        category: '面食',
        location: '武汉市武昌区户部巷小吃街22号',
        description: '武汉人的过早首选，芝麻酱浓郁的碱面配酸豆角和萝卜丁，趁热拌匀后每一口都是满足，是中国十大面条之一。',
        tags: ['武汉必吃', '早餐之都', '人气名吃'],
        comments: [
            { user: '江城食客', avatar: '', content: '早上来一碗热干面，武汉人的灵魂早餐，芝麻酱太香了！', rating: 5, time: '2024-11-20' }
        ]
    },
    {
        id: 13,
        name: '重庆老火锅',
        image: 'https://picsum.photos/seed/food13/400/300',
        rating: 4.9,
        price: 158,
        originalPrice: 188,
        sales: 8760,
        category: '火锅',
        location: '重庆市渝中区解放碑八一路168号',
        description: '重庆地道老火锅，九宫格铁锅配上翻滚的红油锅底，毛肚、鹅肠、黄喉等必点菜品新鲜现切，麻辣鲜香醇厚悠长。',
        tags: ['重庆必吃', '九宫格', '排队王'],
        comments: [
            { user: '火锅爱好者', avatar: '', content: '九宫格火锅太有感觉了，毛肚七上八下刚刚好，脆嫩爽口！', rating: 5, time: '2025-01-10' }
        ]
    },
    {
        id: 14,
        name: '老北京涮羊肉',
        image: 'https://picsum.photos/seed/food14/400/300',
        rating: 4.8,
        price: 138,
        originalPrice: 168,
        sales: 6540,
        category: '火锅',
        location: '北京市东城区东直门内大街227号',
        description: '正宗老北京铜锅涮肉，选用内蒙古优质羊肉手工现切，清汤锅底配上秘制麻酱蘸料，还原最地道的京城涮肉风味。',
        tags: ['老北京', '铜锅涮肉', '冬季必吃'],
        comments: [
            { user: '京城老炮', avatar: '', content: '铜锅炭火才是涮羊肉的灵魂，手切羊肉薄如纸，蘸上麻酱绝了！', rating: 5, time: '2025-01-08' }
        ]
    },
    {
        id: 15,
        name: '潮汕牛肉火锅',
        image: 'https://picsum.photos/seed/food15/400/300',
        rating: 4.7,
        price: 128,
        originalPrice: 148,
        sales: 5430,
        category: '火锅',
        location: '汕头市金平区金砂东路99号',
        description: '潮汕人最爱的牛肉火锅，当天现宰黄牛肉经师傅手工切制，胸口朥、吊龙、匙仁等不同部位各有风味，蘸沙茶酱鲜美无比。',
        tags: ['潮汕名吃', '鲜切牛肉', '清淡鲜美'],
        comments: [
            { user: '潮汕美食家', avatar: '', content: '牛肉现切现涮，每个部位涮的时间都有讲究，沙茶酱是灵魂！', rating: 5, time: '2025-01-05' }
        ]
    },
    {
        id: 16,
        name: '天津煎饼果子',
        image: 'https://picsum.photos/seed/food16/400/300',
        rating: 4.6,
        price: 10,
        originalPrice: 12,
        sales: 12340,
        category: '小吃',
        location: '天津市和平区南市食品街32号',
        description: '天津人最爱的早餐，绿豆面摊成的薄饼裹上酥脆的馃篦儿，刷上面酱、辣酱，撒上葱花，外软里脆，香气扑鼻。',
        tags: ['天津名吃', '早餐必吃', '非遗小吃'],
        comments: [
            { user: '天津卫', avatar: '', content: '正宗的天津煎饼果子就是绿豆面的，里面夹馃篦儿，嘎嘣脆！', rating: 5, time: '2025-01-03' }
        ]
    },
    {
        id: 17,
        name: '成都龙抄手',
        image: 'https://picsum.photos/seed/food17/400/300',
        rating: 4.7,
        price: 22,
        originalPrice: 28,
        sales: 7890,
        category: '小吃',
        location: '成都市锦江区春熙路南段45号',
        description: '成都著名传统小吃，皮薄馅嫩的抄手配以红油、清汤、海味等多种口味，红油抄手麻辣鲜香，是成都街头最受欢迎的小吃之一。',
        tags: ['成都名吃', '红油抄手', '老字号'],
        comments: [
            { user: '蓉城食客', avatar: '', content: '皮薄得透光，肉馅鲜嫩多汁，红油抄手一碗根本不够吃！', rating: 5, time: '2025-01-01' }
        ]
    },
    {
        id: 18,
        name: '上海小笼包',
        image: 'https://picsum.photos/seed/food18/400/300',
        rating: 4.7,
        price: 32,
        originalPrice: 42,
        sales: 11230,
        category: '小吃',
        location: '上海市黄浦区豫园路85号',
        description: '上海最具代表性的小吃，皮薄馅嫩汤汁丰盈，轻轻提慢慢移先开窗后喝汤，是每个到上海的人必尝的经典美味。',
        tags: ['上海名吃', '汤汁丰盈', '必吃'],
        comments: [
            { user: '魔都吃货', avatar: '', content: '一口一个汤汁四溢，皮薄得能看到里面的馅，太好吃了！', rating: 5, time: '2025-01-20' }
        ]
    },
    {
        id: 19,
        name: '东北锅包肉',
        image: 'https://picsum.photos/seed/food19/400/300',
        rating: 4.6,
        price: 48,
        originalPrice: 58,
        sales: 8760,
        category: '地方菜',
        location: '哈尔滨市道里区中央大街168号',
        description: '东北经典名菜，猪里脊肉切片挂糊油炸至金黄酥脆，再以糖醋汁翻炒，外酥里嫩酸甜可口，是东北菜的灵魂之作。',
        tags: ['东北名菜', '酸甜酥脆', '下饭神器'],
        comments: [
            { user: '东北老铁', avatar: '', content: '外酥里嫩酸甜适中，配上大米饭简直绝了，东北菜yyds！', rating: 5, time: '2025-01-18' }
        ]
    },
    {
        id: 21,
        name: '深圳椰子鸡',
        image: 'https://picsum.photos/seed/food21/400/300',
        rating: 4.7,
        price: 128,
        originalPrice: 158,
        sales: 9870,
        category: '地方菜',
        location: '深圳市福田区华强北街道99号',
        description: '深圳最具代表性的美食，清甜椰青水做锅底，放入文昌鸡慢煮，蘸上沙姜青柠酱汁，鲜甜滑嫩，是深圳人最爱的养生火锅。',
        tags: ['深圳名吃', '椰子鸡', '养生火锅'],
        comments: [
            { user: '深圳吃货', avatar: '', content: '椰青水煮鸡太鲜甜了，沙姜蘸料是灵魂，每次来深圳必吃！', rating: 5, time: '2025-01-22' }
        ]
    },
    {
        id: 22,
        name: '深圳光明乳鸽',
        image: 'https://picsum.photos/seed/food22/400/300',
        rating: 4.8,
        price: 48,
        originalPrice: 58,
        sales: 7650,
        category: '小吃',
        location: '深圳市光明区光明大街168号',
        description: '深圳光明三宝之首，选用优质乳鸽以秘制卤水腌制后红烧，皮脆肉嫩骨香，一口咬下汁水四溢，是深圳最具人气的特色美食。',
        tags: ['深圳特产', '光明三宝', '皮脆肉嫩'],
        comments: [
            { user: '乳鸽爱好者', avatar: '', content: '皮脆得像玻璃，肉嫩得流汁，每次路过光明都要打包几只！', rating: 5, time: '2025-01-20' }
        ]
    },
    {
        id: 20,
        name: '广西螺蛳粉',
        image: 'https://picsum.photos/seed/food20/400/300',
        rating: 4.4,
        price: 15,
        originalPrice: 20,
        sales: 28900,
        category: '小吃',
        location: '柳州市鱼峰区五星街89号',
        description: '柳州最具辨识度的网红美食，酸笋的独特香气配上螺蛳熬制的浓郁汤底，加上腐竹花生酸豆角，爱的人欲罢不能。',
        tags: ['柳州名吃', '网红美食', '酸辣鲜香'],
        comments: [
            { user: '嗦粉达人', avatar: '', content: '闻着臭吃着香！酸笋是灵魂，再加个卤蛋和鸭脚，完美！', rating: 5, time: '2025-01-15' }
        ]
    },
    // ===== 北京美食 =====
    {
        id: 23, name: '北京烤鸭', image: 'https://picsum.photos/seed/food23/400/300', rating: 4.9, price: 198, originalPrice: 258, sales: 15600, category: '地方菜', location: '北京市东城区前门大街88号',
        description: '北京最具代表性的名菜，选用优质填鸭以果木挂炉烤制，皮脆肉嫩色泽红润，片成108片配以甜面酱、葱丝、黄瓜条，以荷叶饼卷食，是国宴级别的中华美食。',
        tags: ['北京名菜', '国宴', '必吃'], comments: [{ user: '京城老饕', avatar: '', content: '来北京不吃烤鸭等于没来！皮酥肉嫩，卷饼一口下去太满足了！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 24, name: '豆汁焦圈', image: 'https://picsum.photos/seed/food24/400/300', rating: 4.2, price: 8, originalPrice: 12, sales: 8900, category: '小吃', location: '北京市西城区天桥市场斜街45号',
        description: '老北京独有的传统早餐，豆汁以绿豆发酵制成，酸中带香，配以酥脆的焦圈和咸菜丝，是老北京人最爱的地道风味，越喝越上瘾。',
        tags: ['老北京', '独特风味', '传统早餐'], comments: [{ user: '老北京人', avatar: '', content: '从小喝到大的豆汁，配焦圈咸菜，绝了！外地人可能第一次不习惯，但会上瘾！', rating: 4, time: '2025-02-08' }]
    },
    {
        id: 25, name: '卤煮火烧', image: 'https://picsum.photos/seed/food25/400/300', rating: 4.5, price: 25, originalPrice: 32, sales: 11200, category: '小吃', location: '北京市东城区东四北大街126号',
        description: '老北京经典小吃，猪肠、猪肺、豆腐、火烧在浓郁的老汤中慢炖卤制，配以蒜泥、辣椒油和韭菜花，滋味浓郁回味无穷。',
        tags: ['老北京', '重口味', '地道小吃'], comments: [{ user: '胡同串子', avatar: '', content: '卤煮就得在胡同里吃才够味儿！汤浓料足，一碗下去浑身暖！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 26, name: '北京炒肝', image: 'https://picsum.photos/seed/food26/400/300', rating: 4.4, price: 15, originalPrice: 20, sales: 9800, category: '小吃', location: '北京市东城区鼓楼东大街58号',
        description: '北京传统早点名吃，以猪肝和猪肠为主料，勾芡成浓稠汤汁，配以蒜末和姜末，咸鲜浓郁口感顺滑，是老北京早餐的灵魂。',
        tags: ['北京早餐', '浓稠鲜美', '传统名吃'], comments: [{ user: '鼓楼居民', avatar: '', content: '早上来碗炒肝配二两包子，北京人的标准早餐！', rating: 5, time: '2025-02-03' }]
    },
    {
        id: 27, name: '艾窝窝', image: 'https://picsum.photos/seed/food27/400/300', rating: 4.3, price: 12, originalPrice: 16, sales: 6700, category: '小吃', location: '北京市西城区牛街清真超市18号',
        description: '北京传统清真甜点，糯米粉制成的外皮包裹着核桃仁、芝麻、青红丝等馅料，外皮软糯内心香甜，是逢年过节必备的传统点心。',
        tags: ['北京点心', '清真美食', '软糯香甜'], comments: [{ user: '甜食爱好者', avatar: '', content: '软软糯糯的太好吃了，牛街的清真点心就是正宗！', rating: 5, time: '2025-01-30' }]
    },
    {
        id: 28, name: '豌豆黄', image: 'https://picsum.photos/seed/food28/400/300', rating: 4.5, price: 10, originalPrice: 14, sales: 7800, category: '小吃', location: '北京市西城区护国寺街93号',
        description: '北京传统宫廷点心，以豌豆为原料熬制而成，色泽金黄口感细腻如脂，入口即化甜而不腻，是夏季消暑的经典甜品。',
        tags: ['宫廷点心', '入口即化', '夏日消暑'], comments: [{ user: '宫廷美食迷', avatar: '', content: '冰冰凉凉的豌豆黄，夏天吃太爽了，入口即化超细腻！', rating: 5, time: '2025-01-28' }]
    },
    // ===== 上海美食 =====
    {
        id: 29, name: '生煎包', image: 'https://picsum.photos/seed/food29/400/300', rating: 4.8, price: 18, originalPrice: 24, sales: 18900, category: '小吃', location: '上海市黄浦区云南南路69号',
        description: '上海最具代表性的市井美食，底部煎得金黄酥脆，上皮薄而软韧，内馅鲜美多汁，咬开一个小口先吸汤汁再吃包子，是上海人的心头好。',
        tags: ['上海名吃', '底脆汤鲜', '必吃'], comments: [{ user: '上海小囡', avatar: '', content: '底脆汤多肉鲜，一口气能吃八个！上海人从小吃到大的味道！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 30, name: '葱油拌面', image: 'https://picsum.photos/seed/food30/400/300', rating: 4.6, price: 12, originalPrice: 16, sales: 14500, category: '面食', location: '上海市静安区南京西路888号',
        description: '上海本帮面点经典，小葱慢火熬出葱油香气四溢，拌入筋道面条，加一勺开洋和酱油，简单却回味无穷，是上海人最家常也最离不开的味道。',
        tags: ['本帮面点', '葱香四溢', '家常美味'], comments: [{ user: '弄堂记忆', avatar: '', content: '最简单的食材做出最难忘的味道，葱油拌面就是上海的乡愁！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 31, name: '本帮糖醋排骨', image: 'https://picsum.photos/seed/food31/400/300', rating: 4.7, price: 58, originalPrice: 72, sales: 12300, category: '地方菜', location: '上海市徐汇区衡山路128号',
        description: '上海本帮菜代表作，精选猪小排以冰糖和镇江香醋烹制，色泽红亮晶莹剔透，酸甜适中肉质酥烂，是上海人宴客必备的招牌冷菜。',
        tags: ['本帮名菜', '酸甜可口', '宴客必备'], comments: [{ user: '老克勒', avatar: '', content: '正宗本帮糖醋排骨就要这个色面，甜中带酸，骨头都酥了！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 32, name: '上海熏鱼', image: 'https://picsum.photos/seed/food32/400/300', rating: 4.5, price: 38, originalPrice: 48, sales: 10200, category: '地方菜', location: '上海市黄浦区福州路355号',
        description: '上海传统冷菜，选用草鱼中段先炸后浸入特制酱汁，外酥里嫩甜咸适口，冷吃风味更佳，是上海人过年必备的年菜之一。',
        tags: ['本帮冷菜', '年菜必备', '甜咸适口'], comments: [{ user: '上海阿姨', avatar: '', content: '每年过年都要做熏鱼，这家的味道跟家里做的很像，正宗！', rating: 4, time: '2025-02-03' }]
    },
    {
        id: 33, name: '蟹粉豆腐', image: 'https://picsum.photos/seed/food33/400/300', rating: 4.8, price: 88, originalPrice: 108, sales: 8900, category: '地方菜', location: '上海市静安区愚园路268号',
        description: '上海秋季限定名菜，新鲜大闸蟹拆出的蟹黄蟹肉与嫩滑豆腐同煮，蟹粉鲜美豆腐滑嫩，金黄的蟹油浸润每一块豆腐，鲜到掉眉毛。',
        tags: ['秋季限定', '蟹粉鲜美', '本帮名菜'], comments: [{ user: '蟹痴', avatar: '', content: '蟹黄和豆腐简直是天生一对，拌米饭吃绝了，鲜得不得了！', rating: 5, time: '2025-01-25' }]
    },
    {
        id: 34, name: '八宝鸭', image: 'https://picsum.photos/seed/food34/400/300', rating: 4.6, price: 168, originalPrice: 218, sales: 5600, category: '地方菜', location: '上海市黄浦区老城隍庙福佑路238号',
        description: '上海本帮经典大菜，整鸭去骨填入糯米、火腿、冬菇、莲子等八种食材，蒸至酥烂，鸭肉与馅料完美融合，是上海人年夜饭上的压轴菜。',
        tags: ['本帮大菜', '年夜饭', '功夫菜'], comments: [{ user: '年夜饭达人', avatar: '', content: '鸭子酥烂脱骨，里面的糯米饭吸饱了鸭油，比鸭肉还好吃！', rating: 5, time: '2025-01-20' }]
    },
    {
        id: 35, name: '油墩子', image: 'https://picsum.photos/seed/food35/400/300', rating: 4.3, price: 6, originalPrice: 8, sales: 15600, category: '小吃', location: '上海市虹口区四川北路168号',
        description: '上海弄堂经典小吃，萝卜丝和面糊放入特制模具中油炸至金黄，外脆里嫩萝卜清甜，是很多上海人童年放学路上的味道。',
        tags: ['弄堂小吃', '童年味道', '外脆里嫩'], comments: [{ user: '弄堂回忆', avatar: '', content: '小时候放学必买一个，趁热吃外脆里嫩，满满的童年回忆！', rating: 4, time: '2025-01-18' }]
    },
    // ===== 广州美食 =====
    {
        id: 36, name: '白切鸡', image: 'https://picsum.photos/seed/food36/400/300', rating: 4.8, price: 68, originalPrice: 88, sales: 16700, category: '粤菜', location: '广州市荔湾区上下九步行街88号',
        description: '粤菜经典中的经典，选用三黄鸡以浸熟方式烹制，皮爽肉滑骨中带血，配以姜葱蓉蘸料，原汁原味尽显鸡肉本真的鲜美。',
        tags: ['粤菜之首', '皮爽肉滑', '原汁原味'], comments: [{ user: '老广味道', avatar: '', content: '无鸡不成宴，白切鸡就是检验粤菜馆水平的试金石，这家过关！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 37, name: '煲仔饭', image: 'https://picsum.photos/seed/food37/400/300', rating: 4.7, price: 35, originalPrice: 45, sales: 13400, category: '粤菜', location: '广州市越秀区惠福东路358号',
        description: '广东传统特色主食，米饭与腊味、滑鸡等食材在砂锅中一同煲制，锅底形成金黄酥脆的饭焦，淋上特制酱油拌匀，每一口都是享受。',
        tags: ['广东特色', '饭焦酥脆', '腊味飘香'], comments: [{ user: '煲仔饭控', avatar: '', content: '最爱锅底的饭焦，嘎嘣脆！腊味的油渗进饭里，太香了！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 38, name: '云吞面', image: 'https://picsum.photos/seed/food38/400/300', rating: 4.6, price: 22, originalPrice: 28, sales: 18900, category: '面食', location: '广州市荔湾区宝华路15号',
        description: '广府传统面食代表，鲜虾云吞皮薄馅靓，竹升面爽弹有嚼劲，大地鱼熬制的汤头清澈鲜美，是广州人从早吃到晚的经典美食。',
        tags: ['广府名吃', '鲜虾云吞', '汤清味鲜'], comments: [{ user: '云吞面世家', avatar: '', content: '汤底大地鱼味超浓，云吞皮薄到透光，竹升面弹牙爽口！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 39, name: '干炒牛河', image: 'https://picsum.photos/seed/food39/400/300', rating: 4.5, price: 28, originalPrice: 36, sales: 15600, category: '粤菜', location: '广州市天河区体育东路28号',
        description: '粤菜大排档的灵魂菜品，河粉与牛肉在高温铁锅上快速翻炒，锅气十足酱油均匀裹在每条河粉上，牛肉嫩滑芽菜脆爽，镬气十足。',
        tags: ['大排档名菜', '锅气十足', '镬气'], comments: [{ user: '大排档达人', avatar: '', content: '干炒牛河是检验粤菜师傅功夫的标准，有镬气才叫正宗！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 40, name: '蜜汁叉烧', image: 'https://picsum.photos/seed/food40/400/300', rating: 4.9, price: 48, originalPrice: 58, sales: 20100, category: '粤菜', location: '广州市越秀区文明路168号',
        description: '广东烧腊的灵魂之作，猪梅花肉以麦芽糖和多种酱料腌制后烤制，外表焦香红亮内部多汁柔软，甜咸适中，是广东人最爱的烧腊美味。',
        tags: ['烧腊之王', '焦香甜美', '必点'], comments: [{ user: '烧腊爱好者', avatar: '', content: '半肥瘦的叉烧最好吃！边边有点焦焦的，甜香四溢！', rating: 5, time: '2025-02-03' }]
    },
    {
        id: 41, name: '双皮奶', image: 'https://picsum.photos/seed/food41/400/300', rating: 4.7, price: 15, originalPrice: 20, sales: 22300, category: '小吃', location: '广州市荔湾区第十甫路85号',
        description: '广东顺德传入广州的经典甜品，以水牛奶为原料经过两次凝结形成双层奶皮，上层甘香下层滑嫩，入口即化甜而不腻，是广式甜品的代表。',
        tags: ['广式甜品', '入口即化', '奶香浓郁'], comments: [{ user: '甜品控', avatar: '', content: '两层奶皮真的有区别！上层浓郁下层嫩滑，只用勺子敲一敲会duang~', rating: 5, time: '2025-02-01' }]
    },
    {
        id: 42, name: '萝卜牛杂', image: 'https://picsum.photos/seed/food42/400/300', rating: 4.4, price: 18, originalPrice: 24, sales: 17800, category: '小吃', location: '广州市越秀区北京路步行街188号',
        description: '广州街头最受欢迎的小吃，牛肚、牛肠、牛肺等在秘制卤水中慢炖入味，配以吸满汤汁的白萝卜和特制辣椒酱，是逛街必吃的市井美味。',
        tags: ['街头小吃', '市井美味', '逛街必吃'], comments: [{ user: '街头美食家', avatar: '', content: '每次来北京路必买一碗，牛杂软烂入味，萝卜吸满汤汁太正了！', rating: 4, time: '2025-01-28' }]
    },
    // ===== 深圳美食 =====
    {
        id: 43, name: '沙井蚝', image: 'https://picsum.photos/seed/food43/400/300', rating: 4.7, price: 68, originalPrice: 88, sales: 9800, category: '地方菜', location: '深圳市宝安区沙井街道蚝乡路68号',
        description: '深圳沙井有着千年养蚝历史，沙井蚝体大肉肥鲜美多汁，蒜蓉烤生蚝或清蒸生蚝都能品尝到最鲜甜的海味，是深圳最具代表性的海鲜美食。',
        tags: ['深圳特产', '千年蚝乡', '鲜美多汁'], comments: [{ user: '蚝客', avatar: '', content: '沙井蚝果然名不虚传，个头大肉质饱满，蒜蓉烤的最好吃！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 44, name: '龙岗荔枝柴火鸡', image: 'https://picsum.photos/seed/food44/400/300', rating: 4.6, price: 88, originalPrice: 108, sales: 7600, category: '地方菜', location: '深圳市龙岗区中心城龙城路88号',
        description: '深圳龙岗客家特色美食，以荔枝木柴火慢烤的土鸡，果木香气渗入鸡肉每一丝纤维，皮脆肉嫩带有独特的荔枝木清香，是深圳客家人的待客大菜。',
        tags: ['客家美食', '荔枝木烤', '皮脆肉嫩'], comments: [{ user: '客家人', avatar: '', content: '荔枝木烤出来的鸡就是不一样，有果木的清香，连骨头都是香的！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 45, name: '南澳海胆炒饭', image: 'https://picsum.photos/seed/food45/400/300', rating: 4.8, price: 58, originalPrice: 78, sales: 8900, category: '地方菜', location: '深圳市大鹏新区南澳街道海港路18号',
        description: '深圳南澳渔港特色美食，新鲜海胆黄与蛋炒饭完美结合，粒粒分明金黄诱人，海胆的鲜甜渗透每一粒米饭，是来深圳东部必吃的海鲜料理。',
        tags: ['南澳特色', '海胆鲜美', '海鲜料理'], comments: [{ user: '海胆控', avatar: '', content: '海胆量超足！炒饭粒粒金黄，鲜甜的海胆配上米饭太绝了！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 46, name: '西乡基围虾', image: 'https://picsum.photos/seed/food46/400/300', rating: 4.5, price: 78, originalPrice: 98, sales: 10200, category: '地方菜', location: '深圳市宝安区西乡街道海鲜市场12号',
        description: '深圳西乡是基围虾的主要产地，基围虾壳薄肉厚鲜甜弹牙，白灼最能体现其鲜甜本味，蘸上姜葱酱油，一口一个鲜甜弹嫩。',
        tags: ['深圳海鲜', '壳薄肉厚', '鲜甜弹牙'], comments: [{ user: '海鲜达人', avatar: '', content: '白灼基围虾沾姜葱酱油，简单却最能吃出虾的鲜甜！', rating: 4, time: '2025-02-03' }]
    },
    {
        id: 47, name: '公明烧鹅', image: 'https://picsum.photos/seed/food47/400/300', rating: 4.7, price: 88, originalPrice: 118, sales: 8900, category: '粤菜', location: '深圳市光明区公明街道长春路88号',
        description: '深圳公明镇传承百年的烧腊技艺，选用本地黑鬃鹅以秘制酱料腌制后明炉烤制，皮脆如玻璃肉嫩多汁，是深圳最负盛名的烧腊名品。',
        tags: ['百年技艺', '皮脆肉嫩', '深圳名吃'], comments: [{ user: '烧鹅爱好者', avatar: '', content: '皮脆得能听到咔嚓声，鹅肉鲜嫩多汁，比很多香港名店还好吃！', rating: 5, time: '2025-01-30' }]
    },
    {
        id: 48, name: '松岗腊鸭', image: 'https://picsum.photos/seed/food48/400/300', rating: 4.4, price: 58, originalPrice: 78, sales: 6700, category: '特产', location: '深圳市宝安区松岗街道吉祥路36号',
        description: '深圳松岗客家传统腊味，选用当地土鸭以传统工艺腌制晾晒风干，腊香浓郁肉质紧实，蒸熟后切片配饭或下酒都是绝佳选择。',
        tags: ['客家腊味', '传统工艺', '腊香浓郁'], comments: [{ user: '腊味控', avatar: '', content: '腊鸭蒸饭太香了！鸭油渗进米饭里，简单却超级满足！', rating: 4, time: '2025-01-28' }]
    },
    // ===== 成都美食 =====
    {
        id: 49, name: '担担面', image: 'https://picsum.photos/seed/food49/400/300', rating: 4.7, price: 16, originalPrice: 22, sales: 23400, category: '面食', location: '成都市锦江区总府路28号',
        description: '成都面食的灵魂之作，细面条配以芝麻酱、红油辣椒、花椒面和肉末臊子，麻辣鲜香酱香浓郁，是成都街头巷尾最受欢迎的面食。',
        tags: ['成都名吃', '麻辣鲜香', '面食经典'], comments: [{ user: '面食控', avatar: '', content: '一碗担担面麻辣鲜香俱全，芝麻酱和红油拌开太香了！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 50, name: '麻婆豆腐', image: 'https://picsum.photos/seed/food50/400/300', rating: 4.8, price: 22, originalPrice: 32, sales: 31200, category: '地方菜', location: '成都市青羊区西玉龙街197号',
        description: '成都陈麻婆始创的经典川菜，嫩豆腐与牛肉末在红油中翻滚，麻辣烫香嫩鲜酥，花椒的麻与辣椒的香层层递进，是川菜的国际名片。',
        tags: ['川菜经典', '麻辣烫香', '国际名菜'], comments: [{ user: '川菜迷', avatar: '', content: '麻婆豆腐配三碗米饭都不够！麻辣鲜香嫩烫，道道到位！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 51, name: '夫妻肺片', image: 'https://picsum.photos/seed/food51/400/300', rating: 4.6, price: 38, originalPrice: 48, sales: 18900, category: '地方菜', location: '成都市锦江区春熙路南段88号',
        description: '成都传统名菜，牛肉牛杂卤制后切薄片，浇上红油辣椒花椒芝麻等调制的酱汁，色泽红亮麻辣鲜香，是川菜中冷菜的代表之作。',
        tags: ['川菜名品', '红油飘香', '冷菜经典'], comments: [{ user: '成都吃货', avatar: '', content: '红油太香了！牛肉切得极薄，裹满红油和芝麻，一口一片停不下来！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 52, name: '串串香', image: 'https://picsum.photos/seed/food52/400/300', rating: 4.7, price: 58, originalPrice: 78, sales: 26700, category: '火锅', location: '成都市武侯区科华北路143号',
        description: '成都特色草根美食，各式荤素食材串在竹签上放入麻辣锅中烫煮，蘸上香油碟或干碟，一串接一串吃到酣畅淋漓，是成都夜生活的灵魂。',
        tags: ['成都夜宵', '草根美食', '酣畅淋漓'], comments: [{ user: '串串狂人', avatar: '', content: '数签签的时候最有成就感！牛肉香菜卷和掌中宝必拿！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 53, name: '兔头', image: 'https://picsum.photos/seed/food53/400/300', rating: 4.5, price: 12, originalPrice: 16, sales: 32100, category: '小吃', location: '成都市金牛区营门口路78号',
        description: '成都最具地方特色的小吃之一，兔头以秘制卤料卤制后拌上花生碎和红油花椒，麻辣鲜香回味悠长，是成都人宵夜下酒的必备美味。',
        tags: ['成都特色', '麻辣鲜香', '下酒必备'], comments: [{ user: '兔头达人', avatar: '', content: '一个兔头一瓶啤酒，成都人的夜生活标配！脸颊肉最嫩最好吃！', rating: 5, time: '2025-02-03' }]
    },
    {
        id: 54, name: '红糖糍粑', image: 'https://picsum.photos/seed/food54/400/300', rating: 4.8, price: 16, originalPrice: 22, sales: 25600, category: '小吃', location: '成都市锦江区镗钯街88号',
        description: '成都传统甜品小吃，糯米糍粑炸至外酥里糯，浇上浓稠的古法红糖汁和黄豆粉，外脆内软甜而不腻，是吃完火锅后的最佳甜点。',
        tags: ['成都甜品', '外酥里糯', '红糖香甜'], comments: [{ user: '甜食控', avatar: '', content: '吃完火锅来一份红糖糍粑，外脆里糯甜丝丝的，完美收尾！', rating: 5, time: '2025-02-01' }]
    },
    // ===== 杭州美食 =====
    {
        id: 55, name: '东坡肉', image: 'https://picsum.photos/seed/food55/400/300', rating: 4.9, price: 68, originalPrice: 88, sales: 18900, category: '杭帮菜', location: '杭州市上城区东坡路66号',
        description: '杭州最具代表性的名菜，五花肉慢火炖制数小时，色泽红亮如琥珀，肥而不腻酥烂如豆腐，入口即化酱香浓郁，是苏东坡留给杭州的美食遗产。',
        tags: ['杭帮名菜', '肥而不腻', '入口即化'], comments: [{ user: '文豪粉丝', avatar: '', content: '东坡肉肥而不腻入口即化，配一碗白米饭简直人间至味！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 56, name: '叫花鸡', image: 'https://picsum.photos/seed/food56/400/300', rating: 4.7, price: 88, originalPrice: 108, sales: 13400, category: '杭帮菜', location: '杭州市西湖区龙井路88号',
        description: '杭州传统名菜，整鸡用荷叶包裹再裹上黄泥烤制，敲开泥壳荷叶清香扑鼻而来，鸡肉鲜嫩多汁带有荷叶的清香，是一道充满仪式感的杭帮名菜。',
        tags: ['杭帮名菜', '荷叶清香', '仪式感'], comments: [{ user: '仪式感食客', avatar: '', content: '用小锤子敲开泥壳好好玩！里面的鸡肉嫩得流汁，荷叶味好香！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 57, name: '龙井虾仁', image: 'https://picsum.photos/seed/food57/400/300', rating: 4.8, price: 78, originalPrice: 98, sales: 15600, category: '杭帮菜', location: '杭州市西湖区梅家坞1号',
        description: '杭州最具诗意的名菜，新鲜河虾仁配以清明前龙井新茶一同烹制，虾仁洁白如玉弹嫩鲜美，茶香清幽回甘悠长，是杭帮菜中雅致的代表。',
        tags: ['杭帮名菜', '茶香虾鲜', '雅致之味'], comments: [{ user: '茶痴', avatar: '', content: '龙井的清香和虾仁的鲜甜完美融合，吃一口仿佛闻到了茶园的气息！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 58, name: '片儿川', image: 'https://picsum.photos/seed/food58/400/300', rating: 4.6, price: 18, originalPrice: 25, sales: 18900, category: '面食', location: '杭州市上城区解放路168号',
        description: '杭州人最爱的本地面食，雪菜、笋片、瘦肉片做浇头，汤清味鲜面条筋道，冬笋的脆和雪菜的鲜交织在一起，是杭州面食的灵魂之作。',
        tags: ['杭州本地面', '雪菜笋片', '汤清味鲜'], comments: [{ user: '杭州面痴', avatar: '', content: '杭州人的一天从一碗片儿川开始！笋片和雪菜的鲜，是家乡的味道！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 59, name: '定胜糕', image: 'https://picsum.photos/seed/food59/400/300', rating: 4.4, price: 12, originalPrice: 16, sales: 12300, category: '小吃', location: '杭州市拱墅区河坊街158号',
        description: '杭州传统糕点，米粉蒸制的粉红色糕体包裹着红豆沙馅，松软香甜造型可爱，相传是南宋时百姓为鼓舞将士而制，寓意旗开得胜。',
        tags: ['杭州糕点', '寓意吉祥', '松软香甜'], comments: [{ user: '糕点控', avatar: '', content: '河坊街现蒸的定胜糕最好吃！松软香甜，还有好彩头！', rating: 4, time: '2025-02-03' }]
    },
    {
        id: 60, name: '葱包烩', image: 'https://picsum.photos/seed/food60/400/300', rating: 4.3, price: 8, originalPrice: 10, sales: 16700, category: '小吃', location: '杭州市上城区中山南路186号',
        description: '杭州传统街头小吃，将油条和葱段卷入春饼中压烤至酥脆，刷上甜面酱或辣酱，外脆里香，是杭州人从小吃到大的街头美味。',
        tags: ['街头小吃', '杭州记忆', '外脆里香'], comments: [{ user: '老杭州', avatar: '', content: '小时候放学必买葱包烩，压得扁扁脆脆的，甜酱一抹太好吃了！', rating: 4, time: '2025-01-30' }]
    },
    {
        id: 61, name: '宋嫂鱼羹', image: 'https://picsum.photos/seed/food61/400/300', rating: 4.6, price: 48, originalPrice: 62, sales: 8900, category: '杭帮菜', location: '杭州市西湖区杨公堤28号',
        description: '杭州南宋流传至今的传统汤羹，以鳜鱼丝、火腿丝、香菇丝等与鸡汤同煮勾芡，汤鲜味醇鱼丝滑嫩，是杭州人宴席上不可或缺的一道经典汤品。',
        tags: ['南宋名羹', '汤鲜味醇', '宴席必备'], comments: [{ user: '宋韵食客', avatar: '', content: '鱼丝嫩滑如丝绸，汤羹鲜美无比，不愧是流传千年的名菜！', rating: 5, time: '2025-01-28' }]
    },
    // ===== 西安美食 =====
    {
        id: 62, name: '凉皮', image: 'https://picsum.photos/seed/food62/400/300', rating: 4.6, price: 10, originalPrice: 14, sales: 28900, category: '小吃', location: '西安市碑林区东木头市88号',
        description: '陕西最具代表性的小吃之一，以米浆或面粉蒸制成皮切条，配以面筋豆芽黄瓜丝，浇上红油辣椒蒜水醋汁，筋道爽滑酸辣开胃，是西安人夏天的最爱。',
        tags: ['陕西名吃', '酸辣开胃', '夏日必吃'], comments: [{ user: '凉皮控', avatar: '', content: '一碗凉皮一瓶冰峰，西安人的夏天标配！酸辣爽口太解暑了！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 63, name: '羊肉泡馍', image: 'https://picsum.photos/seed/food63/400/300', rating: 4.8, price: 38, originalPrice: 48, sales: 24500, category: '地方菜', location: '西安市莲湖区回民街大皮院18号',
        description: '西安美食的绝对王者，食客将白吉馍亲手掰成黄豆大小碎块，厨师以羊肉浓汤煮制，配以粉丝木耳羊肉片，汤浓馍香肉烂，是西安人最骄傲的美食名片。',
        tags: ['西安名片', '亲手掰馍', '汤浓馍香'], comments: [{ user: '老陕', avatar: '', content: '自己掰馍才有灵魂！掰得越细越入味，汤鲜肉烂馍筋道！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 64, name: 'BiangBiang面', image: 'https://picsum.photos/seed/food64/400/300', rating: 4.7, price: 18, originalPrice: 25, sales: 19800, category: '面食', location: '西安市雁塔区大雁塔南广场12号',
        description: '陕西八大怪之一"面条像裤带"，宽如裤带的面条筋道厚实有嚼头，配上油泼辣子蒜末和臊子，泼上滚烫热油滋啦作响，香气扑鼻一碗过瘾。',
        tags: ['陕西八大怪', '面条像裤带', '油泼辣子'], comments: [{ user: '面食老陕', avatar: '', content: '一碗biangbiang面下肚，啥烦恼都没了！泼油的那一刻最诱人！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 65, name: '葫芦头', image: 'https://picsum.photos/seed/food65/400/300', rating: 4.5, price: 28, originalPrice: 36, sales: 12300, category: '小吃', location: '西安市碑林区南院门65号',
        description: '西安传统名吃，以猪大肠为主料配以馍块、粉丝等在浓白高汤中煮制，汤白如奶肠软馍筋，配以蒜苗香菜辣椒油，是西安人冬日暖身的首选。',
        tags: ['西安传统', '汤白如奶', '冬日暖身'], comments: [{ user: '西安老汉', avatar: '', content: '葫芦头泡馍是西安人才懂的美味，汤白肠烂吃着过瘾！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 66, name: '灌汤包子', image: 'https://picsum.photos/seed/food66/400/300', rating: 4.6, price: 22, originalPrice: 30, sales: 16700, category: '小吃', location: '西安市莲湖区回民街北院门88号',
        description: '西安回民街必吃美食，薄皮大馅内含丰盈汤汁，先咬一小口轻轻吸出滚烫鲜汤，再蘸上醋和辣椒油吃包子，皮薄汤鲜肉嫩回味无穷。',
        tags: ['回民街', '皮薄汤鲜', '先吸后吃'], comments: [{ user: '灌汤包达人', avatar: '', content: '先开窗后喝汤，小心烫嘴！汤超鲜肉超嫩，回民街一绝！', rating: 5, time: '2025-02-03' }]
    },
    {
        id: 67, name: '甑糕', image: 'https://picsum.photos/seed/food67/400/300', rating: 4.4, price: 12, originalPrice: 16, sales: 8900, category: '小吃', location: '西安市莲湖区洒金桥128号',
        description: '西安传统甜品，糯米和红枣层层叠放在陶甑中慢火蒸制数小时，枣香与米香完美交融，软糯甜香入口即化，是西安人从小的甜蜜记忆。',
        tags: ['西安甜品', '枣香米香', '软糯甜蜜'], comments: [{ user: '甜甜蜜蜜', avatar: '', content: '早上一碗热腾腾的甑糕，甜蜜蜜糯叽叽，一天都开心！', rating: 4, time: '2025-02-01' }]
    },
    {
        id: 68, name: '臊子面', image: 'https://picsum.photos/seed/food68/400/300', rating: 4.5, price: 15, originalPrice: 20, sales: 17800, category: '面食', location: '西安市未央区凤城五路88号',
        description: '陕西关中地区传统面食，筋道面条浇上以肉丁豆腐胡萝卜等炒制的臊子汤，酸辣鲜香面筋汤宽，讲究薄筋光煎稀旺，是陕西人待客的最高礼仪。',
        tags: ['关中名吃', '臊子鲜香', '待客之面'], comments: [{ user: '关中汉子', avatar: '', content: '一碗臊子面，汤要宽面要筋臊子要香，这碗做得地道！', rating: 5, time: '2025-01-30' }]
    },
    // ===== 重庆美食 =====
    {
        id: 69, name: '毛血旺', image: 'https://picsum.photos/seed/food69/400/300', rating: 4.8, price: 48, originalPrice: 62, sales: 19800, category: '地方菜', location: '重庆市渝中区较场口88号',
        description: '重庆江湖菜的代表之作，鸭血毛肚午餐肉鳝鱼等汇聚一盆，在红油花椒的麻辣汤底中翻滚，麻辣鲜香烫五味俱全，是重庆人豪爽性格的美食写照。',
        tags: ['江湖菜王', '麻辣鲜香烫', '重庆必吃'], comments: [{ user: '江湖儿女', avatar: '', content: '一大盆红彤彤的毛血旺端上来太震撼了！麻辣鲜香，超级下饭！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 70, name: '酸辣粉', image: 'https://picsum.photos/seed/food70/400/300', rating: 4.6, price: 10, originalPrice: 14, sales: 35600, category: '小吃', location: '重庆市渝中区解放碑好吃街68号',
        description: '重庆最受欢迎的街头小吃，红薯粉条晶莹剔透爽滑筋道，酸辣汤底配上花生碎榨菜末和香菜，酸辣鲜香一碗上头，是重庆人的灵魂小吃。',
        tags: ['重庆灵魂', '酸辣鲜香', '街头之王'], comments: [{ user: '酸辣控', avatar: '', content: '酸辣粉就得在路边蹲着吃最香！酸得开胃辣得过瘾！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 71, name: '辣子鸡', image: 'https://picsum.photos/seed/food71/400/300', rating: 4.7, price: 58, originalPrice: 72, sales: 18900, category: '地方菜', location: '重庆市南岸区南山火锅一条街18号',
        description: '重庆歌乐山名菜，鸡丁与海量干红辣椒和花椒一同爆炒，在辣椒堆里找鸡丁是吃这道菜的乐趣，鸡肉干香酥麻辣味入骨，越辣越想吃。',
        tags: ['歌乐山名菜', '辣椒里找鸡', '干香酥麻'], comments: [{ user: '无辣不欢', avatar: '', content: '满盘辣椒里找鸡丁太好玩了！鸡肉干香麻辣，配啤酒绝了！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 72, name: '水煮鱼', image: 'https://picsum.photos/seed/food72/400/300', rating: 4.8, price: 68, originalPrice: 88, sales: 23400, category: '地方菜', location: '重庆市江北区观音桥步行街88号',
        description: '重庆江湖菜经典，新鲜草鱼片在麻辣汤底中烫至嫩滑，铺上厚厚一层干辣椒和花椒，浇上滚烫热油瞬间激发出麻辣焦香，鱼片嫩如豆腐麻辣过瘾。',
        tags: ['江湖菜经典', '鱼片嫩滑', '麻辣过瘾'], comments: [{ user: '吃鱼达人', avatar: '', content: '最后浇油那一下最精彩！鱼片嫩得入口即化，麻辣味太正了！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 73, name: '泉水鸡', image: 'https://picsum.photos/seed/food73/400/300', rating: 4.6, price: 78, originalPrice: 98, sales: 12300, category: '地方菜', location: '重庆市北碚区缙云山28号',
        description: '重庆南山名菜，以山泉水烹制土鸡，配以大量辣椒花椒和秘制酱料，鸡肉鲜嫩汤汁麻辣，吃完鸡肉再下面条吸收汤汁，一鸡两吃别具风味。',
        tags: ['南山名菜', '泉水烹鸡', '一鸡两吃'], comments: [{ user: '南山游客', avatar: '', content: '上南山一定要吃泉水鸡！鸡肉嫩滑麻辣鲜香，最后下面条绝配！', rating: 5, time: '2025-02-03' }]
    },
    {
        id: 74, name: '豆花饭', image: 'https://picsum.photos/seed/food74/400/300', rating: 4.4, price: 15, originalPrice: 20, sales: 16700, category: '小吃', location: '重庆市沙坪坝区磁器口古镇88号',
        description: '重庆最接地气的美食，嫩滑豆花配以麻辣红油蘸水和白米饭，豆花嫩如凝脂蘸水麻辣鲜香，一碗豆花一碗饭，是重庆人最朴实的满足。',
        tags: ['重庆家常', '豆花嫩滑', '朴实美味'], comments: [{ user: '重庆崽儿', avatar: '', content: '豆花饭是重庆人的灵魂归宿，嫩豆花配麻辣蘸水，简单却超满足！', rating: 4, time: '2025-01-30' }]
    },
    // ===== 南京美食 =====
    {
        id: 75, name: '鸭血粉丝汤', image: 'https://picsum.photos/seed/food75/400/300', rating: 4.7, price: 18, originalPrice: 25, sales: 34500, category: '小吃', location: '南京市秦淮区夫子庙贡院西街88号',
        description: '南京最具代表性的小吃，鸭血嫩滑鸭肠爽脆粉丝柔韧，在老鸭浓汤中烫煮，配上豆腐泡和香菜，汤鲜料足暖心暖胃，是南京美食的第一名片。',
        tags: ['南京名片', '鸭血嫩滑', '汤鲜料足'], comments: [{ user: '南京人', avatar: '', content: '南京人的灵魂美食！鸭血嫩滑粉丝劲道，汤头是老鸭熬的太鲜了！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 76, name: '金陵烤鸭', image: 'https://picsum.photos/seed/food76/400/300', rating: 4.8, price: 58, originalPrice: 78, sales: 19800, category: '地方菜', location: '南京市秦淮区老门东箍桶巷38号',
        description: '南京烤鸭与北京烤鸭齐名，选用湖熟麻鸭以焖炉烤制，皮酥肉嫩汁水丰盈，蘸以特制红卤酱汁，甜咸适中鸭香浓郁，是南京人最爱的卤菜。',
        tags: ['南京名菜', '焖炉烤制', '红卤酱汁'], comments: [{ user: '金陵老饕', avatar: '', content: '南京烤鸭配红卤才是正宗吃法！皮酥肉嫩，卤汁沾鞋底都好吃！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 77, name: '桂花糖芋苗', image: 'https://picsum.photos/seed/food77/400/300', rating: 4.5, price: 12, originalPrice: 16, sales: 14500, category: '小吃', location: '南京市秦淮区夫子庙大石坝街32号',
        description: '南京传统甜品，小芋艿与桂花酱藕粉同煮，汤色晶莹甜香四溢，芋苗软糯顺滑桂香扑鼻，是南京人秋天最爱的时令甜汤。',
        tags: ['南京甜汤', '桂香四溢', '软糯顺滑'], comments: [{ user: '甜汤控', avatar: '', content: '秋天来一碗桂花糖芋苗，桂花香芋头糯，甜甜蜜蜜暖到心里！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 78, name: '牛肉锅贴', image: 'https://picsum.photos/seed/food78/400/300', rating: 4.6, price: 16, originalPrice: 22, sales: 23400, category: '小吃', location: '南京市秦淮区夫子庙贡院街68号',
        description: '南京特色清真小吃，月牙形锅贴底部煎至金黄焦脆，上皮薄而软韧，牛肉馅鲜美多汁，咬开小心烫嘴，蘸上香醋和辣椒油，是南京人的早餐最爱。',
        tags: ['清真小吃', '底脆汤多', '早餐必吃'], comments: [{ user: '锅贴达人', avatar: '', content: '外皮焦脆内馅多汁，咬一口汤汁四溢，南京最好吃的锅贴！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 79, name: '赤豆元宵', image: 'https://picsum.photos/seed/food79/400/300', rating: 4.4, price: 10, originalPrice: 14, sales: 18900, category: '小吃', location: '南京市秦淮区夫子庙大石坝街68号',
        description: '南京传统甜品，红豆熬得绵密起沙配以小元宵和莲子，加入桂花酱和藕粉勾芡，汤汁浓稠甜而不腻，是南京人过年和元宵节必备的甜蜜滋味。',
        tags: ['南京甜品', '红豆绵密', '甜蜜滋味'], comments: [{ user: '甜蜜蜜', avatar: '', content: '红豆熬得沙沙的，小元宵Q弹，加上桂花酱太香了！', rating: 4, time: '2025-02-03' }]
    },
    {
        id: 80, name: '皮肚面', image: 'https://picsum.photos/seed/food80/400/300', rating: 4.5, price: 16, originalPrice: 22, sales: 15600, category: '面食', location: '南京市鼓楼区湖南路狮子桥88号',
        description: '南京特色面食，猪皮炸制成皮肚与面条同煮，皮肚吸满汤汁软韧有嚼劲，配以猪肝肉丝青菜等，汤宽料足面筋道，是南京人最爱的市井面食。',
        tags: ['南京本地面', '皮肚软韧', '汤宽料足'], comments: [{ user: '南京面痴', avatar: '', content: '皮肚吸饱了汤汁一口下去超满足！面条筋道浇头超多！', rating: 5, time: '2025-02-01' }]
    },
    {
        id: 81, name: '南京板鸭', image: 'https://picsum.photos/seed/food81/400/300', rating: 4.6, price: 48, originalPrice: 62, sales: 13400, category: '特产', location: '南京市江宁区湖熟街道88号',
        description: '南京传统腊味特产，选用湖熟麻鸭以盐卤腌制后风干压制，外形扁平如板肉质紧实，蒸熟后切片腊香浓郁咸鲜适口，是南京人过年必备的年货。',
        tags: ['南京特产', '腊香浓郁', '年货必备'], comments: [{ user: '年货达人', avatar: '', content: '每年过年都要买只板鸭，蒸熟了切片下酒，咸香有嚼劲！', rating: 4, time: '2025-01-28' }]
    },
    // ===== 武汉美食 =====
    {
        id: 82, name: '三鲜豆皮', image: 'https://picsum.photos/seed/food82/400/300', rating: 4.7, price: 12, originalPrice: 16, sales: 26700, category: '小吃', location: '武汉市江岸区吉庆街68号',
        description: '武汉过早四大天王之一，绿豆大米浆摊成薄皮包裹糯米三鲜馅料，煎至两面金黄外脆内糯，馅料包含鲜肉鲜菇鲜笋，是武汉人最爱的过早选择。',
        tags: ['过早天王', '外脆内糯', '三鲜馅香'], comments: [{ user: '过早达人', avatar: '', content: '武汉过早之王！外皮金黄酥脆，里面的糯米和三鲜馅太香了！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 83, name: '面窝', image: 'https://picsum.photos/seed/food83/400/300', rating: 4.4, price: 5, originalPrice: 8, sales: 34500, category: '小吃', location: '武汉市武昌区粮道街88号',
        description: '武汉独有的油炸早点，以米浆加葱花姜末炸成环形，中间薄脆四周厚软，外酥里嫩咸香可口，是武汉人过早配热干面的最佳搭档。',
        tags: ['武汉独有', '外酥里嫩', '过早伴侣'], comments: [{ user: '武汉伢', avatar: '', content: '面窝配热干面是武汉过早的黄金搭档！中间脆脆的边边软软的！', rating: 4, time: '2025-02-10' }]
    },
    {
        id: 84, name: '糯米鸡', image: 'https://picsum.photos/seed/food84/400/300', rating: 4.3, price: 6, originalPrice: 8, sales: 18900, category: '小吃', location: '武汉市江汉区前进五路78号',
        description: '武汉传统早点，糯米包裹鸡肉香菇等馅料团成球油炸至金黄，外壳酥脆内里软糯鲜香，一口一个方便好吃，是武汉人上学上班路上的美味。',
        tags: ['武汉早点', '外壳酥脆', '内里软糯'], comments: [{ user: '上班族', avatar: '', content: '赶早高峰买两个糯米鸡，边走边吃，又快又好吃！', rating: 4, time: '2025-02-08' }]
    },
    {
        id: 85, name: '糊汤粉', image: 'https://picsum.photos/seed/food85/400/300', rating: 4.5, price: 10, originalPrice: 14, sales: 12300, category: '小吃', location: '武汉市武昌区户部巷自由路18号',
        description: '武汉特色早点，以小鱼熬制的浓白糊汤配以细米粉，汤浓鱼鲜粉滑顺口，撒上胡椒虾皮榨菜末，鲜辣暖胃是武汉人冬天过早的最爱。',
        tags: ['武汉特色', '鱼汤浓白', '鲜辣暖胃'], comments: [{ user: '冬日暖食', avatar: '', content: '冬天来一碗糊汤粉太暖和了！鱼汤浓郁配上细粉滑溜溜的！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 86, name: '排骨藕汤', image: 'https://picsum.photos/seed/food86/400/300', rating: 4.8, price: 48, originalPrice: 62, sales: 18900, category: '地方菜', location: '武汉市武昌区东湖路188号',
        description: '湖北人最爱的家常汤品，莲藕与排骨慢火煨制数小时，藕粉糯拉丝排骨酥烂脱骨，汤色乳白鲜美回甘，是湖北人待客的最高礼仪和家的味道。',
        tags: ['湖北名汤', '藕粉糯拉丝', '家的味道'], comments: [{ user: '湖北人', avatar: '', content: '藕汤是湖北人的乡愁！藕粉糯拉长丝，排骨烂到脱骨，汤鲜到舔碗！', rating: 5, time: '2025-02-03' }]
    },
    {
        id: 87, name: '清蒸武昌鱼', image: 'https://picsum.photos/seed/food87/400/300', rating: 4.7, price: 58, originalPrice: 78, sales: 13400, category: '地方菜', location: '武汉市武昌区临江大道88号',
        description: '湖北最负盛名的鱼类菜品，选用梁子湖鲜活武昌鱼清蒸到刚熟，浇上葱姜热油和蒸鱼豉油，鱼肉嫩如豆腐鲜甜无比，毛泽东"才饮长沙水又食武昌鱼"使其名扬天下。',
        tags: ['湖北名菜', '鱼肉嫩滑', '名扬天下'], comments: [{ user: '食鱼客', avatar: '', content: '武昌鱼果然名不虚传！清蒸最能吃出鱼的本味，嫩滑鲜甜！', rating: 5, time: '2025-02-01' }]
    },
    {
        id: 88, name: '精武鸭脖', image: 'https://picsum.photos/seed/food88/400/300', rating: 4.5, price: 25, originalPrice: 35, sales: 45600, category: '小吃', location: '武汉市江汉区解放大道688号',
        description: '武汉最知名的零食特产，以秘制卤料卤制后拌入辣椒花椒，麻辣鲜香回味悠长，啃鸭脖喝啤酒是武汉人宵夜的标配，风靡全国的武汉美食名片。',
        tags: ['武汉名片', '麻辣鲜香', '宵夜标配'], comments: [{ user: '鸭脖控', avatar: '', content: '精武路第一家！鸭脖麻辣入味，边啃边追剧太幸福了！', rating: 5, time: '2025-01-30' }]
    }
];

// ============ 旅游景点列表 ============
export const travelList = [
    {
        id: 101,
        name: '北京故宫博物院',
        image: '/static/images/travel/gg.jpeg',
        rating: 4.9,
        price: 60,
        originalPrice: 80,
        sales: 25680,
        category: '历史文化',
        location: '北京市东城区景山前街4号',
        description: '故宫是中国明清两代的皇家宫殿，旧称紫禁城，位于北京中轴线的中心。占地面积72万平方米，建筑面积约15万平方米，有大小宫殿七十多座，房屋九千余间。',
        openTime: '08:30-17:00',
        tags: ['5A景区', '世界遗产', '必去'],
        comments: [
            { user: '历史爱好者', avatar: '', content: '震撼人心的皇家建筑，每一砖每一瓦都在诉说明清历史。', rating: 5, time: '2024-12-20' },
            { user: '摄影达人', avatar: '', content: '红墙黄瓦，随便一拍都是大片，建议早上早点去避开人流。', rating: 5, time: '2024-12-15' }
        ]
    },
    {
        id: 102,
        name: '九寨沟国家级自然保护区',
        image: '/static/images/travel/jzg.jpeg',
        rating: 4.8,
        price: 169,
        originalPrice: 220,
        sales: 12890,
        category: '自然风光',
        location: '四川省阿坝藏族羌族自治州九寨沟县',
        description: '九寨沟因沟内有九个藏族村寨而得名，以翠海、叠瀑、彩林、雪峰、藏情、蓝冰"六绝"著称于世。这里的水是九寨沟的灵魂，被誉为"人间仙境"。',
        openTime: '08:00-17:00',
        tags: ['5A景区', '世界遗产', '人间仙境'],
        comments: [
            { user: '旅行家小张', avatar: '', content: '九寨归来不看水，这里的水美得让人窒息，一定要亲眼来看！', rating: 5, time: '2024-12-18' }
        ]
    },
    {
        id: 103,
        name: '西安大唐不夜城',
        image: '/static/images/travel/ddbyc.jpg',
        rating: 4.7,
        price: 0,
        originalPrice: 0,
        sales: 35200,
        category: '文化街区',
        location: '西安市雁塔区大雁塔脚下',
        description: '大唐不夜城以盛唐文化为背景，以唐风元素为主线，是集购物、餐饮、娱乐、休闲、旅游、商务为一体的一站式消费天堂。',
        openTime: '全天开放',
        tags: ['网红打卡', '唐文化', '免费'],
        comments: [
            { user: '古风爱好者', avatar: '', content: '晚上来太美了，灯火辉煌的不倒翁小姐姐表演不容错过！', rating: 5, time: '2024-12-16' }
        ]
    },
    {
        id: 104,
        name: '秦始皇兵马俑博物馆',
        image: '/static/images/travel/bmy.jpeg',
        rating: 4.9,
        price: 120,
        originalPrice: 150,
        sales: 18900,
        category: '历史文化',
        location: '西安市临潼区秦陵北路',
        description: '秦始皇兵马俑被誉为"世界第八大奇迹"，是中国古代辉煌文明的一张金字名片。三个俑坑共出土兵马俑8000余件。',
        openTime: '08:30-18:00',
        tags: ['5A景区', '世界遗产', '世界奇迹'],
        comments: [
            { user: '考古迷', avatar: '', content: '亲眼看到兵马俑的震撼无法用语言形容，每个俑的面部表情都不一样！', rating: 5, time: '2024-12-10' }
        ]
    },
    {
        id: 105,
        name: '安徽黄山风景区',
        image: '/static/images/travel/hs.jpeg',
        rating: 4.8,
        price: 190,
        originalPrice: 230,
        sales: 15670,
        category: '自然风光',
        location: '安徽省黄山市黄山区',
        description: '黄山以奇松、怪石、云海、温泉、冬雪"五绝"著称于世，被誉为"天下第一奇山"。徐霞客赞叹"登黄山天下无山"。',
        openTime: '06:00-17:00',
        tags: ['5A景区', '世界遗产', '奇山'],
        comments: [
            { user: '登山爱好者', avatar: '', content: '黄山的云海日出太美了，迎客松比课本上画的还要壮观！', rating: 5, time: '2024-12-08' }
        ]
    },
    {
        id: 106,
        name: '杭州西湖风景名胜区',
        image: '/static/images/travel/xh.jpg',
        rating: 4.7,
        price: 0,
        originalPrice: 0,
        sales: 42300,
        category: '自然风光',
        location: '杭州市西湖区龙井路1号',
        description: '西湖是中国大陆首批国家重点风景名胜区和中国十大风景名胜之一，以一山、二塔、三岛、三堤、五湖为基本格局。',
        openTime: '全天开放',
        tags: ['5A景区', '世界遗产', '免费'],
        comments: [
            { user: '文艺青年', avatar: '', content: '欲把西湖比西子，淡妆浓抹总相宜。西湖的美是诗意的美。', rating: 5, time: '2024-12-06' }
        ]
    },
    {
        id: 107,
        name: '桂林漓江风景名胜区',
        image: 'https://picsum.photos/seed/travel107/400/300',
        rating: 4.8,
        price: 120,
        originalPrice: 150,
        sales: 19800,
        category: '自然风光',
        location: '桂林市阳朔县漓江景区',
        description: '漓江是桂林山水的精华所在，百里漓江百里画廊，乘坐竹筏顺流而下，两岸奇峰倒映碧水之中，宛如一幅水墨山水画卷。',
        openTime: '08:00-17:00',
        tags: ['5A景区', '山水画廊', '必去'],
        comments: [
            { user: '山水之间', avatar: '', content: '漓江泛舟太美了，人在画中游的感觉，20元人民币背景就在这里！', rating: 5, time: '2025-01-20' }
        ]
    },
    {
        id: 108,
        name: '张家界国家森林公园',
        image: 'https://picsum.photos/seed/travel108/400/300',
        rating: 4.9,
        price: 248,
        originalPrice: 298,
        sales: 23400,
        category: '自然风光',
        location: '张家界市武陵源区',
        description: '张家界以独特的石英砂岩峰林地貌闻名于世，《阿凡达》取景地，云雾缭绕间三千奇峰拔地而起，令人惊叹大自然的鬼斧神工。',
        openTime: '07:00-18:00',
        tags: ['5A景区', '世界遗产', '阿凡达取景'],
        comments: [
            { user: '探险家', avatar: '', content: '站在天子山顶俯瞰，那种震撼无法描述，不愧是世界自然遗产！', rating: 5, time: '2025-01-18' }
        ]
    },
    {
        id: 109,
        name: '西藏布达拉宫',
        image: 'https://picsum.photos/seed/travel109/400/300',
        rating: 4.9,
        price: 200,
        originalPrice: 260,
        sales: 15600,
        category: '历史文化',
        location: '拉萨市城关区北京中路',
        description: '布达拉宫是世界上海拔最高的宫殿式建筑群，藏传佛教的圣地，依山而建气势恢宏，红白两色宫殿在蓝天下格外庄严神圣。',
        openTime: '09:00-16:00',
        tags: ['世界遗产', '藏传佛教', '雪域圣殿'],
        comments: [
            { user: '朝圣者', avatar: '', content: '站在布达拉宫脚下仰望，感受到的不仅是建筑的美，更是信仰的力量。', rating: 5, time: '2025-01-15' }
        ]
    },
    {
        id: 110,
        name: '厦门鼓浪屿',
        image: 'https://picsum.photos/seed/travel110/400/300',
        rating: 4.7,
        price: 35,
        originalPrice: 50,
        sales: 32100,
        category: '自然风光',
        location: '厦门市思明区鼓浪屿',
        description: '鼓浪屿被称为"海上花园"，岛上遍布欧式建筑和各色小店，琴声悠扬海浪轻拍，漫步在小巷中感受悠闲的海岛慢时光。',
        openTime: '全天开放',
        tags: ['5A景区', '世界遗产', '文艺海岛'],
        comments: [
            { user: '海岛控', avatar: '', content: '岛上没有机动车，走走停停很惬意，日光岩上看全景超美！', rating: 5, time: '2025-01-12' }
        ]
    },
    {
        id: 111,
        name: '苏州园林（拙政园）',
        image: 'https://picsum.photos/seed/travel111/400/300',
        rating: 4.8,
        price: 80,
        originalPrice: 100,
        sales: 18900,
        category: '历史文化',
        location: '苏州市姑苏区东北街178号',
        description: '拙政园是中国四大名园之首，以水为中心山水萦绕，亭台楼阁错落有致，一步一景步步换景，是江南园林艺术的巅峰之作。',
        openTime: '07:30-17:30',
        tags: ['5A景区', '世界遗产', '江南园林'],
        comments: [
            { user: '园林爱好者', avatar: '', content: '移步换景处处是画，古人造园的智慧真是令人叹为观止！', rating: 5, time: '2025-01-10' }
        ]
    },
    {
        id: 112,
        name: '三亚亚龙湾',
        image: 'https://picsum.photos/seed/travel112/400/300',
        rating: 4.6,
        price: 0,
        originalPrice: 0,
        sales: 45600,
        category: '自然风光',
        location: '三亚市亚龙湾国家旅游度假区',
        description: '亚龙湾被誉为"天下第一湾"，拥有7公里长的洁白沙滩和碧蓝海水，热带风情浓郁，是冬季避寒度假的绝佳目的地。',
        openTime: '全天开放',
        tags: ['免费', '最美海滩', '度假天堂'],
        comments: [
            { user: '阳光沙滩', avatar: '', content: '沙质细腻海水清澈，冬天来这里太舒服了，完全不想离开！', rating: 5, time: '2025-01-08' }
        ]
    },
    {
        id: 113,
        name: '云南丽江古城',
        image: 'https://picsum.photos/seed/travel113/400/300',
        rating: 4.7,
        price: 0,
        originalPrice: 0,
        sales: 38900,
        category: '文化街区',
        location: '丽江市古城区',
        description: '丽江古城是世界文化遗产，纳西族传统文化与自然风光完美融合，小桥流水石板路，在四方街晒太阳发呆是最丽江的旅行方式。',
        openTime: '全天开放',
        tags: ['世界遗产', '古城风情', '免费'],
        comments: [
            { user: '背包客', avatar: '', content: '晚上的四方街有纳西族打跳，跟着当地人一起跳舞太欢乐了！', rating: 5, time: '2025-01-05' }
        ]
    },
    {
        id: 114,
        name: '四川都江堰',
        image: 'https://picsum.photos/seed/travel114/400/300',
        rating: 4.8,
        price: 80,
        originalPrice: 100,
        sales: 14500,
        category: '历史文化',
        location: '成都市都江堰市',
        description: '都江堰是世界上最古老的无坝引水工程，两千多年来一直灌溉着成都平原，是古人智慧的结晶，与青城山共同列为世界遗产。',
        openTime: '08:00-18:00',
        tags: ['5A景区', '世界遗产', '水利奇迹'],
        comments: [
            { user: '历史迷', avatar: '', content: '两千多年前的水利工程至今还在用，中国古代科技太厉害了！', rating: 5, time: '2025-01-03' }
        ]
    },
    {
        id: 115,
        name: '敦煌莫高窟',
        image: 'https://picsum.photos/seed/travel115/400/300',
        rating: 4.9,
        price: 238,
        originalPrice: 298,
        sales: 12300,
        category: '历史文化',
        location: '酒泉市敦煌市鸣沙山月牙泉景区',
        description: '莫高窟是世界上现存规模最大的佛教艺术宝库，735个洞窟中保存着精美的壁画和彩塑，被誉为"东方卢浮宫"。',
        openTime: '08:00-17:00',
        tags: ['世界遗产', '艺术宝库', '丝路明珠'],
        comments: [
            { user: '文化旅人', avatar: '', content: '看到千年壁画时真的热泪盈眶，每个洞窟都是一部历史的画卷。', rating: 5, time: '2025-01-01' }
        ]
    },
    {
        id: 116,
        name: '泰山风景区',
        image: 'https://picsum.photos/seed/travel116/400/300',
        rating: 4.8,
        price: 115,
        originalPrice: 145,
        sales: 26700,
        category: '自然风光',
        location: '泰安市泰山区',
        description: '泰山为五岳之首，被誉为"天下第一山"，历代帝王在此封禅祭祀，文化底蕴深厚。登顶观日出云海，是每个登山爱好者的梦想。',
        openTime: '全天开放',
        tags: ['5A景区', '世界遗产', '五岳之首'],
        comments: [
            { user: '登山客', avatar: '', content: '夜爬泰山看日出，虽然累但看到日出的那一刻一切都值了！', rating: 5, time: '2024-12-28' }
        ]
    },
    {
        id: 117,
        name: '黄果树瀑布',
        image: 'https://picsum.photos/seed/travel117/400/300',
        rating: 4.6,
        price: 160,
        originalPrice: 200,
        sales: 17800,
        category: '自然风光',
        location: '安顺市镇宁布依族苗族自治县',
        description: '黄果树瀑布是亚洲第一大瀑布，宽101米高77.8米，水势浩大气势磅礴，水帘洞更是世界罕见可穿行的瀑布水帘洞。',
        openTime: '07:30-18:00',
        tags: ['5A景区', '亚洲第一', '水帘洞'],
        comments: [
            { user: '行者无疆', avatar: '', content: '水帘洞太震撼了，从瀑布后面穿过去的感觉太奇妙了！', rating: 5, time: '2024-12-25' }
        ]
    },
    {
        id: 118,
        name: '青岛栈桥',
        image: 'https://picsum.photos/seed/travel118/400/300',
        rating: 4.5,
        price: 0,
        originalPrice: 0,
        sales: 38700,
        category: '自然风光',
        location: '青岛市市南区太平路12号',
        description: '青岛的标志性建筑，440米长的栈桥伸入海中，尽头的回澜阁是青岛啤酒的标志取景地，海鸥盘旋海浪拍岸风景如画。',
        openTime: '全天开放',
        tags: ['青岛地标', '免费', '海景'],
        comments: [
            { user: '海边漫步', avatar: '', content: '冬天来栈桥喂海鸥太治愈了，配上青岛啤酒简直是完美！', rating: 4, time: '2024-12-22' }
        ]
    },
    {
        id: 119,
        name: '哈尔滨冰雪大世界',
        image: 'https://picsum.photos/seed/travel119/400/300',
        rating: 4.8,
        price: 298,
        originalPrice: 368,
        sales: 23400,
        category: '文化街区',
        location: '哈尔滨市松北区太阳岛西区',
        description: '世界最大的冰雪主题乐园，每年冬季用数十万立方米的冰雪打造出梦幻的冰雪城堡和冰雕艺术，夜晚彩灯璀璨如同童话世界。',
        openTime: '11:00-21:30',
        tags: ['冰雪奇观', '冬季限定', '童话世界'],
        comments: [
            { user: '南方人', avatar: '', content: '第一次看到这么大的冰雕城堡，晚上亮灯后简直美哭了！', rating: 5, time: '2024-12-20' }
        ]
    },
    {
        id: 121,
        name: '深圳世界之窗',
        image: 'https://picsum.photos/seed/travel121/400/300',
        rating: 4.5,
        price: 220,
        originalPrice: 260,
        sales: 31200,
        category: '文化街区',
        location: '深圳市南山区深南大道9037号',
        description: '世界之窗汇集了全球130多处著名景点微缩景观，埃菲尔铁塔、金字塔、泰姬陵等尽收眼底，还有精彩的各国风情表演和夜间烟花秀。',
        openTime: '09:00-22:30',
        tags: ['5A景区', '微缩景观', '烟花表演'],
        comments: [
            { user: '环球旅行家', avatar: '', content: '一天游遍全世界！晚上的烟花表演太震撼了，值回票价！', rating: 5, time: '2025-01-25' }
        ]
    },
    {
        id: 120,
        name: '呼伦贝尔大草原',
        image: 'https://picsum.photos/seed/travel120/400/300',
        rating: 4.7,
        price: 0,
        originalPrice: 0,
        sales: 15600,
        category: '自然风光',
        location: '呼伦贝尔市海拉尔区',
        description: '世界著名的天然牧场，夏天一望无际的绿色草原上牛羊成群，骑马驰骋在蓝天白云下，感受蒙古族游牧文化的自由与辽阔。',
        openTime: '全天开放',
        tags: ['大草原', '骑马体验', '蒙古风情'],
        comments: [
            { user: '草原儿女', avatar: '', content: '骑马在草原上奔腾的感觉太自由了！手把肉和奶茶也超好吃！', rating: 5, time: '2024-12-18' }
        ]
    },
    // ===== 北京景点 =====
    {
        id: 122, name: '天安门广场', image: 'https://picsum.photos/seed/travel122/400/300', rating: 4.9, price: 0, originalPrice: 0, sales: 56700, category: '历史文化', location: '北京市东城区长安街',
        description: '世界上最大的城市中心广场，是中国的国家象征。广场上矗立着人民英雄纪念碑和毛主席纪念堂，每天清晨的升旗仪式庄严神圣，是每个来北京的游客必到之处。',
        openTime: '全天开放', tags: ['国家象征', '免费', '升旗仪式'], comments: [{ user: '爱国青年', avatar: '', content: '凌晨4点来看升旗仪式，国歌响起的那一刻热泪盈眶！', rating: 5, time: '2025-02-15' }]
    },
    {
        id: 123, name: '颐和园', image: 'https://picsum.photos/seed/travel123/400/300', rating: 4.8, price: 30, originalPrice: 50, sales: 31200, category: '历史文化', location: '北京市海淀区新建宫门路19号',
        description: '中国现存最大的皇家园林，以昆明湖和万寿山为基础，集中国古典园林艺术之大成。长廊彩绘精美绝伦，十七孔桥金光穿洞是冬至限定奇景。',
        openTime: '06:30-18:00', tags: ['5A景区', '世界遗产', '皇家园林'], comments: [{ user: '园林迷', avatar: '', content: '昆明湖上划船太惬意了，长廊的每一幅画都是艺术品！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 124, name: '八达岭长城', image: 'https://picsum.photos/seed/travel124/400/300', rating: 4.8, price: 40, originalPrice: 60, sales: 42300, category: '历史文化', location: '北京市延庆区八达岭镇',
        description: '万里长城最精华的段落，也是明长城中保存最完好的一段。登上好汉坡远眺群山连绵，长城如巨龙蜿蜒于崇山峻岭之间，气势磅礴令人心潮澎湃。',
        openTime: '06:30-16:30', tags: ['5A景区', '世界遗产', '不到长城非好汉'], comments: [{ user: '长城好汉', avatar: '', content: '终于当上好汉了！站在长城上望远方，太壮观了！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 125, name: '天坛公园', image: 'https://picsum.photos/seed/travel125/400/300', rating: 4.7, price: 15, originalPrice: 20, sales: 28900, category: '历史文化', location: '北京市东城区天坛内东里7号',
        description: '明清两代皇帝祭天祈谷的场所，祈年殿是中国古建筑的代表之作。回音壁和三音石的声学奇迹令人称奇，古柏林中晨练的老人是北京最真实的市井画面。',
        openTime: '06:00-21:00', tags: ['5A景区', '世界遗产', '古建奇观'], comments: [{ user: '建筑爱好者', avatar: '', content: '祈年殿太美了，不用一颗钉子建成的木结构奇迹！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 126, name: '圆明园遗址公园', image: 'https://picsum.photos/seed/travel126/400/300', rating: 4.6, price: 10, originalPrice: 15, sales: 19800, category: '历史文化', location: '北京市海淀区清华西路28号',
        description: '昔日万园之园的遗址，西洋楼废墟静静诉说着历史沧桑。夏季荷花盛开满池飘香，大水法遗址前凝望断壁残垣，感受历史的厚重与民族的记忆。',
        openTime: '07:00-19:00', tags: ['5A景区', '历史记忆', '荷花胜地'], comments: [{ user: '历史沉思者', avatar: '', content: '站在大水法遗址前心情很沉重，圆明园的美与痛都刻在这里。', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 127, name: '北海公园', image: 'https://picsum.photos/seed/travel127/400/300', rating: 4.6, price: 10, originalPrice: 15, sales: 19800, category: '自然风光', location: '北京市西城区文津街1号',
        description: '中国现存最古老的皇家园林之一，白塔耸立在琼华岛上倒映太液池中。荡起双桨的歌声从这里飘出，九龙壁精美绝伦，泛舟湖上感受老北京的悠闲时光。',
        openTime: '06:30-20:00', tags: ['皇家园林', '白塔倒影', '让我们荡起双桨'], comments: [{ user: '划船爱好者', avatar: '', content: '让我们荡起双桨的地方！在北海划船太有童年回忆了！', rating: 4, time: '2025-02-03' }]
    },
    {
        id: 128, name: '鸟巢水立方', image: 'https://picsum.photos/seed/travel128/400/300', rating: 4.5, price: 50, originalPrice: 80, sales: 23400, category: '文化街区', location: '北京市朝阳区国家体育场南路1号',
        description: '2008年北京奥运会主场馆，鸟巢的钢结构编织和梦幻蓝水立方是建筑史上的杰作。夜晚灯光亮起两座建筑交相辉映，是奥林匹克公园最亮眼的风景线。',
        openTime: '09:00-18:00', tags: ['奥运地标', '建筑奇观', '夜景璀璨'], comments: [{ user: '奥运粉丝', avatar: '', content: '鸟巢里面真的好大！站上领奖台假装自己是奥运冠军哈哈！', rating: 4, time: '2025-02-01' }]
    },
    // ===== 上海景点 =====
    {
        id: 129, name: '外滩万国建筑群', image: 'https://picsum.photos/seed/travel129/400/300', rating: 4.8, price: 0, originalPrice: 0, sales: 51200, category: '文化街区', location: '上海市黄浦区中山东一路',
        description: '上海最具标志性的景观带，52幢风格各异的万国建筑博览群与陆家嘴摩天大楼隔江相望。夜幕降临浦江两岸华灯璀璨，是感受魔都百年变迁的最佳地点。',
        openTime: '全天开放', tags: ['上海地标', '万国建筑', '免费'], comments: [{ user: '魔都漫步者', avatar: '', content: '外滩的夜景美得让人心醉！一边是百年建筑一边是摩天大楼！', rating: 5, time: '2025-02-15' }]
    },
    {
        id: 130, name: '东方明珠塔', image: 'https://picsum.photos/seed/travel130/400/300', rating: 4.5, price: 180, originalPrice: 220, sales: 38900, category: '文化街区', location: '上海市浦东新区世纪大道1号',
        description: '上海最具辨识度的地标建筑，高468米的广播电视塔。259米处的全透明悬空观光廊挑战勇气，旋转餐厅一边享用美食一边俯瞰浦江两岸风光。',
        openTime: '08:00-21:30', tags: ['上海地标', '高空观景', '透明廊道'], comments: [{ user: '高空控', avatar: '', content: '站上透明玻璃地板往下看腿都软了！夜景超美！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 131, name: '豫园', image: 'https://picsum.photos/seed/travel131/400/300', rating: 4.6, price: 30, originalPrice: 40, sales: 29800, category: '历史文化', location: '上海市黄浦区福佑路168号',
        description: '上海最著名的江南古典园林，始建于明代，假山池塘亭台楼阁精巧雅致。九曲桥上走一走湖心亭里喝杯茶，旁边的豫园商城还有各种上海小吃和手工艺品。',
        openTime: '08:30-16:30', tags: ['江南园林', '明代古园', '城隍庙商圈'], comments: [{ user: '园林鉴赏家', avatar: '', content: '闹市中的一片江南！假山层层叠叠，九曲桥走三遍好运来！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 132, name: '南京路步行街', image: 'https://picsum.photos/seed/travel132/400/300', rating: 4.4, price: 0, originalPrice: 0, sales: 45600, category: '文化街区', location: '上海市黄浦区南京东路',
        description: '中华第一商业街，从外滩到静安寺全长5.5公里。百年老店与时尚旗舰店林立，铛铛车缓缓驶过，老建筑上的霓虹灯招牌讲述着上海滩的商业传奇。',
        openTime: '全天开放', tags: ['中华第一街', '购物天堂', '免费'], comments: [{ user: '购物狂', avatar: '', content: '从外滩一路逛到人民广场，老字号新潮牌应有尽有！', rating: 4, time: '2025-02-08' }]
    },
    {
        id: 133, name: '上海迪士尼乐园', image: 'https://picsum.photos/seed/travel133/400/300', rating: 4.8, price: 399, originalPrice: 499, sales: 56700, category: '主题乐园', location: '上海市浦东新区川沙新镇',
        description: '中国大陆第一座迪士尼乐园，奇幻童话城堡是全球最高最大的迪士尼城堡。创极速光轮刺激爆表，烟花秀点亮夜空，无论大人小孩都能找到属于自己的神奇时刻。',
        openTime: '08:30-20:30', tags: ['迪士尼', '童话城堡', '烟花秀'], comments: [{ user: '迪士尼公主', avatar: '', content: '烟花秀的时候真的哭了！每个女孩都是迪士尼在逃公主！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 134, name: '田子坊', image: 'https://picsum.photos/seed/travel134/400/300', rating: 4.3, price: 0, originalPrice: 0, sales: 18900, category: '文化街区', location: '上海市黄浦区泰康路210弄',
        description: '上海最具文艺气息的弄堂街区，石库门老建筑里藏着独立设计师店、画廊、手作工坊和特色咖啡馆。穿行在迷宫般的小巷中，每个转角都可能遇见惊喜。',
        openTime: '全天开放', tags: ['石库门', '文艺弄堂', '免费'], comments: [{ user: '文艺青年', avatar: '', content: '在弄堂里迷路是逛田子坊最大的乐趣！每个小店都很有特色！', rating: 4, time: '2025-02-03' }]
    },
    {
        id: 135, name: '上海科技馆', image: 'https://picsum.photos/seed/travel135/400/300', rating: 4.6, price: 45, originalPrice: 60, sales: 23400, category: '文化街区', location: '上海市浦东新区世纪大道2000号',
        description: '上海最受欢迎的科普教育基地，地壳探秘生物万象机器人世界等展区精彩纷呈。IMAX巨幕影院和球幕影院带来震撼视觉体验，是亲子家庭寓教于乐的绝佳选择。',
        openTime: '09:00-17:15', tags: ['科普教育', '亲子游', 'IMAX'], comments: [{ user: '带娃达人', avatar: '', content: '小朋友玩到不想走！机器人跳舞和地震体验太有趣了！', rating: 5, time: '2025-02-01' }]
    },
    {
        id: 136, name: '朱家角古镇', image: 'https://picsum.photos/seed/travel136/400/300', rating: 4.4, price: 0, originalPrice: 0, sales: 15600, category: '历史文化', location: '上海市青浦区朱家角镇',
        description: '上海保存最完好的江南水乡古镇，小桥流水人家白墙黛瓦。放生桥上远眺漕港河两岸风光，北大街的扎肉和粽子飘香，坐上摇橹船穿行水巷感受时光倒流。',
        openTime: '全天开放', tags: ['江南水乡', '千年古镇', '免费'], comments: [{ user: '古镇控', avatar: '', content: '离上海市区最近的水乡，坐船穿桥洞太有感觉了，扎肉超好吃！', rating: 4, time: '2025-01-30' }]
    },
    // ===== 广州景点 =====
    {
        id: 137, name: '广州塔', image: 'https://picsum.photos/seed/travel137/400/300', rating: 4.7, price: 150, originalPrice: 198, sales: 39800, category: '文化街区', location: '广州市海珠区阅江西路222号',
        description: '广州地标建筑"小蛮腰"，600米高是中国第一高塔。450米处的摩天轮是世界最高的横向摩天轮，488米处的极速云霄让你体验云端失重的刺激。',
        openTime: '09:30-22:30', tags: ['广州地标', '世界最高摩天轮', '小蛮腰'], comments: [{ user: '高空冒险家', avatar: '', content: '在450米高空坐摩天轮太浪漫了！俯瞰整个广州夜景超美！', rating: 5, time: '2025-02-15' }]
    },
    {
        id: 138, name: '白云山', image: 'https://picsum.photos/seed/travel138/400/300', rating: 4.5, price: 5, originalPrice: 10, sales: 28900, category: '自然风光', location: '广州市白云区广园中路801号',
        description: '广州的"市肺"，南粤名山之一。登摩星岭可俯瞰广州全城，山间空气清新绿树成荫。每到周末广州市民举家登山健身，是感受广州悠闲生活的最佳去处。',
        openTime: '06:00-21:00', tags: ['羊城第一秀', '登山健身', '俯瞰广州'], comments: [{ user: '登山爱好者', avatar: '', content: '周末爬白云山是广州人的必修课！登顶看广州全景太舒服了！', rating: 4, time: '2025-02-12' }]
    },
    {
        id: 139, name: '沙面岛', image: 'https://picsum.photos/seed/travel139/400/300', rating: 4.6, price: 0, originalPrice: 0, sales: 19800, category: '历史文化', location: '广州市荔湾区沙面大街',
        description: '广州最具欧陆风情的岛屿，曾是英法租界留下150多座欧式建筑。古树参天绿荫如盖，百年教堂和领事馆建筑群充满异国情调，是广州最文艺的拍照圣地。',
        openTime: '全天开放', tags: ['欧陆风情', '文艺拍照', '免费'], comments: [{ user: '摄影达人', avatar: '', content: '沙面随便一拍都是大片！欧式建筑配古树，假装在欧洲！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 140, name: '陈家祠', image: 'https://picsum.photos/seed/travel140/400/300', rating: 4.7, price: 10, originalPrice: 15, sales: 18900, category: '历史文化', location: '广州市荔湾区中山七路恩龙里34号',
        description: '广东现存最完整规模最大的岭南祠堂式建筑，砖雕木雕石雕陶塑铁铸等装饰技艺精湛绝伦。郭沫若曾赞叹"天工人可代人工天不如，果然造世界胜读十年书"。',
        openTime: '08:30-17:30', tags: ['岭南建筑', '雕刻艺术', '民间故宫'], comments: [{ user: '建筑迷', avatar: '', content: '每一处雕刻都精美到让人惊叹！岭南建筑艺术的巅峰之作！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 141, name: '越秀公园', image: 'https://picsum.photos/seed/travel141/400/300', rating: 4.4, price: 0, originalPrice: 0, sales: 23400, category: '自然风光', location: '广州市越秀区解放北路988号',
        description: '广州最大的综合性公园，五羊石像是广州的城市标志。镇海楼有六百年历史现为广州博物馆，四方炮台遗址诉说鸦片战争往事，中山纪念碑高耸入云。',
        openTime: '06:00-22:00', tags: ['五羊石像', '广州标志', '免费'], comments: [{ user: '老广', avatar: '', content: '五羊石像是广州的象征！小时候每年都要来跟五羊合影！', rating: 4, time: '2025-02-05' }]
    },
    {
        id: 142, name: '中山纪念堂', image: 'https://picsum.photos/seed/travel142/400/300', rating: 4.6, price: 10, originalPrice: 15, sales: 15600, category: '历史文化', location: '广州市越秀区东风中路299号',
        description: '为纪念孙中山先生而建，八角形宫殿式建筑宏伟壮观，内部没有一根柱子遮挡视线。堂前孙中山铜像巍然屹立，是广州近代革命历史的重要纪念地。',
        openTime: '08:00-18:00', tags: ['中山纪念', '宫殿建筑', '革命圣地'], comments: [{ user: '历史爱好者', avatar: '', content: '内部没有柱子的设计太巧妙了！气势恢宏又庄严！', rating: 4, time: '2025-02-03' }]
    },
    {
        id: 143, name: '黄埔军校旧址', image: 'https://picsum.photos/seed/travel143/400/300', rating: 4.5, price: 0, originalPrice: 0, sales: 12300, category: '历史文化', location: '广州市黄埔区长洲岛军校路170号',
        description: '孙中山先生创办的中国近代史上最著名的军事学校，国共两党诸多名将毕业于此。校舍简朴却承载着厚重的革命历史，"升官发财请往他处贪生怕死勿入斯门"的对联激励后人。',
        openTime: '09:00-17:00', tags: ['近代军校', '革命历史', '免费'], comments: [{ user: '军迷', avatar: '', content: '黄埔军校影响中国近代史的将帅摇篮，校门对联让人热血沸腾！', rating: 5, time: '2025-02-01' }]
    },
    {
        id: 144, name: '广州动物园', image: 'https://picsum.photos/seed/travel144/400/300', rating: 4.3, price: 20, originalPrice: 30, sales: 23400, category: '自然风光', location: '广州市越秀区先烈中路120号',
        description: '广州历史最悠久的动物园，大熊猫馆和长颈鹿馆最受欢迎。园内绿树成荫环境优美，还有海洋馆和海豚表演，是广州市民周末亲子游的首选目的地。',
        openTime: '08:00-18:00', tags: ['亲子游', '大熊猫', '海洋馆'], comments: [{ user: '亲子达人', avatar: '', content: '20块钱就能看大熊猫太值了！小朋友看动物看了一天不想走！', rating: 4, time: '2025-01-30' }]
    },
    // ===== 深圳景点 =====
    {
        id: 145, name: '欢乐谷', image: 'https://picsum.photos/seed/travel145/400/300', rating: 4.6, price: 230, originalPrice: 280, sales: 34500, category: '主题乐园', location: '深圳市南山区侨城西街18号',
        description: '深圳最受欢迎的主题乐园，拥有亚洲首座弹射式过山车雪域雄鹰和玛雅水公园。九大主题区各有特色，万圣节和狂欢节活动精彩纷呈，是深圳年轻人最爱的游乐天堂。',
        openTime: '09:30-21:00', tags: ['主题乐园', '过山车', '水公园'], comments: [{ user: '过山车迷', avatar: '', content: '雪域雄鹰弹射起步太刺激了！在空中飞一样的感觉！', rating: 5, time: '2025-02-15' }]
    },
    {
        id: 146, name: '深圳湾公园', image: 'https://picsum.photos/seed/travel146/400/300', rating: 4.5, price: 0, originalPrice: 0, sales: 28700, category: '自然风光', location: '深圳市南山区深圳湾畔',
        description: '深圳最美的海滨公园，15公里海滨绿道连接福田红树林到南山蛇口。傍晚时分骑行或漫步在滨海栈道上，对面香港元朗的群山清晰可见，夕阳海风红树林候鸟如诗如画。',
        openTime: '全天开放', tags: ['海滨公园', '免费', '骑行胜地'], comments: [{ user: '骑行达人', avatar: '', content: '沿着海边骑行太舒服了！傍晚的日落美得不像话！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 147, name: '大梅沙海滨公园', image: 'https://picsum.photos/seed/travel147/400/300', rating: 4.3, price: 0, originalPrice: 0, sales: 36700, category: '自然风光', location: '深圳市盐田区盐葵路',
        description: '深圳最热门的免费海滩，金色沙滩绵延1800米。夏天沙滩上五彩缤纷的遮阳伞如朵朵鲜花绽放，踏浪戏水堆沙堡晒太阳，是深圳人周末亲海的首选。',
        openTime: '全天开放', tags: ['免费海滩', '夏日胜地', '踏浪戏水'], comments: [{ user: '海滩控', avatar: '', content: '深圳人的后花园！夏天来这里泡海水太舒服了，还免费！', rating: 4, time: '2025-02-10' }]
    },
    {
        id: 148, name: '莲花山公园', image: 'https://picsum.photos/seed/travel148/400/300', rating: 4.4, price: 0, originalPrice: 0, sales: 19800, category: '自然风光', location: '深圳市福田区红荔路6030号',
        description: '深圳市中心最大的公园，山顶广场矗立着邓小平铜像俯瞰深圳中轴线。春天簕杜鹃盛开满山嫣红，风筝广场上孩子们奔跑嬉戏，是深圳市民休闲散步的好去处。',
        openTime: '06:00-22:30', tags: ['市中心公园', '邓小平铜像', '免费'], comments: [{ user: '深圳人', avatar: '', content: '登顶看邓小平铜像和深圳中轴线，感受这座城市的成长奇迹！', rating: 4, time: '2025-02-08' }]
    },
    {
        id: 149, name: '仙湖植物园', image: 'https://picsum.photos/seed/travel149/400/300', rating: 4.5, price: 15, originalPrice: 20, sales: 15600, category: '自然风光', location: '深圳市罗湖区仙湖路160号',
        description: '深圳最美植物园，弘法寺坐落园中香火鼎盛。化石森林和沙漠植物区充满异域风情，湖区仙湖碧波荡漾群山环抱，是闹市中难得的一片静谧自然天地。',
        openTime: '08:00-18:00', tags: ['植物园', '弘法寺', '化石森林'], comments: [{ user: '自然控', avatar: '', content: '弘法寺烧香拜佛后再逛逛植物园，身心都得到净化！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 150, name: '甘坑客家小镇', image: 'https://picsum.photos/seed/travel150/400/300', rating: 4.2, price: 0, originalPrice: 0, sales: 8900, category: '历史文化', location: '深圳市龙岗区吉华街道甘李路18号',
        description: '深圳隐藏的世外桃源，保留完好的客家围屋和碉楼讲述着深圳的客家历史。青石板路蜿蜒在古朴的民居间，客家擂茶和酿豆腐飘香，是了解深圳本土文化的好地方。',
        openTime: '全天开放', tags: ['客家文化', '古镇风情', '免费'], comments: [{ user: '文化探索者', avatar: '', content: '没想到深圳还有这么古朴的客家村落！擂茶很好喝！', rating: 4, time: '2025-02-03' }]
    },
    {
        id: 151, name: '大鹏所城', image: 'https://picsum.photos/seed/travel151/400/300', rating: 4.4, price: 0, originalPrice: 0, sales: 12300, category: '历史文化', location: '深圳市大鹏新区鹏飞路',
        description: '深圳别称鹏城的由来，明代抗击倭寇的海防古城。城门城墙保存完好，石板路和古民居诉说着六百年的沧桑。逛完古城步行可达较场尾海滩，看海发呆享用海鲜大餐。',
        openTime: '全天开放', tags: ['明代古城', '海防遗址', '免费'], comments: [{ user: '古城探访者', avatar: '', content: '深圳最值得逛的古城！石板路古民居很有味道，旁边就是海！', rating: 5, time: '2025-02-01' }]
    },
    // ===== 成都景点 =====
    {
        id: 152, name: '宽窄巷子', image: 'https://picsum.photos/seed/travel152/400/300', rating: 4.6, price: 0, originalPrice: 0, sales: 42300, category: '文化街区', location: '成都市青羊区长顺上街127号',
        description: '成都最具代表性的历史文化街区，由宽巷子窄巷子和井巷子三条清代古街组成。青砖黛瓦的四合院里有茶馆川剧变脸小吃和文创店，是体验成都慢生活的最佳去处。',
        openTime: '全天开放', tags: ['成都名片', '清代古街', '免费'], comments: [{ user: '慢生活家', avatar: '', content: '在宽窄巷子喝盖碗茶看变脸，成都的慢生活太舒服了！', rating: 5, time: '2025-02-15' }]
    },
    {
        id: 153, name: '锦里古街', image: 'https://picsum.photos/seed/travel153/400/300', rating: 4.5, price: 0, originalPrice: 0, sales: 38700, category: '文化街区', location: '成都市武侯区武侯祠大街231号',
        description: '西蜀历史上最古老的商业街，三国文化主题古街。夜晚红灯笼亮起古街如梦如幻，三大炮张飞牛肉糖画等传统小吃让人目不暇接，捏面人和剪纸等民间手艺精彩纷呈。',
        openTime: '全天开放', tags: ['三国文化', '古街夜韵', '免费'], comments: [{ user: '吃货一枚', avatar: '', content: '晚上的锦里太美了！红灯笼下吃三大炮看变脸，巴适得板！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 154, name: '武侯祠', image: 'https://picsum.photos/seed/travel154/400/300', rating: 4.5, price: 50, originalPrice: 60, sales: 28900, category: '历史文化', location: '成都市武侯区武侯祠大街231号',
        description: '中国唯一君臣合祀的祠庙，纪念三国蜀汉丞相诸葛亮。祠内古柏参天碑刻林立，岳飞手书出师表刻石令人热血澎湃。红墙夹道翠竹掩映是成都最美拍照地之一。',
        openTime: '08:00-18:00', tags: ['三国圣地', '诸葛亮', '红墙竹影'], comments: [{ user: '三国迷', avatar: '', content: '出师表看着看着就感动了！红墙竹影拍照超出片！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 155, name: '大熊猫繁育研究基地', image: 'https://picsum.photos/seed/travel155/400/300', rating: 4.9, price: 55, originalPrice: 70, sales: 56700, category: '自然风光', location: '成都市成华区熊猫大道1375号',
        description: '全球最大的大熊猫圈养繁殖基地，上百只软萌大熊猫在这里无忧无虑地吃竹子爬树打滚。最萌的当属婴儿产房里粉嘟嘟的熊猫宝宝，看一只大熊猫吃竹子都能看一整天。',
        openTime: '07:30-18:00', tags: ['国宝熊猫', '超级萌', '必去'], comments: [{ user: '熊猫爱好者', avatar: '', content: '熊猫宝宝太可爱了！圆滚滚的吃竹子真的能看一整天！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 156, name: '青羊宫', image: 'https://picsum.photos/seed/travel156/400/300', rating: 4.2, price: 10, originalPrice: 15, sales: 12300, category: '历史文化', location: '成都市青羊区一环路西二段9号',
        description: '川西第一道观，也是全国著名的道教圣地。宫内两只铜羊是镇宫之宝，传说摸了能祛病消灾。八卦亭和三清殿古色古香香火旺盛，银杏叶黄时更是美不胜收。',
        openTime: '08:00-17:00', tags: ['道教圣地', '川西第一', '古银杏'], comments: [{ user: '问道青羊', avatar: '', content: '闹市中的一片清净地，秋天银杏金黄配红墙太美了！', rating: 4, time: '2025-02-05' }]
    },
    {
        id: 157, name: '杜甫草堂', image: 'https://picsum.photos/seed/travel157/400/300', rating: 4.4, price: 50, originalPrice: 60, sales: 18900, category: '历史文化', location: '成都市青羊区青华路37号',
        description: '诗圣杜甫流寓成都时的故居，一座清幽雅致的文人园林。茅屋故居让人想起"安得广厦千万间"的千古名句，大廨堂内杜甫铜像栩栩如生，诗史堂陈列着历代杜诗版本。',
        openTime: '08:00-18:00', tags: ['诗圣故居', '文人园林', '唐诗圣地'], comments: [{ user: '诗词爱好者', avatar: '', content: '站在茅屋前想起杜甫的诗句，诗圣真是心怀天下！', rating: 4, time: '2025-02-03' }]
    },
    {
        id: 158, name: '青城山', image: 'https://picsum.photos/seed/travel158/400/300', rating: 4.7, price: 80, originalPrice: 100, sales: 23400, category: '自然风光', location: '成都市都江堰市青城山镇',
        description: '道教发源地之一，以"青城天下幽"闻名于世。前山道教宫观林立古木参天，后山瀑布飞泉清幽无比。满山翠绿云雾缭绕，行走其间如入仙境心旷神怡。',
        openTime: '08:00-17:00', tags: ['道教名山', '青城天下幽', '世界遗产'], comments: [{ user: '山林隐士', avatar: '', content: '青城天下幽名不虚传！山林中静得能听到自己的脚步声！', rating: 5, time: '2025-02-01' }]
    },
    // ===== 杭州景点 =====
    {
        id: 159, name: '灵隐寺', image: 'https://picsum.photos/seed/travel159/400/300', rating: 4.8, price: 75, originalPrice: 95, sales: 39800, category: '历史文化', location: '杭州市西湖区法云弄1号',
        description: '中国最著名的佛教寺院之一，始建于东晋已有1700年历史。飞来峰石刻造像精美绝伦，大雄宝殿宏伟庄严香火鼎盛，济公活佛的故事更为这里增添了传奇色彩。',
        openTime: '07:00-18:00', tags: ['千年古刹', '飞来峰', '济公'], comments: [{ user: '佛系旅行', avatar: '', content: '灵隐寺香火真旺！飞来峰的石刻造像太精美了，千年古刹名不虚传！', rating: 5, time: '2025-02-15' }]
    },
    {
        id: 160, name: '雷峰塔', image: 'https://picsum.photos/seed/travel160/400/300', rating: 4.5, price: 40, originalPrice: 55, sales: 29800, category: '历史文化', location: '杭州市西湖区南山路15号',
        description: '因白娘子传说而闻名天下的西湖名塔，原塔倒塌后重建的新塔保留了遗址展示区。登塔远眺西湖全景尽收眼底，苏堤春晓三潭印月尽在眼前，夕阳下雷峰塔影最为动人。',
        openTime: '08:00-20:00', tags: ['白蛇传说', '西湖全景', '雷峰夕照'], comments: [{ user: '白蛇迷', avatar: '', content: '登塔看西湖全景太壮观了！白娘子的故事让这里充满了浪漫！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 161, name: '千岛湖', image: 'https://picsum.photos/seed/travel161/400/300', rating: 4.7, price: 130, originalPrice: 170, sales: 26700, category: '自然风光', location: '杭州市淳安县千岛湖镇',
        description: '拥有1078座岛屿的人工奇迹，湖水清澈如镜群岛星罗棋布。乘船穿梭于翡翠般的岛屿之间，登上梅峰观岛俯瞰千岛星罗棋布的壮丽全景，呼吸着纯净的森林氧气。',
        openTime: '08:00-17:00', tags: ['5A景区', '千岛星罗', '纯净湖水'], comments: [{ user: '自然控', avatar: '', content: '一千多个岛屿像翡翠一样镶嵌在湖中，太震撼了！湖水超清！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 162, name: '西溪湿地', image: 'https://picsum.photos/seed/travel162/400/300', rating: 4.4, price: 80, originalPrice: 100, sales: 19800, category: '自然风光', location: '杭州市西湖区天目山路518号',
        description: '中国首个国家湿地公园，城市中难得的一片生态净土。乘摇橹船穿行在芦苇荡和柿林间，白鹭翩翩水鸟成群，秋天的芦花飞雪和火柿映波是最美的季节画卷。',
        openTime: '07:30-18:00', tags: ['湿地公园', '摇橹船', '生态天堂'], comments: [{ user: '自然派', avatar: '', content: '坐摇橹船在芦苇荡里穿行太有诗意了！秋天火柿红了一片！', rating: 4, time: '2025-02-08' }]
    },
    {
        id: 163, name: '六和塔', image: 'https://picsum.photos/seed/travel163/400/300', rating: 4.3, price: 20, originalPrice: 30, sales: 12300, category: '历史文化', location: '杭州市西湖区之江路16号',
        description: '钱塘江畔的千年古塔，始建于北宋为镇钱塘江潮而建。登塔远眺钱塘江大桥如长虹卧波，每年农历八月十八大潮来时这里是最佳观潮点，怒潮滚滚气势磅礴。',
        openTime: '06:30-17:30', tags: ['千年古塔', '钱塘江', '观潮胜地'], comments: [{ user: '观潮客', avatar: '', content: '八月十八来看潮！从塔上俯瞰钱塘江大潮太壮观了！', rating: 4, time: '2025-02-05' }]
    },
    {
        id: 164, name: '九溪十八涧', image: 'https://picsum.photos/seed/travel164/400/300', rating: 4.6, price: 0, originalPrice: 0, sales: 15600, category: '自然风光', location: '杭州市西湖区九溪烟树',
        description: '西湖边最美的徒步路线，山间溪水潺潺汇成九条溪流和十八条涧水。春夏之交流水潺潺绿荫如盖，秋天红枫似火层林尽染，徒步其间每一步都是风景画。',
        openTime: '全天开放', tags: ['免费', '徒步天堂', '秋色如画'], comments: [{ user: '徒步达人', avatar: '', content: '秋天来九溪太美了！红枫倒映溪水中，每走一步都是美景！', rating: 5, time: '2025-02-03' }]
    },
    {
        id: 165, name: '清河坊街', image: 'https://picsum.photos/seed/travel165/400/300', rating: 4.3, price: 0, originalPrice: 0, sales: 23400, category: '文化街区', location: '杭州市上城区河坊街',
        description: '杭州最具市井气息的历史街区，百年老字号和特色小店林立。胡庆余堂国药号讲述中医传奇，张小泉剪刀王星记扇子尽显匠人精神，定胜糕葱包烩飘香整条古街。',
        openTime: '全天开放', tags: ['历史古街', '百年老号', '免费'], comments: [{ user: '逛吃达人', avatar: '', content: '胡庆余堂看看中医，河坊街吃吃定胜糕，杭州的市井味道！', rating: 4, time: '2025-02-01' }]
    },
    // ===== 西安景点 =====
    {
        id: 166, name: '西安城墙', image: 'https://picsum.photos/seed/travel166/400/300', rating: 4.7, price: 54, originalPrice: 70, sales: 34500, category: '历史文化', location: '西安市碑林区南大街2号',
        description: '中国现存规模最大保存最完整的古代城墙，全长13.74公里。租一辆自行车在城墙上骑一圈，俯瞰古城内外古今交融的独特风貌，傍晚时分城墙落日美得令人心醉。',
        openTime: '08:00-22:00', tags: ['5A景区', '古城墙', '骑行'], comments: [{ user: '骑行侠', avatar: '', content: '在600年的城墙上骑行太酷了！俯瞰古城内外的风景！', rating: 5, time: '2025-02-15' }]
    },
    {
        id: 167, name: '钟鼓楼', image: 'https://picsum.photos/seed/travel167/400/300', rating: 4.5, price: 30, originalPrice: 50, sales: 26700, category: '历史文化', location: '西安市碑林区东西南北大街交汇处',
        description: '西安城中心的地标建筑，钟楼与鼓楼晨钟暮鼓相呼应已有六百余年。登楼俯瞰四条大街呈对称放射状延伸，编钟表演和鼓乐演奏展示着古都长安的礼乐文化。',
        openTime: '08:30-21:00', tags: ['西安中心', '晨钟暮鼓', '编钟表演'], comments: [{ user: '古都迷', avatar: '', content: '站在钟楼上望四方大街，感受古都中轴线的气魄！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 168, name: '华清宫', image: 'https://picsum.photos/seed/travel168/400/300', rating: 4.6, price: 120, originalPrice: 150, sales: 31200, category: '历史文化', location: '西安市临潼区华清路38号',
        description: '唐玄宗与杨贵妃的爱情故事发生地，骊山脚下的皇家温泉行宫。海棠汤莲花汤等温泉池遗址再现盛唐沐浴文化，晚上长恨歌实景演出华美震撼，再现那段千古绝恋。',
        openTime: '07:00-19:00', tags: ['5A景区', '唐宫温泉', '长恨歌'], comments: [{ user: '唐风爱好者', avatar: '', content: '长恨歌演出太震撼了！在骊山实景中看唐玄宗和杨贵妃的故事！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 169, name: '大雁塔北广场', image: 'https://picsum.photos/seed/travel169/400/300', rating: 4.6, price: 0, originalPrice: 0, sales: 45600, category: '文化街区', location: '西安市雁塔区慈恩路',
        description: '亚洲最大的音乐喷泉广场，以大慈恩寺和大雁塔为背景。每晚大型音乐喷泉表演水柱随着旋律翩翩起舞，大雁塔金光璀璨倒映在水中，是西安最浪漫的夜晚打卡地。',
        openTime: '全天开放', tags: ['音乐喷泉', '大雁塔', '免费'], comments: [{ user: '夜游神', avatar: '', content: '晚上的音乐喷泉配上古色古香的大雁塔背景太震撼了！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 170, name: '小雁塔', image: 'https://picsum.photos/seed/travel170/400/300', rating: 4.4, price: 0, originalPrice: 0, sales: 14500, category: '历史文化', location: '西安市碑林区友谊西路76号',
        description: '唐代密檐式砖塔的典范之作，与大雁塔并称长安双塔。因三次地震开裂又三次神合而闻名古今，旁边西安博物院里收藏着无数长安瑰宝，古塔晨钟是关中八景之一。',
        openTime: '09:00-17:00', tags: ['唐代古塔', '三裂三合', '免费'], comments: [{ user: '古塔爱好者', avatar: '', content: '小雁塔比大雁塔更安静古朴，三裂三合的故事太神奇了！', rating: 4, time: '2025-02-05' }]
    },
    {
        id: 171, name: '陕西历史博物馆', image: 'https://picsum.photos/seed/travel171/400/300', rating: 4.8, price: 0, originalPrice: 0, sales: 34500, category: '历史文化', location: '西安市雁塔区小寨东路91号',
        description: '中国第一座大型现代化国家级博物馆，馆藏171万件文物时间跨度达百万年。商周青铜器汉唐金银器和唐墓壁画为三大镇馆之宝，一件件国宝讲述着十三朝古都的辉煌历史。',
        openTime: '08:30-18:00', tags: ['国家级博物馆', '171万件文物', '免费'], comments: [{ user: '博物馆控', avatar: '', content: '陕博的文物太丰富了！逛一天都逛不完，件件都是国宝！', rating: 5, time: '2025-02-03' }]
    },
    // ===== 重庆景点 =====
    {
        id: 172, name: '洪崖洞', image: 'https://picsum.photos/seed/travel172/400/300', rating: 4.7, price: 0, originalPrice: 0, sales: 45600, category: '文化街区', location: '重庆市渝中区嘉陵江滨江路88号',
        description: '重庆最具代表性的地标景观，依山而建的巴渝传统吊脚楼群。夜晚灯光亮起金黄璀璨如千与千寻中的奇幻世界，站在观景平台上俯瞰嘉陵江和千厮门大桥美轮美奂。',
        openTime: '全天开放', tags: ['重庆名片', '千与千寻', '免费'], comments: [{ user: '二次元粉', avatar: '', content: '简直就是现实版千与千寻！晚上灯光亮起太梦幻了！', rating: 5, time: '2025-02-15' }]
    },
    {
        id: 173, name: '磁器口古镇', image: 'https://picsum.photos/seed/travel173/400/300', rating: 4.4, price: 0, originalPrice: 0, sales: 29800, category: '历史文化', location: '重庆市沙坪坝区磁器口镇',
        description: '重庆千年古镇，曾经是嘉陵江畔最繁忙的水陆码头。青石板路蜿蜒在明清风格的民居之间，陈麻花门前永远排着长队，毛血旺和鸡杂的麻辣鲜香飘满整条古镇小巷。',
        openTime: '全天开放', tags: ['千年古镇', '码头文化', '免费'], comments: [{ user: '古镇爱好者', avatar: '', content: '一路走一路吃！陈麻花排了半天队但真的值得！', rating: 4, time: '2025-02-12' }]
    },
    {
        id: 174, name: '武隆天生三桥', image: 'https://picsum.photos/seed/travel174/400/300', rating: 4.8, price: 135, originalPrice: 180, sales: 23400, category: '自然风光', location: '重庆市武隆区仙女山镇',
        description: '世界自然遗产天生三桥，三座天然石桥横跨峡谷气势磅礴。天龙桥下有电影变3取景地天福官驿，站在桥下仰望大自然的鬼斧神工，才知人类的渺小与自然的伟大。',
        openTime: '08:00-17:00', tags: ['世界遗产', '变3取景', '自然奇观'], comments: [{ user: '自然奇观迷', avatar: '', content: '天然形成的石桥太震撼了！在桥下才知道大自然有多伟大！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 175, name: '长江索道', image: 'https://picsum.photos/seed/travel175/400/300', rating: 4.5, price: 20, originalPrice: 30, sales: 34500, category: '文化街区', location: '重庆市渝中区新华路151号',
        description: '重庆人的"空中公交车"，运行三十余年横跨长江两岸。轿厢在空中缓缓滑过，脚下长江水滚滚东流，两岸山城建筑层层叠叠，是感受重庆立体城市魅力的最佳方式。',
        openTime: '07:30-22:00', tags: ['空中公交', '长江飞渡', '山城特色'], comments: [{ user: '飞渡长江', avatar: '', content: '在空中看长江和山城太酷了！重庆不愧是8D魔幻城市！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 176, name: '南山一棵树', image: 'https://picsum.photos/seed/travel176/400/300', rating: 4.6, price: 30, originalPrice: 40, sales: 18900, category: '自然风光', location: '重庆市南岸区南山公园路101号',
        description: '观赏重庆夜景的最佳位置，站在观景台上渝中半岛尽收眼底。夜幕降临万家灯火在长江和嘉陵江的怀抱中璀璨如星河，重庆百万夜景美誉在此一览无余。',
        openTime: '09:00-22:30', tags: ['重庆夜景', '百万夜景', '观景台'], comments: [{ user: '夜景控', avatar: '', content: '重庆夜景真的名不虚传！两江交汇处灯火辉煌太壮观了！', rating: 5, time: '2025-02-05' }]
    },
    {
        id: 177, name: '大足石刻', image: 'https://picsum.photos/seed/travel177/400/300', rating: 4.7, price: 135, originalPrice: 170, sales: 16700, category: '历史文化', location: '重庆市大足区宝顶镇',
        description: '世界文化遗产，中国晚期石窟艺术的杰出代表。五万余尊造像雕刻在悬崖峭壁之上，千手观音金光灿灿华严三圣庄严慈悲，地狱变相图警示世人，是石刻艺术的巅峰之作。',
        openTime: '08:30-18:00', tags: ['世界遗产', '石窟艺术', '千手观音'], comments: [{ user: '石窟爱好者', avatar: '', content: '千手观音金碧辉煌太精美了！古人的雕刻技艺叹为观止！', rating: 5, time: '2025-02-03' }]
    },
    {
        id: 178, name: '酉阳桃花源', image: 'https://picsum.photos/seed/travel178/400/300', rating: 4.3, price: 100, originalPrice: 128, sales: 12300, category: '自然风光', location: '重庆市酉阳土家族苗族自治县',
        description: '陶渊明桃花源记原型地，穿过"初极狭才通人"的天然溶洞，豁然开朗看到良田美池桑竹之属。古民居田园风光土家风情完美融合，仿佛穿越千年走进了桃花源记的世界。',
        openTime: '08:00-17:30', tags: ['5A景区', '桃花源记', '土家风情'], comments: [{ user: '桃源客', avatar: '', content: '穿过溶洞看到眼前景色真的豁然开朗！桃花源记里的场景！', rating: 4, time: '2025-02-01' }]
    },
    {
        id: 179, name: '奉节白帝城', image: 'https://picsum.photos/seed/travel179/400/300', rating: 4.5, price: 80, originalPrice: 100, sales: 9800, category: '历史文化', location: '重庆市奉节县白帝镇',
        description: '刘备托孤的历史发生地，坐落在长江三峡入口夔门之上。登白帝庙远眺夔门天下雄的壮丽景色，十元纸币背面图案就在眼前，朝辞白帝彩云间的绝唱让这里名垂千古。',
        openTime: '08:00-17:00', tags: ['三峡入口', '刘备托孤', '十元背景'], comments: [{ user: '三国迷2', avatar: '', content: '站在白帝城看夔门就是十元纸币的图案！历史与风景同在！', rating: 5, time: '2025-01-30' }]
    },
    // ===== 南京景点 =====
    {
        id: 180, name: '中山陵', image: 'https://picsum.photos/seed/travel180/400/300', rating: 4.8, price: 0, originalPrice: 0, sales: 45600, category: '历史文化', location: '南京市玄武区中山陵园风景区',
        description: '国父孙中山先生的陵寝，392级台阶象征当时三亿九千二百万同胞。从博爱坊到祭堂步步登高庄严肃穆，蓝色琉璃瓦覆顶俯瞰钟山苍翠，是每个中国人一生必去的精神圣地。',
        openTime: '08:30-17:00', tags: ['5A景区', '国父陵寝', '免费'], comments: [{ user: '爱国者', avatar: '', content: '登上392级台阶回望钟山苍翠，对国父的敬意油然而生！', rating: 5, time: '2025-02-15' }]
    },
    {
        id: 181, name: '明孝陵', image: 'https://picsum.photos/seed/travel181/400/300', rating: 4.7, price: 70, originalPrice: 90, sales: 23400, category: '历史文化', location: '南京市玄武区紫金山南麓',
        description: '明太祖朱元璋与马皇后的合葬陵墓，明清皇家陵寝的开山之作。神道两旁石像生庄严肃穆，秋天石像路上的红叶黄金叶美成梦幻仙境，是中国帝王陵寝建筑的杰出代表。',
        openTime: '06:30-18:00', tags: ['世界遗产', '明陵之首', '石像路秋色'], comments: [{ user: '历史迷2', avatar: '', content: '秋天的石像路美到窒息！红叶石像和金色落叶太配了！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 182, name: '夫子庙秦淮河', image: 'https://picsum.photos/seed/travel182/400/300', rating: 4.5, price: 0, originalPrice: 0, sales: 51200, category: '文化街区', location: '南京市秦淮区夫子庙',
        description: '南京最具历史文化底蕴的景区，十里秦淮灯火甲天下。夜晚乘画舫夜游秦淮河，两岸古建筑灯火辉煌浆声灯影好不浪漫，夫子庙小吃街上鸭血粉丝汤和金陵汤包飘香。',
        openTime: '全天开放', tags: ['5A景区', '十里秦淮', '免费'], comments: [{ user: '秦淮夜泊', avatar: '', content: '夜泊秦淮近酒家！坐上画舫看两岸灯火太浪漫了！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 183, name: '南京博物院', image: 'https://picsum.photos/seed/travel183/400/300', rating: 4.7, price: 0, originalPrice: 0, sales: 18900, category: '历史文化', location: '南京市玄武区中山东路321号',
        description: '中国三大博物馆之一，前身是国立中央博物院。馆藏43万件精品文物涵盖古今，民国馆还原了老南京街景最有特色，数字馆用现代科技让文物活起来，是了解中华文明的绝佳窗口。',
        openTime: '09:00-17:00', tags: ['中国三大', '43万藏品', '免费'], comments: [{ user: '文博达人', avatar: '', content: '民国馆太有意思了！走进去像穿越回了老南京！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 184, name: '总统府', image: 'https://picsum.photos/seed/travel184/400/300', rating: 4.4, price: 40, originalPrice: 55, sales: 23400, category: '历史文化', location: '南京市玄武区长江路292号',
        description: '中国近代历史的重要见证地，从两江总督署到太平天国天王府再到民国总统府。中西合璧的建筑风格独特，子超楼前驻足仿佛看到了那段风云激荡的历史岁月。',
        openTime: '08:30-17:00', tags: ['近代历史', '总统府', '民国记忆'], comments: [{ user: '民国历史迷', avatar: '', content: '一座总统府半部近代史！走在里面感受到厚重的历史感！', rating: 4, time: '2025-02-05' }]
    },
    {
        id: 185, name: '玄武湖', image: 'https://picsum.photos/seed/travel185/400/300', rating: 4.4, price: 0, originalPrice: 0, sales: 26700, category: '自然风光', location: '南京市玄武区玄武巷1号',
        description: '南京最大的城市公园，中国最大的皇家园林湖泊。春日樱洲樱花如云盛夏荷花满池飘香，秋日梁洲银杏金黄初冬菱洲候鸟翔集，南京火车站前湖光山色是南京最美迎宾画卷。',
        openTime: '06:00-21:00', tags: ['皇家湖泊', '四季皆美', '免费'], comments: [{ user: '南京人', avatar: '', content: '春天玄武湖樱花美爆了！湖边散步吹风太舒服了！', rating: 4, time: '2025-02-03' }]
    },
    {
        id: 186, name: '鸡鸣寺', image: 'https://picsum.photos/seed/travel186/400/300', rating: 4.5, price: 10, originalPrice: 15, sales: 19800, category: '历史文化', location: '南京市玄武区鸡鸣寺路1号',
        description: '南朝四百八十寺之首，南京最古老的寺院已有1700年历史。春季寺前樱花大道如粉色云霞与古寺黄墙交相辉映，登上药师佛塔可远眺台城和玄武湖的湖光山色。',
        openTime: '07:30-17:00', tags: ['南朝首刹', '樱花大道', '台城远眺'], comments: [{ user: '樱花控', avatar: '', content: '春天鸡鸣寺的樱花太美了！粉色的樱花配上古寺黄墙绝美！', rating: 5, time: '2025-02-01' }]
    },
    {
        id: 187, name: '栖霞山', image: 'https://picsum.photos/seed/travel187/400/300', rating: 4.5, price: 40, originalPrice: 50, sales: 14500, category: '自然风光', location: '南京市栖霞区栖霞街88号',
        description: '金陵第一名秀山，中国四大赏枫胜地之一。深秋时节满山红枫似火层林尽染，栖霞古寺钟声悠悠，千佛岩石窟群是南朝佛教艺术的瑰宝，秋栖霞的美景被称为金陵绝色。',
        openTime: '07:00-17:00', tags: ['赏枫胜地', '栖霞古寺', '千佛岩'], comments: [{ user: '赏枫达人', avatar: '', content: '秋天的栖霞山满山红叶太壮观了！中国最美赏枫地！', rating: 5, time: '2025-01-30' }]
    },
    // ===== 武汉景点 =====
    {
        id: 188, name: '黄鹤楼', image: 'https://picsum.photos/seed/travel188/400/300', rating: 4.6, price: 70, originalPrice: 90, sales: 37800, category: '历史文化', location: '武汉市武昌区蛇山西山坡特1号',
        description: '天下江山第一楼，始建于三国时期距今1700多年。登楼远眺长江大桥如虹飞架龟山电视台与之对望，晴川阁在汉阳静静相守，崔颢与李白的千古绝唱让此楼名垂青史。',
        openTime: '08:00-18:00', tags: ['5A景区', '天下江山第一楼', '诗词名楼'], comments: [{ user: '诗词旅人', avatar: '', content: '登黄鹤楼看长江滚滚，终于懂了昔人已乘黄鹤去的感觉！', rating: 5, time: '2025-02-15' }]
    },
    {
        id: 189, name: '东湖风景区', image: 'https://picsum.photos/seed/travel189/400/300', rating: 4.7, price: 0, originalPrice: 0, sales: 34500, category: '自然风光', location: '武汉市武昌区东湖路特1号',
        description: '中国最大的城中湖，面积是杭州西湖的六倍。听涛磨山落雁吹笛四大景区各具特色，春天磨山樱园万株樱花如云似霞，夏日在凌波门栈道上演武汉人的花式跳湖纳凉。',
        openTime: '全天开放', tags: ['5A景区', '最大城中湖', '免费'], comments: [{ user: '凌波门少年', avatar: '', content: '东湖太大了！樱花季的磨山美得不像话，比日本还好看！', rating: 5, time: '2025-02-12' }]
    },
    {
        id: 190, name: '武汉长江大桥', image: 'https://picsum.photos/seed/travel190/400/300', rating: 4.6, price: 0, originalPrice: 0, sales: 31200, category: '历史文化', location: '武汉市武昌区临江大道',
        description: '万里长江第一桥，新中国第一座公铁两用桥。步行穿过大桥看长江水浩浩荡荡，火车从脚下列车隆隆驶过，龟山和蛇山隔江相望，最能感受大江大湖大武汉的磅礴气势。',
        openTime: '全天开放', tags: ['万里长江第一桥', '免费', '武汉象征'], comments: [{ user: '大桥漫步', avatar: '', content: '走过长江大桥才真正感受到长江的壮阔！武汉的象征！', rating: 5, time: '2025-02-10' }]
    },
    {
        id: 191, name: '湖北省博物馆', image: 'https://picsum.photos/seed/travel191/400/300', rating: 4.8, price: 0, originalPrice: 0, sales: 23400, category: '历史文化', location: '武汉市武昌区东湖路160号',
        description: '国家级重点博物馆，曾侯乙编钟和越王勾践剑为两大镇馆之宝举世闻名。编钟演奏会用两千年前的乐器奏响千年乐章，云梦睡虎地秦简记录着中华法系之源。',
        openTime: '09:00-17:00', tags: ['国家级', '编钟', '越王剑', '免费'], comments: [{ user: '国宝守护者', avatar: '', content: '亲眼看到越王勾践剑和曾侯乙编钟太震撼了！国宝中的国宝！', rating: 5, time: '2025-02-08' }]
    },
    {
        id: 192, name: '归元禅寺', image: 'https://picsum.photos/seed/travel192/400/300', rating: 4.4, price: 20, originalPrice: 25, sales: 19800, category: '历史文化', location: '武汉市汉阳区归元寺路20号',
        description: '武汉香火最旺的佛教寺院，以罗汉堂五百金身罗汉闻名。数罗汉是武汉人过年传统习俗，随意选一尊罗汉开始数你的年龄数到的那尊罗汉就是你的护身罗汉，十分灵验有趣。',
        openTime: '08:00-17:00', tags: ['香火鼎盛', '五百罗汉', '数罗汉'], comments: [{ user: '祈福者', avatar: '', content: '每年过年都要去归元寺数罗汉！找到自己的护身罗汉很灵验！', rating: 4, time: '2025-02-05' }]
    },
    {
        id: 193, name: '木兰天池', image: 'https://picsum.photos/seed/travel193/400/300', rating: 4.3, price: 80, originalPrice: 100, sales: 12300, category: '自然风光', location: '武汉市黄陂区长轩岭镇石门',
        description: '花木兰将军的故里，山清水秀的天然氧吧。天池碧水如镜倒映青山，沿峡谷栈道溯溪而上瀑布飞泉一步一景，秋季满山彩叶缤纷绚丽，是武汉人周末踏青避暑的绝佳去处。',
        openTime: '08:00-17:00', tags: ['花木兰故里', '天池碧水', '天然氧吧'], comments: [{ user: '踏青达人', avatar: '', content: '武汉的后花园！秋天漫山红叶倒映在天池里美极了！', rating: 4, time: '2025-02-03' }]
    },
    {
        id: 194, name: '楚河汉街', image: 'https://picsum.photos/seed/travel194/400/300', rating: 4.4, price: 0, originalPrice: 0, sales: 26700, category: '文化街区', location: '武汉市武昌区楚河汉街',
        description: '武汉最时尚的商业文化街区，楚河贯穿其间汉秀剧场红灯笼造型夺目。民国风格的建筑群中汇集了国际大牌和网红美食，夜晚灯光璀璨倒映楚河水中，是武汉年轻人的潮流聚集地。',
        openTime: '全天开放', tags: ['时尚街区', '汉秀剧场', '免费'], comments: [{ user: '时尚达人', avatar: '', content: '汉街的夜景超美！逛街吃饭看汉秀一条龙，武汉最潮的地方！', rating: 4, time: '2025-02-01' }]
    },
    {
        id: 195, name: '武汉欢乐谷', image: 'https://picsum.photos/seed/travel195/400/300', rating: 4.5, price: 200, originalPrice: 260, sales: 23400, category: '主题乐园', location: '武汉市洪山区欢乐大道196号',
        description: '华中地区最大的主题乐园，极速飞车和木翼双龙过山车是勇敢者的游戏。夏日水公园玛雅海滩造浪池清凉刺激，万圣节夜场鬼屋惊险刺激，是武汉人释放压力的最佳选择。',
        openTime: '09:30-18:00', tags: ['过山车', '水上乐园', '亲子游'], comments: [{ user: '过山车迷2', avatar: '', content: '极速飞车弹射出去的那一刻魂都飞了！刺激到爆！', rating: 5, time: '2025-01-30' }]
    }
];

// ============ 酒店列表 ============
export const hotelList = [
    {
        id: 201,
        name: '北京王府井大酒店',
        image: 'https://picsum.photos/seed/hotel201/400/300',
        rating: 4.8,
        price: 688,
        originalPrice: 888,
        sales: 3250,
        category: '豪华酒店',
        location: '北京市东城区王府井大街218号',
        description: '坐落于北京最繁华的王府井商圈，毗邻故宫、天安门，拥有豪华客房及套房，配备中西餐厅、健身中心、游泳池等设施。',
        tags: ['五星级', '市中心', '商务出行'],
        comments: [
            { user: '商务精英', avatar: '', content: '位置绝佳，步行到故宫只需十分钟，房间宽敞舒适。', rating: 5, time: '2025-01-15' }
        ]
    },
    {
        id: 202,
        name: '成都春熙路精品酒店',
        image: 'https://picsum.photos/seed/hotel202/400/300',
        rating: 4.6,
        price: 368,
        originalPrice: 468,
        sales: 4520,
        category: '精品酒店',
        location: '成都市锦江区春熙路126号',
        description: '位于成都最繁华的春熙路商圈，周边遍布火锅店和川菜馆，酒店设计融入川西民居元素，是品味成都慢生活的绝佳选择。',
        tags: ['春熙路', '川西风格', '美食环绕'],
        comments: [
            { user: '旅游达人', avatar: '', content: '下楼就是春熙路，周边全是好吃的，火锅串串应有尽有！', rating: 4, time: '2025-01-12' }
        ]
    },
    {
        id: 203,
        name: '杭州西湖国宾馆',
        image: 'https://picsum.photos/seed/hotel203/400/300',
        rating: 4.9,
        price: 1280,
        originalPrice: 1680,
        sales: 1860,
        category: '度假酒店',
        location: '杭州市西湖区杨公堤18号',
        description: '坐拥西湖一线湖景，庭院式园林设计融合江南古典韵味，推窗即见西湖美景，是杭州最具代表性的园林式度假酒店。',
        tags: ['西湖景观', '园林酒店', '高端度假'],
        comments: [
            { user: '度假达人', avatar: '', content: '推开窗就是西湖，早上在鸟鸣中醒来，太享受了！', rating: 5, time: '2025-01-10' }
        ]
    },
    {
        id: 204,
        name: '西安钟楼饭店',
        image: 'https://picsum.photos/seed/hotel204/400/300',
        rating: 4.5,
        price: 328,
        originalPrice: 428,
        sales: 5670,
        category: '商务酒店',
        location: '西安市碑林区东大街388号',
        description: '紧邻西安钟楼和回民街，地理位置优越，步行即可到达回民街品尝地道陕西美食，是游览古城西安的理想下榻之处。',
        tags: ['钟楼旁', '回民街', '古都风情'],
        comments: [
            { user: '古都探访者', avatar: '', content: '出门就是钟楼，走几步就到回民街，肉夹馍吃到撑！', rating: 4, time: '2025-01-08' }
        ]
    },
    {
        id: 205,
        name: '三亚海棠湾度假酒店',
        image: 'https://picsum.photos/seed/hotel205/400/300',
        rating: 4.9,
        price: 1688,
        originalPrice: 2188,
        sales: 2340,
        category: '度假酒店',
        location: '三亚市海棠区海棠北路68号',
        description: '坐落在三亚最美海棠湾，拥有私家沙滩和无敌海景，配备多个泳池和水上乐园，是家庭度假和蜜月旅行的首选目的地。',
        tags: ['私家沙滩', '海景房', '亲子度假'],
        comments: [
            { user: '海岛控', avatar: '', content: '私人沙滩太赞了，孩子在泳池玩疯了，完美的家庭度假！', rating: 5, time: '2025-01-05' }
        ]
    },
    {
        id: 206,
        name: '丽江古城客栈',
        image: 'https://picsum.photos/seed/hotel206/400/300',
        rating: 4.7,
        price: 258,
        originalPrice: 358,
        sales: 6780,
        category: '民宿客栈',
        location: '丽江市古城区五一街文治巷88号',
        description: '位于丽江古城核心区，纳西族传统院落改建而成，保留了木质结构和庭院天井，在院子里晒太阳喝茶是丽江最正确的打开方式。',
        tags: ['古城民宿', '纳西风情', '文艺清新'],
        comments: [
            { user: '文艺旅行者', avatar: '', content: '坐在院子里喝普洱茶看雪山，这才是丽江该有的样子！', rating: 5, time: '2025-01-02' }
        ]
    }
];

// ============ 休闲娱乐列表 ============
export const leisureList = [
    {
        id: 301,
        name: '上海外滩观景咖啡厅',
        image: 'https://picsum.photos/seed/leisure301/400/300',
        rating: 4.7,
        price: 88,
        originalPrice: 118,
        sales: 4520,
        category: '咖啡厅',
        location: '上海市黄浦区中山东一路18号',
        description: '坐拥外滩一线江景，对面就是陆家嘴天际线，点一杯手冲咖啡配提拉米苏，在外滩的微风中享受魔都最浪漫的下午茶时光。',
        openTime: '09:00-23:00',
        tags: ['外滩景观', '网红打卡', '下午茶'],
        comments: [
            { user: '魔都小资', avatar: '', content: '外滩view无敌了，傍晚来正好看日落和灯光秀，超级出片！', rating: 5, time: '2025-01-15' }
        ]
    },
    {
        id: 302,
        name: '成都人民公园鹤鸣茶社',
        image: 'https://picsum.photos/seed/leisure302/400/300',
        rating: 4.8,
        price: 30,
        originalPrice: 40,
        sales: 8920,
        category: '茶馆',
        location: '成都市青羊区少城路12号人民公园内',
        description: '成都有百年历史的老茶馆，竹椅木桌盖碗茶，掏耳朵师傅穿梭其间，一杯茶可以坐一下午，感受最地道的成都慢生活。',
        openTime: '06:30-21:00',
        tags: ['百年茶馆', '盖碗茶', '成都慢生活'],
        comments: [
            { user: '闲人老李', avatar: '', content: '一杯盖碗茶15块钱坐一下午，掏耳朵30，成都人的幸福就是这么简单！', rating: 5, time: '2025-01-12' }
        ]
    },
    {
        id: 303,
        name: '北京德云社相声大会',
        image: 'https://picsum.photos/seed/leisure303/400/300',
        rating: 4.9,
        price: 180,
        originalPrice: 280,
        sales: 12340,
        category: '演出',
        location: '北京市西城区北纬路甲1号',
        description: '郭德纲于谦领衔的德云社相声表演，说学逗唱样样精通，段子包袱层出不穷，是到北京必须体验的传统曲艺文化盛宴。',
        openTime: '19:30-22:00',
        tags: ['德云社', '相声', '北京文化'],
        comments: [
            { user: '相声迷', avatar: '', content: '笑得肚子疼！两个多小时全程高能，值回票价！', rating: 5, time: '2025-01-10' }
        ]
    },
    {
        id: 304,
        name: '杭州宋城千古情',
        image: 'https://picsum.photos/seed/leisure304/400/300',
        rating: 4.8,
        price: 320,
        originalPrice: 380,
        sales: 23400,
        category: '演出',
        location: '杭州市西湖区之江路148号',
        description: '世界三大名秀之一，大型歌舞秀以杭州历史文化和传说为背景，运用现代声光电技术，展现"给我一天，还你千年"的视觉盛宴。',
        openTime: '14:00-21:00',
        tags: ['世界名秀', '视觉盛宴', '必看演出'],
        comments: [
            { user: '演出爱好者', avatar: '', content: '舞台效果震撼到起鸡皮疙瘩，宋城千古情果然名不虚传！', rating: 5, time: '2025-01-08' }
        ]
    },
    {
        id: 305,
        name: '广州长隆欢乐世界',
        image: 'https://picsum.photos/seed/leisure305/400/300',
        rating: 4.6,
        price: 250,
        originalPrice: 300,
        sales: 45600,
        category: '主题乐园',
        location: '广州市番禺区迎宾路长隆旅游度假区',
        description: '亚洲顶级主题乐园，拥有世界最高的垂直过山车和十环过山车，还有精彩的花车巡游和夜间烟花表演，是亲子家庭出游的绝佳选择。',
        openTime: '09:30-18:00',
        tags: ['过山车', '亲子游', '主题乐园'],
        comments: [
            { user: '过山车达人', avatar: '', content: '垂直过山车太刺激了！十环过山车也很爽，排队也值了！', rating: 5, time: '2025-01-05' }
        ]
    },
    {
        id: 306,
        name: '深圳华侨城创意文化园',
        image: 'https://picsum.photos/seed/leisure306/400/300',
        rating: 4.5,
        price: 0,
        originalPrice: 0,
        sales: 18900,
        category: '文创园区',
        location: '深圳市南山区华侨城恩平街',
        description: '由旧厂房改造而成的文艺创意园区，聚集了大量独立设计师店、艺术展览空间、创意市集和特色咖啡馆，是文艺青年的周末好去处。',
        openTime: '全天开放',
        tags: ['文艺园区', '免费', '创意市集'],
        comments: [
            { user: '设计狮', avatar: '', content: '每个周末都有创意市集，很多独立设计师的好东西！', rating: 4, time: '2025-01-03' }
        ]
    }
];

// ============ 特产列表 ============
export const specialtyList = [
    {
        id: 401,
        name: '北京烤鸭礼盒',
        image: 'https://picsum.photos/seed/specialty401/400/300',
        rating: 4.8,
        price: 168,
        originalPrice: 228,
        sales: 12560,
        category: '北京特产',
        location: '北京市东城区前门大街32号',
        description: '正宗全聚德挂炉烤鸭，选用优质北京填鸭，果木烤制皮脆肉嫩，礼盒装含整只烤鸭、甜面酱、荷叶饼，是馈赠亲友的京味佳品。',
        tags: ['全聚德', '京味特产', '馈赠佳品'],
        comments: [
            { user: '送礼达人', avatar: '', content: '包装精美大气，送长辈很有面子，烤鸭味道正宗！', rating: 5, time: '2025-01-15' }
        ]
    },
    {
        id: 402,
        name: '四川火锅底料套装',
        image: 'https://picsum.photos/seed/specialty402/400/300',
        rating: 4.6,
        price: 68,
        originalPrice: 88,
        sales: 23100,
        category: '川渝特产',
        location: '成都市锦江区总府路88号',
        description: '正宗重庆牛油火锅底料，精选上等牛油搭配四川汉源花椒和郫县豆瓣，在家也能涮出地道川味火锅，一袋可煮4-6人份。',
        tags: ['牛油底料', '地道川味', '家庭火锅'],
        comments: [
            { user: '火锅控', avatar: '', content: '在家煮出来跟店里一个味道，牛油特别香，会回购！', rating: 5, time: '2025-01-12' }
        ]
    },
    {
        id: 403,
        name: '杭州西湖龙井茶',
        image: 'https://picsum.photos/seed/specialty403/400/300',
        rating: 4.9,
        price: 388,
        originalPrice: 588,
        sales: 8760,
        category: '杭州特产',
        location: '杭州市西湖区龙井村88号',
        description: '正宗西湖龙井明前茶，产自西湖核心产区，手工炒制而成，色泽翠绿、香气清幽、滋味甘醇，是中国十大名茶之首。',
        tags: ['明前龙井', '中国名茶', '送礼首选'],
        comments: [
            { user: '茶道中人', avatar: '', content: '明前龙井的豆花香太迷人了，茶汤清澈透亮，回甘悠长。', rating: 5, time: '2025-01-10' }
        ]
    },
    {
        id: 404,
        name: '云南普洱茶饼',
        image: 'https://picsum.photos/seed/specialty404/400/300',
        rating: 4.7,
        price: 268,
        originalPrice: 368,
        sales: 6540,
        category: '云南特产',
        location: '西双版纳州勐海县勐海镇',
        description: '云南勐海古树普洱生茶饼，采自300年以上古茶树，传统石磨压制工艺，越陈越香，具有很好的品饮和收藏价值。',
        tags: ['古树普洱', '越陈越香', '茶中瑰宝'],
        comments: [
            { user: '普洱收藏家', avatar: '', content: '条索肥壮，茶汤金黄透亮，入口醇厚回甘，值得收藏！', rating: 5, time: '2025-01-08' }
        ]
    },
    {
        id: 405,
        name: '新疆和田大枣',
        image: 'https://picsum.photos/seed/specialty405/400/300',
        rating: 4.5,
        price: 88,
        originalPrice: 118,
        sales: 34200,
        category: '新疆特产',
        location: '和田地区和田市北京西路',
        description: '新疆和田特级红枣，个大皮薄肉厚核小，自然吊干糖分充足，口感软糯香甜，是滋补养生的天然零食，每日三颗枣青春不显老。',
        tags: ['和田玉枣', '滋补养生', '天然零食'],
        comments: [
            { user: '养生达人', avatar: '', content: '枣子个头真大，肉很厚实，自然甜度非常高，泡水喝也好！', rating: 4, time: '2025-01-05' }
        ]
    },
    {
        id: 406,
        name: '东北长白山人参',
        image: 'https://picsum.photos/seed/specialty406/400/300',
        rating: 4.8,
        price: 588,
        originalPrice: 888,
        sales: 4320,
        category: '东北特产',
        location: '吉林省白山市抚松县万良镇',
        description: '长白山鲜人参，林下种植足年份，芦头饱满根须完整，可泡酒、炖汤、煲药膳，是滋补强身的珍贵中药材，送长辈的健康好礼。',
        tags: ['长白山参', '滋补佳品', '送礼健康'],
        comments: [
            { user: '中医爱好者', avatar: '', content: '参味浓郁，炖鸡汤放一根，汤味格外鲜美，补气效果很好！', rating: 5, time: '2025-01-02' }
        ]
    }
];

// ============ 旅游路线列表 ============
export const routeList = [
    {
        id: 501,
        name: '北京三日经典精华游',
        image: 'https://picsum.photos/seed/route501/400/300',
        rating: 4.8,
        price: 1680,
        originalPrice: 2180,
        sales: 5670,
        category: '华北',
        duration: '3天2晚',
        location: '北京市',
        description: 'Day1：天安门广场-故宫-景山公园；Day2：八达岭长城-明十三陵；Day3：颐和园-圆明园-清华大学。含全程用车、门票、两晚四星酒店、特色烤鸭宴。',
        tags: ['故宫长城', '精选酒店', '含特色餐'],
        comments: [
            { user: '首都游', avatar: '', content: '行程安排合理不赶，导游讲解很专业，烤鸭宴特别棒！', rating: 5, time: '2025-01-15' }
        ]
    },
    {
        id: 502,
        name: '成都美食两日寻味之旅',
        image: 'https://picsum.photos/seed/route502/400/300',
        rating: 4.7,
        price: 980,
        originalPrice: 1280,
        sales: 7890,
        category: '西南',
        duration: '2天1晚',
        location: '成都市',
        description: 'Day1：春熙路-太古里-宽窄巷子美食探索-火锅晚宴；Day2：锦里-武侯祠-人民公园鹤鸣茶社。含一晚精品酒店、特色火锅宴、川菜体验。',
        tags: ['美食主题', '火锅体验', '休闲慢游'],
        comments: [
            { user: '美食猎人', avatar: '', content: '火锅吃到爽！宽窄巷子的小吃也超多，两天根本不够吃！', rating: 5, time: '2025-01-12' }
        ]
    },
    {
        id: 503,
        name: '云南昆大丽经典六日游',
        image: 'https://picsum.photos/seed/route503/400/300',
        rating: 4.9,
        price: 3980,
        originalPrice: 5280,
        sales: 12340,
        category: '西南',
        duration: '6天5晚',
        location: '昆明-大理-丽江',
        description: 'Day1-2：昆明石林-滇池；Day3-4：大理古城-洱海环湖-双廊；Day5-6：丽江古城-玉龙雪山-束河古镇。含全程用车、门票、五晚特色客栈、过桥米线宴。',
        tags: ['昆大丽经典', '雪山洱海', '特色客栈'],
        comments: [
            { user: '云南通', avatar: '', content: '六天玩遍云南精华，洱海骑行和雪山索道是最佳体验！', rating: 5, time: '2025-01-10' }
        ]
    },
    {
        id: 504,
        name: '西安古都文化三日游',
        image: 'https://picsum.photos/seed/route504/400/300',
        rating: 4.6,
        price: 1480,
        originalPrice: 1880,
        sales: 6780,
        category: '西北',
        duration: '3天2晚',
        location: '西安市',
        description: 'Day1：兵马俑-华清池-长恨歌演出；Day2：西安城墙-碑林-钟鼓楼；Day3：大雁塔-大唐不夜城-回民街美食。含两晚四星酒店、羊肉泡馍宴。',
        tags: ['兵马俑', '唐文化', '美食体验'],
        comments: [
            { user: '历史迷', avatar: '', content: '兵马俑太震撼了！长恨歌演出也很精彩，回民街吃到撑！', rating: 5, time: '2025-01-08' }
        ]
    },
    {
        id: 505,
        name: '江南水乡四日悠然之旅',
        image: 'https://picsum.photos/seed/route505/400/300',
        rating: 4.7,
        price: 2680,
        originalPrice: 3480,
        sales: 5430,
        category: '华东',
        duration: '4天3晚',
        location: '上海-苏州-杭州',
        description: 'Day1：上海外滩-城隍庙-豫园；Day2：苏州拙政园-虎丘-平江路；Day3-4：杭州西湖-灵隐寺-龙井茶园。含三晚精选酒店、西湖醋鱼宴。',
        tags: ['江南水乡', '园林古镇', '品质之旅'],
        comments: [
            { user: '江南游子', avatar: '', content: '苏州园林太美了，杭州西湖百看不厌，江南好，风景旧曾谙！', rating: 5, time: '2025-01-05' }
        ]
    },
    {
        id: 506,
        name: '海南环岛五日阳光之旅',
        image: 'https://picsum.photos/seed/route506/400/300',
        rating: 4.8,
        price: 3580,
        originalPrice: 4680,
        sales: 8760,
        category: '华南',
        duration: '5天4晚',
        location: '海口-三亚',
        description: 'Day1-2：海口骑楼老街-火山口-文昌椰林；Day3-5：三亚亚龙湾-天涯海角-蜈支洲岛潜水。含四晚海景酒店、海鲜大餐、潜水体验。',
        tags: ['海岛度假', '潜水体验', '海鲜大餐'],
        comments: [
            { user: '海岛控', avatar: '', content: '蜈支洲岛潜水看到珊瑚和热带鱼了！海鲜大餐也超新鲜！', rating: 5, time: '2025-01-02' }
        ]
    }
];

// ============ 订单数据 ============
export const orderList = [
    {
        id: 1001,
        itemId: 2,
        type: 'food',
        itemName: '成都麻辣火锅',
        itemImage: 'https://picsum.photos/seed/food2/400/300',
        price: 168,
        count: 1,
        total: 168,
        status: 'completed',
        statusText: '已完成',
        date: '2024-12-25',
        code: 'FT20241225001'
    },
    {
        id: 1002,
        itemId: 104,
        type: 'travel',
        itemName: '秦始皇兵马俑博物馆',
        itemImage: '/static/images/travel/bmy.jpeg',
        price: 120,
        count: 2,
        total: 240,
        status: 'completed',
        statusText: '已完成',
        date: '2024-12-20',
        code: 'FT20241220002'
    },
    {
        id: 1003,
        itemId: 1,
        type: 'food',
        itemName: '老北京炸酱面',
        itemImage: 'https://picsum.photos/seed/food1/400/300',
        price: 28,
        count: 3,
        total: 84,
        status: 'pending',
        statusText: '待付款',
        date: '2024-12-28',
        code: 'FT20241228003'
    },
    {
        id: 1004,
        itemId: 102,
        type: 'travel',
        itemName: '九寨沟国家级自然保护区',
        itemImage: '/static/images/travel/jzg.jpeg',
        price: 169,
        count: 2,
        total: 338,
        status: 'used',
        statusText: '已使用',
        date: '2024-12-15',
        code: 'FT20241215004'
    }
];

// ============ 用户信息 ============
export const defaultUserInfo = {
    nickname: '美食旅游家',
    avatar: '',
    phone: '138****8888',
    favorites: 12,
    orders: 8,
    comments: 5,
    points: 680
};

// ============ 优惠券列表 ============
export const couponList = [
    { id: 601, title: '新人专享券', discount: 15, minAmount: 50, expireDate: '2025-06-30', category: '全场通用', status: 'available' },
    { id: 602, title: '美食满减券', discount: 10, minAmount: 30, expireDate: '2025-07-15', category: '美食', status: 'available' },
    { id: 603, title: '景点立减券', discount: 20, minAmount: 100, expireDate: '2025-07-31', category: '景点/酒店/休闲', status: 'available' },
    { id: 604, title: '火锅专属券', discount: 30, minAmount: 150, expireDate: '2025-06-15', category: '火锅', status: 'available' },
    { id: 605, title: '特产优惠券', discount: 8, minAmount: 60, expireDate: '2025-06-30', category: '特产', status: 'available' },
    { id: 606, title: '路线满减券', discount: 50, minAmount: 500, expireDate: '2025-08-31', category: '旅游路线', status: 'available' },
    { id: 607, title: '周末狂欢券', discount: 12, minAmount: 80, expireDate: '2025-04-30', category: '全场通用', status: 'expired' },
    { id: 608, title: '新春特惠券', discount: 25, minAmount: 200, expireDate: '2025-02-28', category: '全场通用', status: 'used' }
];

// ============ 工具函数 ============
export function delay(ms = 300) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function getAllItems() {
    return [
        ...foodList.map(f => ({ ...f, dataType: 'food' })),
        ...travelList.map(t => ({ ...t, dataType: 'travel' })),
        ...hotelList.map(h => ({ ...h, dataType: 'hotel' })),
        ...leisureList.map(l => ({ ...l, dataType: 'leisure' })),
        ...specialtyList.map(s => ({ ...s, dataType: 'specialty' })),
        ...routeList.map(r => ({ ...r, dataType: 'route' }))
    ];
}

export function getItemById(id) {
    const all = getAllItems();
    return all.find(item => item.id === id) || null;
}

export function getItemsByCategory(category) {
    const all = getAllItems();
    if (!category || category === '全部') return all;
    return all.filter(item => item.category === category);
}
