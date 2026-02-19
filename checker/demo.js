// ============================================================
// デモデータ（5日分 × 2〜3食 = 14レコード）
// ============================================================
// 意図的偏り: 野菜・果物少なめ、外食多め
// 不足: ビタミンC(~15%), 鉄(~55%), 葉酸(~40%), カルシウム(~45%)
// 過剰: ナトリウム(>200%)

function buildDemoMeals() {
  const today = new Date();
  const d = n => {
    const dt = new Date(today);
    dt.setDate(dt.getDate() + n);
    return dt.toISOString().split('T')[0];
  };

  // たんぱく質からアミノ酸を推定（g→mg、典型的な混合食の比率）
  function aminoFromProtein(pro) {
    return {
      ile:  Math.round(pro * 40),
      leu:  Math.round(pro * 80),
      lys:  Math.round(pro * 60),
      met:  Math.round(pro * 20),
      phe:  Math.round(pro * 45),
      thr:  Math.round(pro * 38),
      trp:  Math.round(pro * 11),
      val:  Math.round(pro * 50)
    };
  }

  function meal(date, mealType, items, n) {
    const aa = aminoFromProtein(n.protein || 0);
    const nutrients = Object.assign({
      calories:0, protein:0, fat:0, carbs:0, fiber:0,
      vitA:0, vitD:0, vitE:0, vitK:0,
      vitB1:0, vitB2:0, vitB3:0, vitB5:0, vitB6:0, vitB7:0, vitB9:0, vitB12:0, vitC:0,
      ca:0, p:0, mg:0, na:0, k:0,
      fe:0, zn:0, cu:0, mn:0, iodine:0, se:0, mo:0
    }, aa, n);

    return {
      id: crypto.randomUUID(),
      date, mealType, inputMethod:'demo', items,
      nutrients, isDemo:true,
      createdAt: new Date().toISOString()
    };
  }

  return [
    // === Day 1 (4日前) ===
    meal(d(-4), 'breakfast',
      [{name:'おにぎり(鮭)', quantity:'2個', grams:240}, {name:'缶コーヒー(微糖)', quantity:'1本', grams:190}],
      {calories:430, protein:10, fat:4, carbs:90, fiber:1,
        vitA:5, vitD:1.5, vitE:0.4, vitK:3, vitB1:0.06, vitB2:0.05, vitB3:2.5, vitB5:0.5,
        vitB6:0.1, vitB7:2, vitB9:15, vitB12:1.0, vitC:0,
        ca:15, p:80, mg:20, na:850, k:80, fe:0.5, zn:0.8, cu:0.08, mn:0.3, iodine:5, se:5, mo:5}
    ),
    meal(d(-4), 'lunch',
      [{name:'牛丼並盛', quantity:'1杯', grams:380}],
      {calories:650, protein:22, fat:20, carbs:95, fiber:2,
        vitA:15, vitD:0.3, vitE:1.2, vitK:10, vitB1:0.12, vitB2:0.15, vitB3:5.0, vitB5:1.0,
        vitB6:0.2, vitB7:5, vitB9:25, vitB12:1.5, vitC:3,
        ca:30, p:180, mg:35, na:1200, k:250, fe:2.5, zn:3.5, cu:0.15, mn:0.3, iodine:8, se:8, mo:8}
    ),
    meal(d(-4), 'dinner',
      [{name:'カレーライス', quantity:'普通', grams:450}, {name:'サラダ(少量)', quantity:'小皿', grams:40}],
      {calories:780, protein:18, fat:22, carbs:125, fiber:4,
        vitA:80, vitD:0.2, vitE:2.0, vitK:15, vitB1:0.15, vitB2:0.12, vitB3:4.0, vitB5:1.2,
        vitB6:0.3, vitB7:4, vitB9:30, vitB12:0.5, vitC:8,
        ca:50, p:150, mg:40, na:1500, k:400, fe:2.0, zn:2.0, cu:0.2, mn:0.5, iodine:5, se:5, mo:5}
    ),

    // === Day 2 (3日前) ===
    meal(d(-3), 'breakfast',
      [{name:'食パン(バター付き)', quantity:'1枚', grams:80}, {name:'目玉焼き', quantity:'1個', grams:60}],
      {calories:380, protein:12, fat:18, carbs:38, fiber:1,
        vitA:90, vitD:1.0, vitE:1.5, vitK:8, vitB1:0.08, vitB2:0.2, vitB3:1.5, vitB5:0.8,
        vitB6:0.1, vitB7:10, vitB9:30, vitB12:0.5, vitC:0,
        ca:40, p:130, mg:15, na:500, k:100, fe:1.2, zn:0.8, cu:0.05, mn:0.2, iodine:10, se:10, mo:5}
    ),
    meal(d(-3), 'lunch',
      [{name:'醤油ラーメン', quantity:'1杯', grams:500}],
      {calories:500, protein:18, fat:15, carbs:70, fiber:2,
        vitA:10, vitD:0.2, vitE:0.5, vitK:5, vitB1:0.1, vitB2:0.08, vitB3:3.0, vitB5:0.5,
        vitB6:0.15, vitB7:3, vitB9:20, vitB12:0.3, vitC:2,
        ca:25, p:120, mg:25, na:2500, k:200, fe:1.0, zn:1.5, cu:0.1, mn:0.3, iodine:15, se:5, mo:5}
    ),
    meal(d(-3), 'dinner',
      [{name:'から揚げ', quantity:'5個', grams:200}, {name:'白米ごはん', quantity:'茶碗1杯', grams:150},
       {name:'味噌汁', quantity:'1杯', grams:200}],
      {calories:750, protein:30, fat:32, carbs:82, fiber:2,
        vitA:20, vitD:0.3, vitE:2.5, vitK:5, vitB1:0.12, vitB2:0.15, vitB3:6.0, vitB5:1.5,
        vitB6:0.3, vitB7:5, vitB9:25, vitB12:0.3, vitC:3,
        ca:40, p:220, mg:40, na:1300, k:350, fe:1.5, zn:2.0, cu:0.1, mn:0.4, iodine:20, se:10, mo:8}
    ),

    // === Day 3 (2日前) — 朝食欠食 ===
    meal(d(-2), 'lunch',
      [{name:'のり弁当', quantity:'1個', grams:400}],
      {calories:700, protein:20, fat:22, carbs:100, fiber:2,
        vitA:15, vitD:0.5, vitE:1.5, vitK:8, vitB1:0.1, vitB2:0.1, vitB3:4.0, vitB5:0.8,
        vitB6:0.2, vitB7:5, vitB9:20, vitB12:1.0, vitC:3,
        ca:30, p:150, mg:30, na:1400, k:200, fe:1.5, zn:1.5, cu:0.1, mn:0.3, iodine:30, se:8, mo:5}
    ),
    meal(d(-2), 'dinner',
      [{name:'焼肉(カルビ・ロース)', quantity:'200g', grams:200},
       {name:'白米ごはん', quantity:'大盛り', grams:250}, {name:'ビール', quantity:'2杯', grams:700}],
      {calories:1100, protein:35, fat:50, carbs:95, fiber:1,
        vitA:30, vitD:0.3, vitE:1.5, vitK:5, vitB1:0.15, vitB2:0.2, vitB3:7.0, vitB5:1.5,
        vitB6:0.3, vitB7:5, vitB9:15, vitB12:2.0, vitC:2,
        ca:20, p:200, mg:30, na:800, k:350, fe:3.0, zn:5.0, cu:0.15, mn:0.3, iodine:5, se:5, mo:5}
    ),

    // === Day 4 (1日前) ===
    meal(d(-1), 'breakfast',
      [{name:'ヨーグルト', quantity:'100g', grams:100}, {name:'バナナ', quantity:'1本', grams:100}],
      {calories:165, protein:5, fat:3, carbs:30, fiber:1.5,
        vitA:15, vitD:0, vitE:0.3, vitK:2, vitB1:0.05, vitB2:0.1, vitB3:0.8, vitB5:0.5,
        vitB6:0.25, vitB7:3, vitB9:20, vitB12:0.1, vitC:10,
        ca:130, p:100, mg:35, na:50, k:400, fe:0.3, zn:0.5, cu:0.08, mn:0.3, iodine:5, se:3, mo:3}
    ),
    meal(d(-1), 'lunch',
      [{name:'ミートソースパスタ', quantity:'1人前', grams:350}],
      {calories:620, protein:20, fat:18, carbs:90, fiber:3,
        vitA:50, vitD:0.2, vitE:2.0, vitK:10, vitB1:0.15, vitB2:0.12, vitB3:4.5, vitB5:1.0,
        vitB6:0.2, vitB7:4, vitB9:35, vitB12:0.8, vitC:8,
        ca:50, p:180, mg:35, na:1100, k:400, fe:2.0, zn:2.5, cu:0.15, mn:0.4, iodine:5, se:8, mo:5}
    ),
    meal(d(-1), 'dinner',
      [{name:'焼きそば', quantity:'1人前', grams:300}, {name:'餃子', quantity:'5個', grams:125}],
      {calories:720, protein:22, fat:25, carbs:98, fiber:3,
        vitA:20, vitD:0.2, vitE:1.5, vitK:10, vitB1:0.2, vitB2:0.12, vitB3:4.0, vitB5:1.0,
        vitB6:0.2, vitB7:5, vitB9:25, vitB12:0.5, vitC:5,
        ca:30, p:150, mg:30, na:1800, k:300, fe:1.8, zn:2.0, cu:0.1, mn:0.3, iodine:5, se:5, mo:5}
    ),

    // === Day 5 (今日) ===
    meal(d(0), 'breakfast',
      [{name:'トースト(ジャム)', quantity:'1枚', grams:80}, {name:'コーヒー', quantity:'1杯', grams:200}],
      {calories:220, protein:4, fat:5, carbs:40, fiber:1,
        vitA:5, vitD:0, vitE:0.3, vitK:2, vitB1:0.05, vitB2:0.03, vitB3:0.8, vitB5:0.3,
        vitB6:0.03, vitB7:2, vitB9:15, vitB12:0, vitC:2,
        ca:20, p:40, mg:10, na:350, k:80, fe:0.5, zn:0.3, cu:0.03, mn:0.2, iodine:2, se:2, mo:2}
    ),
    meal(d(0), 'lunch',
      [{name:'カツ丼', quantity:'1杯', grams:450}],
      {calories:850, protein:28, fat:30, carbs:110, fiber:2,
        vitA:40, vitD:0.5, vitE:2.5, vitK:15, vitB1:0.25, vitB2:0.2, vitB3:6.0, vitB5:1.5,
        vitB6:0.3, vitB7:8, vitB9:30, vitB12:1.0, vitC:3,
        ca:45, p:200, mg:35, na:1500, k:300, fe:2.5, zn:3.0, cu:0.15, mn:0.4, iodine:10, se:10, mo:8}
    ),
    meal(d(0), 'dinner',
      [{name:'幕の内弁当', quantity:'1個', grams:400}],
      {calories:650, protein:22, fat:18, carbs:95, fiber:3,
        vitA:40, vitD:0.5, vitE:1.5, vitK:15, vitB1:0.15, vitB2:0.12, vitB3:4.0, vitB5:1.0,
        vitB6:0.2, vitB7:5, vitB9:30, vitB12:0.8, vitC:5,
        ca:40, p:160, mg:30, na:1200, k:250, fe:2.0, zn:2.0, cu:0.1, mn:0.3, iodine:15, se:8, mo:5}
    )
  ];
}

// デモデータ投入
function loadDemoData() {
  const existing = loadMeals();
  const demos = buildDemoMeals();
  saveMeals([...existing, ...demos]);
  // デフォルトプロフィール設定（未設定の場合のみ）
  if (!localStorage.getItem('eiyou_profile')) {
    saveProfile({age:35, sex:'male', activityLevel:'normal', bodyWeight:65});
  }
}

// デモデータのみ削除
function clearDemoData() {
  const meals = loadMeals().filter(m => !m.isDemo);
  saveMeals(meals);
}
