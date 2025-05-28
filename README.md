# 📦 在庫管理 - プロフェッショナル在庫管理システム

バニラHTML、CSS、JavaScriptで構築された、モダンでレスポンシブな在庫管理アプリケーション。包括的な在庫追跡機能を備えたクリーンでミニマリストなデザインが特徴です。

![在庫管理アプリ](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![ライセンス](https://img.shields.io/badge/License-MIT-green.svg)
![ビルド状況](https://img.shields.io/badge/Build-Passing-brightgreen.svg)

## ✨ 機能

### 📊 **コア機能**
- **完全なCRUD操作** - 在庫アイテムの追加、表示、編集、削除
- **リアルタイム検索** - アイテム名、SKU、カテゴリ、説明での即座の検索
- **高度なフィルタリング** - カテゴリと在庫状況でのフィルタリング
- **在庫レベル監視** - 在庫不足および在庫切れの自動アラート
- **財務追跡** - リアルタイムでの総在庫価値計算

### 🎨 **ユーザーエクスペリエンス**
- **レスポンシブデザイン** - デスクトップ、タブレット、モバイルデバイス最適化
- **モダンUI** - スムーズなアニメーション付きのクリーンでプロフェッショナルなインターフェース
- **キーボードショートカット** - ホットキーによる効率的なナビゲーション
- **トースト通知** - すべてのユーザーアクションに対するリアルタイムフィードバック
- **空状態処理** - 新規ユーザーへの直感的なガイダンス

### 💾 **データ管理**
- **ローカルストレージ** - ブラウザでの自動データ永続化
- **データ検証** - 包括的な入力検証とエラーハンドリング
- **エクスポート/インポート** - JSONデータのエクスポートおよびインポート機能
- **サンプルデータ** - テスト用のオプションデモデータ

### 🔧 **技術的特徴**
- **バニラJavaScript** - 外部依存関係なし
- **ES6+構文** - モダンJavaScript機能
- **CSS Grid & Flexbox** - 高度なレイアウト技術
- **プログレッシブエンハンスメント** - JavaScript無しでも基本機能が動作
- **アクセシビリティ** - 適切なARIAラベルでWCAG準拠

## 🚀 クイックスタート

### 前提条件
- モダンWebブラウザ（Chrome、Firefox、Safari、Edge）
- ローカルWebサーバー（開発用、オプション）

### インストール

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/yourusername/inventory.git
   cd inventory
   ```

2. **アプリケーションを開く**
   - **オプションA**: ブラウザで`index.html`を直接開く
   - **オプションB**: ローカルサーバーを使用（推奨）
     ```bash
     # Pythonを使用
     python -m http.server 8000
     
     # Node.jsを使用
     npx serve .
     
     # PHPを使用
     php -S localhost:8000
     ```

3. **アプリケーションにアクセス**
   - 直接: `file:///path/to/index.html`
   - サーバー: `http://localhost:8000`

## 📱 使用ガイド

### アイテムの追加
1. **「アイテム追加」**ボタンをクリックまたは`Ctrl+N`を使用
2. 必須フィールドを入力:
   - **アイテム名** - 商品名
   - **SKU** - 在庫管理単位（固有識別子）
   - **カテゴリ** - 商品カテゴリ
   - **数量** - 現在の在庫レベル
   - **単価** - アイテムあたりの価格
   - **最小在庫** - 在庫不足しきい値
   - **説明** - オプションのアイテム詳細
3. **「アイテムを保存」**をクリックして在庫に追加

### 在庫管理
- **検索**: 検索バーを使用してアイテム名、SKU、カテゴリでアイテムを検索
- **フィルタ**: カテゴリと在庫状況のドロップダウンフィルタを使用
- **編集**: 編集アイコン（✏️）をクリックしてアイテム詳細を変更
- **削除**: 削除アイコン（🗑️）をクリックしてアイテムを削除
- **統計表示**: ヘッダーで総アイテム数、在庫不足アラート、総価値を監視

### キーボードショートカット
- `Ctrl+N` - 新しいアイテムを追加
- `Escape` - モーダルを閉じる
- `Enter` - フォームを送信
- `Tab` - フォームフィールド間を移動

## 🏗️ プロジェクト構造

```
inventory/
├── index.html          # メインHTML構造
├── style.css           # 包括的なスタイリング
├── app.js              # アプリケーションロジック
├── README.md           # ドキュメント
└── assets/             # 画像とアイコン（オプション）
```

## 🎨 デザインシステム

### カラーパレット
- **プライマリ**: `#2563eb`（ブルー）
- **成功**: `#10b981`（グリーン）
- **警告**: `#f59e0b`（アンバー）
- **危険**: `#ef4444`（レッド）
- **背景**: `#f8fafc`（ライトグレー）
- **サーフェス**: `#ffffff`（ホワイト）

### タイポグラフィ
- **フォントファミリー**: Inter、システムフォント
- **ウェイト**: 300、400、500、600、700
- **適切な行間でのレスポンシブスケーリング**

### コンポーネント
- **ボタン**: 複数のバリアント（プライマリ、セカンダリ、危険）
- **フォーム**: フォーカス状態での一貫したスタイリング
- **モーダル**: スムーズなアニメーションと背景
- **テーブル**: ホバー効果付きのレスポンシブ
- **ステータスバッジ**: カラーコード化された在庫インジケーター

## 🔧 カスタマイズ

### 新しいカテゴリの追加
`index.html`ファイルでカテゴリオプションを編集:
```html
<option value="YourCategory">あなたのカテゴリ</option>
```

### 在庫しきい値の変更
`app.js`で在庫状況ロジックを調整:
```javascript
getStockStatus(quantity, minStock) {
    if (quantity === 0) return 'out-of-stock';
    if (quantity <= minStock) return 'low-stock';
    return 'in-stock';
}
```

### スタイルの変更
`style.css`でCSSカスタムプロパティを変更:
```css
:root {
    --primary-color: #your-color;
    --spacing-md: 1rem;
    /* ... その他の変数 */
}
```

## 📊 データ形式

アイテムは以下のJSON形式で保存されます:
```json
{
    "id": "unique-identifier",
    "name": "商品名",
    "sku": "PROD-SKU-001",
    "category": "Electronics",
    "quantity": 50,
    "price": 2999,
    "minStock": 10,
    "description": "商品説明",
    "dateAdded": "2024-01-01T00:00:00.000Z",
    "lastUpdated": "2024-01-01T00:00:00.000Z"
}
```

## 🌐 ブラウザサポート

| ブラウザ | バージョン |
|---------|-----------|
| Chrome  | 60+       |
| Firefox | 55+       |
| Safari  | 12+       |
| Edge    | 79+       |

## 🚀 デプロイメント

### GitHub Pages
1. GitHubリポジトリにコードをプッシュ
2. 設定 → Pagesに移動
3. ソースブランチ（main）を選択
4. `https://yourusername.github.io/inventory`でアクセス

### Netlify
1. GitHubリポジトリを接続
2. ビルドコマンド: （不要）
3. 公開ディレクトリ: `/`
4. プッシュ時に自動デプロイ

### Vercel
```bash
npm i -g vercel
vercel --prod
```

## 🔒 セキュリティ考慮事項

- **XSS防止**: すべてのユーザー入力が適切にエスケープされています
- **データ検証**: すべてのフォームでクライアントサイド検証
- **ローカルストレージ**: データはローカルに保存され、サーバーに送信されません
- **外部依存関係なし**: 攻撃面の削減

## 🤝 貢献

1. リポジトリをフォーク
2. フィーチャーブランチを作成（`git checkout -b feature/amazing-feature`）
3. 変更をコミット（`git commit -m 'Add amazing feature'`）
4. ブランチにプッシュ（`git push origin feature/amazing-feature`）
5. プルリクエストを開く

### 開発ガイドライン
- 既存のコードスタイルに従う
- 複雑なロジックにコメントを追加
- 複数のブラウザでテスト
- レスポンシブデザインを確保
- ドキュメントを更新

## 📝 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 🙏 謝辞

- **Interフォント** - 美しいタイポグラフィ
- **Font Awesome** - プロフェッショナルなアイコン
- **CSS Grid & Flexbox** - モダンレイアウト機能
- **Local Storage API** - クライアントサイドデータ永続化

## 📞 サポート

- **課題**: [GitHub Issues](https://github.com/yourusername/inventory/issues)
- **ディスカッション**: [GitHub Discussions](https://github.com/yourusername/inventory/discussions)
- **メール**: your.email@example.com

## 🗺️ ロードマップ

- [ ] **v1.1**: バーコードスキャン対応
- [ ] **v1.2**: 複数拠点在庫
- [ ] **v1.3**: レポートと分析
- [ ] **v1.4**: API統合
- [ ] **v1.5**: チームコラボレーション機能

---

<div align="center">

**効率的な在庫管理のために❤️をこめて作られました**

[デモ](https://yourusername.github.io/inventory) • [ドキュメント](https://github.com/yourusername/inventory/wiki) • [バグ報告](https://github.com/yourusername/inventory/issues)

</div>