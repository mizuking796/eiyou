// ============================================================
// 栄養素情報・RDA定数・食品リスト
// ============================================================

// --- 追跡する栄養素定義 ---
const NUTRIENT_INFO = {
  // マクロ栄養素
  calories: {name:'カロリー', unit:'kcal', category:'macro', group:'マクロ栄養素'},
  protein:  {name:'たんぱく質', unit:'g', category:'macro', group:'マクロ栄養素'},
  fat:      {name:'脂質', unit:'g', category:'macro', group:'マクロ栄養素'},
  carbs:    {name:'炭水化物', unit:'g', category:'macro', group:'マクロ栄養素'},
  fiber:    {name:'食物繊維', unit:'g', category:'macro', group:'マクロ栄養素'},
  // ビタミン（脂溶性）
  vitA:  {name:'ビタミンA', unit:'μgRAE', category:'vitamin', group:'ビタミン（脂溶性）',
    deficiency:'夜盲症、角膜乾燥症、皮膚乾燥、免疫力低下'},
  vitD:  {name:'ビタミンD', unit:'μg', category:'vitamin', group:'ビタミン（脂溶性）',
    deficiency:'くる病、骨軟化症、骨粗鬆症、免疫力低下'},
  vitE:  {name:'ビタミンE', unit:'mg', category:'vitamin', group:'ビタミン（脂溶性）',
    deficiency:'溶血性貧血、神経障害、筋力低下'},
  vitK:  {name:'ビタミンK', unit:'μg', category:'vitamin', group:'ビタミン（脂溶性）',
    deficiency:'出血傾向、骨粗鬆症'},
  // ビタミン（水溶性）
  vitB1:  {name:'ビタミンB1', unit:'mg', category:'vitamin', group:'ビタミン（水溶性）',
    deficiency:'脚気、倦怠感、食欲不振、神経障害'},
  vitB2:  {name:'ビタミンB2', unit:'mg', category:'vitamin', group:'ビタミン（水溶性）',
    deficiency:'口角炎、口内炎、皮膚炎'},
  vitB3:  {name:'ナイアシン', unit:'mgNE', category:'vitamin', group:'ビタミン（水溶性）',
    deficiency:'ペラグラ、口内炎'},
  vitB5:  {name:'パントテン酸', unit:'mg', category:'vitamin', group:'ビタミン（水溶性）',
    deficiency:'疲労感、手足のしびれ'},
  vitB6:  {name:'ビタミンB6', unit:'mg', category:'vitamin', group:'ビタミン（水溶性）',
    deficiency:'皮膚炎、貧血、免疫力低下'},
  vitB7:  {name:'ビオチン', unit:'μg', category:'vitamin', group:'ビタミン（水溶性）',
    deficiency:'脱毛、皮膚炎、うつ症状'},
  vitB9:  {name:'葉酸', unit:'μg', category:'vitamin', group:'ビタミン（水溶性）',
    deficiency:'巨赤芽球性貧血、胎児神経管閉鎖障害'},
  vitB12: {name:'ビタミンB12', unit:'μg', category:'vitamin', group:'ビタミン（水溶性）',
    deficiency:'悪性貧血、末梢神経障害、認知機能低下'},
  vitC:   {name:'ビタミンC', unit:'mg', category:'vitamin', group:'ビタミン（水溶性）',
    deficiency:'壊血病、歯肉出血、免疫力低下、傷の治りが遅い'},
  // ミネラル（主要）
  ca: {name:'カルシウム', unit:'mg', category:'mineral', group:'ミネラル（主要）',
    deficiency:'骨粗鬆症、テタニー、歯の脆弱化'},
  p:  {name:'リン', unit:'mg', category:'mineral', group:'ミネラル（主要）',
    deficiency:'骨軟化症、筋力低下'},
  mg: {name:'マグネシウム', unit:'mg', category:'mineral', group:'ミネラル（主要）',
    deficiency:'筋痙攣、不整脈、高血圧'},
  na: {name:'ナトリウム', unit:'mg', category:'mineral', group:'ミネラル（主要）',
    deficiency:'低ナトリウム血症、筋痙攣', isExcessWarning:true,
    excess:'高血圧、胃がんリスク、腎臓負担'},
  k:  {name:'カリウム', unit:'mg', category:'mineral', group:'ミネラル（主要）',
    deficiency:'筋力低下、不整脈、便秘'},
  // ミネラル（微量）
  fe: {name:'鉄', unit:'mg', category:'mineral', group:'ミネラル（微量）',
    deficiency:'鉄欠乏性貧血、疲労感、動悸、集中力低下'},
  zn: {name:'亜鉛', unit:'mg', category:'mineral', group:'ミネラル（微量）',
    deficiency:'味覚障害、免疫力低下、皮膚炎、脱毛'},
  cu: {name:'銅', unit:'mg', category:'mineral', group:'ミネラル（微量）',
    deficiency:'貧血、白血球減少'},
  mn: {name:'マンガン', unit:'mg', category:'mineral', group:'ミネラル（微量）',
    deficiency:'骨代謝異常、成長障害'},
  iodine: {name:'ヨウ素', unit:'μg', category:'mineral', group:'ミネラル（微量）',
    deficiency:'甲状腺腫、甲状腺機能低下'},
  se: {name:'セレン', unit:'μg', category:'mineral', group:'ミネラル（微量）',
    deficiency:'心筋症、免疫力低下'},
  mo: {name:'モリブデン', unit:'μg', category:'mineral', group:'ミネラル（微量）',
    deficiency:'頻脈、頭痛'},
  // 必須アミノ酸
  ile: {name:'イソロイシン', unit:'mg', category:'aminoAcid', group:'必須アミノ酸',
    deficiency:'成長障害、筋力低下'},
  leu: {name:'ロイシン', unit:'mg', category:'aminoAcid', group:'必須アミノ酸',
    deficiency:'成長障害、筋力低下'},
  lys: {name:'リシン', unit:'mg', category:'aminoAcid', group:'必須アミノ酸',
    deficiency:'成長障害、免疫力低下、貧血'},
  met: {name:'メチオニン', unit:'mg', category:'aminoAcid', group:'必須アミノ酸',
    deficiency:'成長障害、脂肪肝'},
  phe: {name:'フェニルアラニン', unit:'mg', category:'aminoAcid', group:'必須アミノ酸',
    deficiency:'成長障害、精神的無気力'},
  thr: {name:'トレオニン', unit:'mg', category:'aminoAcid', group:'必須アミノ酸',
    deficiency:'成長障害、脂肪肝'},
  trp: {name:'トリプトファン', unit:'mg', category:'aminoAcid', group:'必須アミノ酸',
    deficiency:'不眠、うつ症状'},
  val: {name:'バリン', unit:'mg', category:'aminoAcid', group:'必須アミノ酸',
    deficiency:'成長障害、筋力低下'}
};

// 全栄養素キー一覧
const NUTRIENT_KEYS = Object.keys(NUTRIENT_INFO);

// カテゴリグループ（表示順序）
const NUTRIENT_GROUPS = [
  'マクロ栄養素',
  'ビタミン（脂溶性）',
  'ビタミン（水溶性）',
  'ミネラル（主要）',
  'ミネラル（微量）',
  '必須アミノ酸'
];

// グループカラー
const GROUP_COLORS = {
  'マクロ栄養素':     '#34495e',
  'ビタミン（脂溶性）': '#e67e22',
  'ビタミン（水溶性）': '#3498db',
  'ミネラル（主要）':   '#27ae60',
  'ミネラル（微量）':   '#16a085',
  '必須アミノ酸':      '#8e44ad'
};

// --- RDA（推奨摂取量）基準値 ---
// 日本人の食事摂取基準（2020年版）30-49歳、活動量普通
const RDA_BASE = {
  male: {
    calories:2650, protein:65, fat:73, carbs:364, fiber:21,
    vitA:900, vitD:8.5, vitE:6.0, vitK:150,
    vitB1:1.4, vitB2:1.6, vitB3:15, vitB5:6, vitB6:1.4, vitB7:50, vitB9:240, vitB12:2.4, vitC:100,
    ca:750, p:1000, mg:370, na:600, k:3000,
    fe:7.5, zn:11, cu:0.9, mn:4.0, iodine:130, se:30, mo:30
  },
  female: {
    calories:2000, protein:50, fat:55, carbs:275, fiber:18,
    vitA:700, vitD:8.5, vitE:5.5, vitK:150,
    vitB1:1.1, vitB2:1.2, vitB3:12, vitB5:5, vitB6:1.1, vitB7:50, vitB9:240, vitB12:2.4, vitC:100,
    ca:650, p:800, mg:290, na:600, k:2600,
    fe:10.5, zn:8, cu:0.7, mn:3.5, iodine:130, se:25, mo:25
  }
};

// アミノ酸 mg/kg体重/日 (WHO/FAO/UNU 2007)
const AMINO_PER_KG = {
  ile:20, leu:39, lys:30, met:10, phe:25, thr:15, trp:4, val:26
};

// 活動量による補正係数（カロリー・マクロ栄養素）
const ACTIVITY_MULT = { low:0.85, normal:1.0, high:1.15 };

// プロフィールからRDAを計算
function calcRDA(profile) {
  const base = RDA_BASE[profile.sex] || RDA_BASE.male;
  const mult = ACTIVITY_MULT[profile.activityLevel] || 1.0;
  const rda = {};
  for (const key of NUTRIENT_KEYS) {
    if (AMINO_PER_KG[key]) {
      rda[key] = AMINO_PER_KG[key] * (profile.bodyWeight || 65);
    } else if (['calories','protein','fat','carbs','fiber'].includes(key)) {
      rda[key] = Math.round(base[key] * mult);
    } else {
      rda[key] = base[key];
    }
  }
  return rda;
}

// --- 食品オートコンプリートリスト ---
const FOOD_LIST = [
  // ごはん・麺・パン
  '白米ごはん(茶碗1杯)','玄米ごはん','おにぎり(1個)','食パン(1枚)','ロールパン',
  'うどん','そば','ラーメン(麺のみ)','パスタ','お粥','もち(1個)',
  // 肉
  '鶏むね肉','鶏もも肉','鶏ささみ','豚ロース','豚バラ肉','豚ヒレ肉',
  '牛もも肉','牛バラ肉','ひき肉(合いびき)','ベーコン','ハム','ソーセージ',
  '鶏レバー','豚レバー',
  // 魚介
  '鮭','さんま','まぐろ赤身','あじ','えび','いか','たこ','しらす',
  // 卵・大豆
  '卵(1個)','目玉焼き','卵焼き','ゆで卵',
  '豆腐(1/2丁)','納豆(1パック)','油揚げ','厚揚げ','豆乳(200ml)',
  // 野菜
  'ほうれん草','小松菜','ブロッコリー','にんじん','キャベツ',
  'トマト','きゅうり','玉ねぎ','もやし','大根','なす','ピーマン',
  'かぼちゃ','レタス','白菜','ごぼう','れんこん','長ねぎ',
  // 芋
  'じゃがいも','さつまいも','里芋',
  // 果物
  'バナナ','りんご','みかん','いちご','キウイ','オレンジ',
  // 乳製品
  '牛乳(200ml)','ヨーグルト(100g)','チーズ(1枚)',
  // ナッツ
  'アーモンド(10粒)','くるみ(5粒)',
  // 定食・丼・一品料理
  'カレーライス','牛丼','親子丼','カツ丼','天丼','海鮮丼',
  'ハンバーグ','からあげ','とんかつ','天ぷら盛り合わせ','餃子(5個)',
  '焼肉','生姜焼き','肉じゃが','豚汁',
  '寿司(1人前)','刺身盛り合わせ',
  '焼きそば','チャーハン','オムライス','グラタン',
  'サンドイッチ','ハンバーガー','ピザ(1切れ)',
  // 麺料理
  '味噌ラーメン','醤油ラーメン','豚骨ラーメン','ざるそば','焼きうどん',
  // 汁物・副菜
  '味噌汁','サラダ','冷奴','ひじき煮','きんぴらごぼう','ポテトサラダ',
  '漬物','煮物','おひたし'
];

// 食事区分
const MEAL_TYPES = {
  breakfast: {label:'朝食', icon:'🌅'},
  lunch:     {label:'昼食', icon:'☀️'},
  dinner:    {label:'夕食', icon:'🌙'},
  snack:     {label:'間食', icon:'🍪'}
};

// バーチャートの色閾値
function getBarColor(pct) {
  if (pct < 50) return '#e74c3c';
  if (pct < 80) return '#f39c12';
  if (pct <= 120) return '#27ae60';
  if (pct <= 150) return '#e67e22';
  return '#e74c3c';
}

// バーチャートのラベル
function getBarLabel(pct) {
  if (pct < 50) return '不足';
  if (pct < 80) return 'やや不足';
  if (pct <= 120) return '適量';
  if (pct <= 150) return 'やや過剰';
  return '過剰';
}
