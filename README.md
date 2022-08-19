# Next.js rendering方法整理会

## おさらい
3種類あります.  

* CSR(Client Side Rendering)
* SSR(Server Side Rendering)
* SSG(Static Site Generator)

---

サンプルコードの実装の違いを軽くみる。  

---

## それぞれみてみる(サーバー編)
```
next build
next start
```
で起動する。
build前にstartすると怒られる。  
next buildの成果物は.nextディレクトリにある。  

curlで叩くとJS実行前の状態がわかる

SSR → 数字が出てる  
CSR → 数字が出てない  
SSG → 決められた数字に対応するページのみ表示される  

ブラウザで叩くとSSRとCSRは同じ画面が出るはず.  
ただし、SSRはキャッシュに含まれてる値がちらつくので、一度cacheしてるHTMLを描画してから値を置き換えてることがわかる  

---

## それぞれみてみる(nginx編)
```
yarn run next export
```

を実行するとnginxなりにhostingできる状態をつくることができる.  

nginxに生成物をデプロイして確認する

SSR → ビルドしたものを表示したあとにCSRでの描画になる(挙動的には問題ないけど、SSRではない)
CSR → 表示が動的に変わる  
SSG → 決められた数字に対応するページのみ表示される  


