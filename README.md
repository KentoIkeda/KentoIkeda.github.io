# fukucie

## ローカル開発環境構築

### Windows環境

1.sailをダウンロード

`composer require laravel/sail --dev`

2.「.env」ファイルを作成(WSLターミナルで以降入力)

`cp .env.example .env`

3.「.env」ファイルを修正


|<center>項目</center>|<center>変更前</center>|<center>変更後</center>|
| ---- | ---- | ---- |
|**DB_HOST**|127.0.0.1|<span style="color: #ff0000; ">**mysql**</span>|
|**DB_PASSWORD**|(未設定)|<span style="color: #ff0000; ">**適当なパスワード**</span>|
|**DB_USERNAME**|root|<span style="color: #ff0000; ">**sail**</span>|
