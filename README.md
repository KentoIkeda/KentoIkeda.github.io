# fukucie

## ローカル開発環境構築

<br>

### Windows環境

<br>

1.sailをダウンロード

`composer require laravel/sail --dev`

2.「.env」ファイルを作成(WSLターミナルで以降入力)

`cp .env.example .env`

3.「.env」ファイルを修正


|<center>項目</center>|<center>変更前</center>|<center>変更後</center>|
| ---- | ---- | ---- |
|**DB_HOST**|127.0.0.1|<span style="color: red; ">**mysql**</span>|
|**DB_PASSWORD**|(未設定)|<span style="color: red; ">**適当なパスワード**</span>|
|**DB_USERNAME**|root|<span style="color: red; ">**sail**</span>|
