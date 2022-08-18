# Next.js rendering方法整理会

## おさらい
3種類あります.  

* CSR
* SSR
* SSG

※ サンプルコードの実装の違いを軽くみるのがいいかも。

## それぞれみてみる(サーバー編)
```
next build
next start
```
で起動する。
next buildの成果物は.nextディレクトリにある。

curlで叩くとJS実行前の状態がわかる

SSR → 数字が出てる
CSR → 数字が出てない
SSG → 決められた数字に対応するページのみ表示される

ブラウザで叩くとSSRとCSRは同じ画面が出るはず.  
ただし、SSRはキャッシュに含まれてる値がちらつくので、一度cacheしてるHTMLを描画してから値を置き換えてることがわかる  

## それぞれみてみる(nginx編)
```
yarn run next export
```
を実行するとnginxなりにhostingできる状態をつくることができる.  

nginxに生成物をデプロイして確認する

SSR → cacheされたものから更新されない
CSR → 表示が動的に変わる
SSG → 決められた数字に対応するページのみ表示される
  

