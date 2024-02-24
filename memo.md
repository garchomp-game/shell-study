# 実践課題

実践課題に取り組む前に、まずは`awk`で使用するサンプルのテキストファイルの内容を準備しましょう。以下に、2つのサンプルファイルの内容を示します。

## サンプルファイル1: `data.txt`

```txt
Alice,100,Math
Bob,85,Science
Charlie,98,Math
David,70,Science
Eve,88,Math
```

このファイルには、名前、得点、科目の3つのフィールドがカンマ区切りで記載されています。

## サンプルファイル2: `log.txt`

```log
2023-01-01 12:00:00 INFO User Alice logged in
2023-01-01 12:30:00 WARN Connection timeout for user Bob
2023-01-02 09:15:00 INFO User Charlie logged in
2023-01-02 11:00:00 ERROR Disk full
2023-01-03 14:20:00 INFO User David logged in
```

このファイルには、日付、時刻、ログレベル、メッセージがスペース区切りで記載されています。

これらのファイルを使用して、以下にいくつかの実践課題を出題します。

### 課題1: 科目がMathの学生の名前と得点を抽出する

`data.txt`から科目がMathの学生の名前と得点を表示してください。

### 課題2: 科目ごとの平均得点を計算する

`data.txt`を使用して、各科目ごとの平均得点を計算し、科目名と平均得点を表示してください。

### 課題3: ログファイルからERRORレベルのログを抽出する

`log.txt`からログレベルがERRORの行だけを表示してください。

### 課題4: 各ログレベルの出現回数をカウントする

`log.txt`を使用して、各ログレベル（INFO, WARN, ERROR）がいくつずつ出現するかをカウントし、結果を表示してください。

これらの課題を通じて、`awk`の基本的な使い方から、少し複雑なデータの加工・集計までのスキルを養うことができます。解答例は別のレスポンスで提供しますので、まずは自身で解いてみてください。

## 解答欄

<!-- markdownlint-disable MD013 -->
課題1:awk -F, '{ print $2 }' data.txt

課題2:
awk -F, 'BEGIN { OFS=": "; } { totals[$3] += $2 } END { for (item in totals) print item, totals[item] }' data.txt

課題3:awk '/ERROR/ {print}' log.txt

課題4:awk 'BEGIN { OFS=": " } {list[$3] += 1} END { for (item in list) pr
int item, list[item] }' log.txt

おまけ：課題２のコードの分解

以下のコードが答えである

```bash
awk -F, 'BEGIN { OFS=": "; } { totals[$3] += $2 } END { for (item in totals) print item, totals[item] }' data.txt
```
<!-- markdownlint-enable MD013 -->

これを分解すると以下のようになる

```awk
BEGIN 
{
  OFS=": ";
} 
{
  totals[$3] += $2
} 
END
{
  for (item in totals) print item, totals[item] 
}
```
