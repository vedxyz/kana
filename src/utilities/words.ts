const hiraganaWords = [
  "あいだ",
  "あいて",
  "あおい",
  "あおぞら",
  "あかい",
  "あける",
  "あげる",
  "あさごはん",
  "あした",
  "あそぶ",
  "あたまがいい",
  "あつめる",
  "あなた",
  "あのかた",
  "あびる",
  "あぶない",
  "あまい",
  "あまり",
  "あらう",
  "あるく",
  "いいえ",
  "いがあるのですが",
  "いがい",
  "いかが",
  "いかがですか",
  "いがく",
  "いくつ",
  "いくら",
  "いけない",
  "いけん",
  "いさん",
  "いそぐ",
  "いちいちきゅう",
  "いちど",
  "いちども",
  "いちばん",
  "いつか",
  "いっしょに",
  "いつでも",
  "いっぱい",
  "いつも",
  "いない",
  "いなか",
  "いらっしゃいます",
  "いろいろな",
  "うけつけ",
  "うごく",
  "うたう",
  "うちゅう",
  "うりば",
  "えいが",
  "えきまえ",
  "おいしい",
  "おいのり",
  "おかげさまで",
  "おかず",
  "おきる",
  "おくさん",
  "おくじょう",
  "おくりもの",
  "おくる",
  "おさがしですか",
  "おじいさん",
  "おしえる",
  "おせわになりました",
  "おそい",
  "おだいじに",
  "おっと",
  "おでこ",
  "おととい",
  "おととし",
  "おとな",
  "おなかがすく",
  "おなまえ",
  "おねがいします",
  "おばあさん",
  "おばさん",
  "おひきだしですか",
  "おもい",
  "おもいだす",
  "おもう",
  "おもちゃ",
  "おもて",
  "およぐ",
  "おりる",
  "おろす",
  "おわり",
  "おわる",
  "おんがく",
  "おんせん",
  "がいい",
  "かいがい",
  "かいがん",
  "かいぎ",
  "かいぎしつ",
  "がいこく",
  "かいしゃ",
  "かいじょう",
  "がいたい",
  "かいだん",
  "かいも",
  "かえす",
  "かえる",
  "かがく",
  "かがみ",
  "かかる",
  "がくせい",
  "がくぶ",
  "かけですか",
  "かける",
  "かぞく",
  "かたち",
  "かっこいい",
  "がっこう",
  "かなり",
  "かのじょ",
  "かびん",
  "かぶき",
  "かぶる",
  "かみがた",
  "かみなり",
  "かめる",
  "からい",
  "からきました",
  "からだ",
  "かりる",
  "かるい",
  "かわいい",
  "かんがえる",
  "かんけい",
  "かんづめ",
  "がんばる",
  "きいろい",
  "きおん",
  "きかい",
  "ぎじゅつ",
  "きせつ",
  "きそく",
  "きっさてん",
  "きって",
  "きっと",
  "きっぷ",
  "きのう",
  "きぶん",
  "きもの",
  "きゅうこう",
  "きゅうりょう",
  "きょう",
  "きょうかい",
  "きょうしつ",
  "きょうみ",
  "きょく",
  "きょねん",
  "きらいな",
  "きれいな",
  "きんえん",
  "きんがく",
  "ぎんこう",
  "きんじょ",
  "ぐあい",
  "くうき",
  "くうこう",
  "くすり",
  "くちびる",
  "くつした",
  "くなる",
  "ぐらい",
  "くるま",
  "くれる",
  "くろい",
  "けいざい",
  "けいたい",
  "けしき",
  "けっこうです",
  "げんいん",
  "げんかん",
  "けんきゅうしゃ",
  "げんきん",
  "けんこう",
  "げんりょう",
  "こうえん",
  "こうがい",
  "こうくうびん",
  "こうこう",
  "こうじょう",
  "こうつう",
  "こうばん",
  "こうむいん",
  "こうよう",
  "こえる",
  "こくさい",
  "こくない",
  "こころ",
  "ございます",
  "ごしゅじん",
  "ごぜん",
  "こたえ",
  "ごちゅうもんは",
  "ことし",
  "ことば",
  "これから",
  "こんげつ",
  "こんしゅう",
  "こんど",
  "こんばん",
  "こんや",
  "さいきん",
  "さいご",
  "さいしょ",
  "さいちゅう",
  "さいふ",
  "ざいりょう",
  "さくぶん",
  "さくら",
  "さっき",
  "ざっし",
  "さどう",
  "さらいげつ",
  "さらいしゅう",
  "さらいねん",
  "さわる",
  "さんです",
  "ざんねんですが",
  "しあい",
  "しかた",
  "じかん",
  "じこくひょう",
  "しごと",
  "じしょ",
  "じしん",
  "しずかな",
  "じだい",
  "したぎ",
  "じたく",
  "しつれいですが",
  "じてん",
  "じてんしゃ",
  "じどうしゃ",
  "じどうはんばいき",
  "じぶんで",
  "じむしょ",
  "しめる",
  "しやくしょ",
  "しゃしん",
  "しゃちょう",
  "しゅうかん",
  "じゅうしょ",
  "じゅうどう",
  "しゅうまつ",
  "じゅぎょう",
  "じゅく",
  "しゅくだい",
  "しゅしょう",
  "しゅじん",
  "しゅみ",
  "じょう",
  "しょうがつ",
  "しょうがっこう",
  "じょうずな",
  "しょうせつ",
  "じょうほう",
  "しょうゆ",
  "しょうらい",
  "しょくどう",
  "しょくひん",
  "じょせい",
  "しょるい",
  "しりょう",
  "しろい",
  "しんかんせん",
  "しんごう",
  "じんこう",
  "じんじゃ",
  "しんせき",
  "しんちょう",
  "しんぶん",
  "しんゆう",
  "すいえい",
  "すいどう",
  "すうがく",
  "ずかしい",
  "すごい",
  "ずっと",
  "すてきな",
  "すてる",
  "すみません",
  "すると",
  "すわる",
  "せいかつ",
  "せいき",
  "せいじ",
  "せいせき",
  "せいと",
  "せいひん",
  "せかい",
  "せかいじゅう",
  "せきゆ",
  "せっけん",
  "せつび",
  "せなか",
  "せんしゅ",
  "せんせい",
  "ぜんぜん",
  "せんそう",
  "せんぱい",
  "ぜんぶ",
  "ぜんぶで",
  "せんもん",
  "そうです",
  "そうですね",
  "そして",
  "そのまま",
  "それじゃ",
  "それで",
  "それとも",
  "それに",
  "そろそろ",
  "そんなに",
  "たいおんけい",
  "たいかい",
  "だいがく",
  "だいがくせい",
  "たいしかん",
  "たいじゅう",
  "だいじょうぶ",
  "たいせつな",
  "だいたい",
  "たいてい",
  "だいとうりょう",
  "だいどころ",
  "だいぶ",
  "たいふう",
  "たいへんな",
  "たいよう",
  "だから",
  "たくさん",
  "たたみ",
  "たちいりきんし",
  "たてもの",
  "たのしい",
  "たばこ",
  "たぶん",
  "たべもの",
  "たまに",
  "だめです",
  "たりる",
  "たんじょうび",
  "だんせい",
  "だんだん",
  "だんぼう",
  "ちかい",
  "ちがいます",
  "ちかてつ",
  "ちから",
  "ちきゅう",
  "ちっとも",
  "ちゃわん",
  "ちゃん",
  "ちゅう",
  "ちゅうがっこう",
  "ちゅうしゃじょう",
  "ちょうし",
  "ちょくせつ",
  "ちょっと",
  "つかう",
  "つかる",
  "つかれる",
  "つぎの",
  "つくえ",
  "つくる",
  "つける",
  "つごう",
  "つごうがいい",
  "つごうがわるい",
  "つなみ",
  "つまらない",
  "つめたい",
  "つれていく",
  "つれてくる",
  "ていしょく",
  "ている",
  "てがみ",
  "できる",
  "でございます",
  "ですから",
  "てつだう",
  "てぶくろ",
  "てんいん",
  "てんき",
  "でんき",
  "てんきですね",
  "でんげん",
  "でんしゃ",
  "でんわ",
  "どうぐ",
  "どうして",
  "どうしましたか",
  "とうとう",
  "どうぶつ",
  "どうぶつえん",
  "どうも",
  "どうやって",
  "とおい",
  "ときどき",
  "どくしん",
  "とくに",
  "ところ",
  "ところで",
  "としょかん",
  "とちゅう",
  "どちら",
  "どちらも",
  "どっち",
  "とても",
  "どなた",
  "とまる",
  "どろぼう",
  "どんどん",
  "どんな",
  "なおす",
  "なかなか",
  "なくす",
  "なみだ",
  "ならう",
  "なるほど",
  "なんがつ",
  "なんにん",
  "にいい",
  "にぎやかな",
  "について",
  "にっき",
  "にほんご",
  "にもつ",
  "にんき",
  "ねだん",
  "ねむい",
  "ねんがじょう",
  "のどがかわく",
  "のぼる",
  "のみもの",
  "のりかえる",
  "のりば",
  "はいしゃ",
  "はいゆう",
  "はがき",
  "はじまる",
  "はじめ",
  "はじめて",
  "はじめに",
  "はじめる",
  "ばしょ",
  "はちょっと",
  "はなび",
  "はなみ",
  "はやい",
  "はやく",
  "はやし",
  "はらう",
  "ばんぐみ",
  "ばんごう",
  "ばんごはん",
  "ばんせん",
  "はんぶん",
  "ひこうき",
  "びじゅつ",
  "びじゅつかん",
  "ひじょうぐち",
  "ひっこし",
  "ひまな",
  "ひゃくとおばん",
  "ひょう",
  "びょういん",
  "びょうき",
  "ひるごはん",
  "ひるま",
  "ひろば",
  "ふうとう",
  "ふくろ",
  "ぶっか",
  "ふとん",
  "ふねで",
  "ふべんな",
  "ぶんか",
  "ぶんがく",
  "ぶんぽう",
  "へいじつ",
  "へたな",
  "べつべつに",
  "べんごし",
  "べんとう",
  "べんりな",
  "ほうげん",
  "ほうだい",
  "ぼうねんかい",
  "ほうほう",
  "ほうりつ",
  "ほかに",
  "ほけんしょう",
  "ほしい",
  "ほんしゃ",
  "ほんとう",
  "ほんもの",
  "ほんや",
  "まいあさ",
  "まいしゅう",
  "まいつき",
  "まいとし",
  "まいにち",
  "まいばん",
  "まえる",
  "まがる",
  "まける",
  "ませんか",
  "まだまだです",
  "まっすぐ",
  "まつり",
  "までに",
  "まれる",
  "まわす",
  "まんが",
  "みがく",
  "みぎがわ",
  "みじかい",
  "みどり",
  "みなさん",
  "みやげ",
  "みらい",
  "みんな",
  "みんなで",
  "むかえる",
  "むかし",
  "むずかしい",
  "むだな",
  "むりな",
  "むりょう",
  "めいし",
  "もういちど",
  "もういっぱい",
  "もうすぐ",
  "もくてき",
  "もしもし",
  "もちろん",
  "もっていく",
  "もってくる",
  "もっと",
  "もみじ",
  "もらう",
  "もんだい",
  "やかん",
  "やきゅう",
  "やくにたつ",
  "やこう",
  "やさしい",
  "やじるし",
  "やちん",
  "やっと",
  "やはり",
  "やめる",
  "ゆうがた",
  "ゆうびんきょく",
  "ゆうめいな",
  "ゆうりょう",
  "ゆっくり",
  "ゆびわ",
  "ようじ",
  "ようしょく",
  "ようす",
  "ようちえん",
  "よかったら",
  "よてい",
  "よなか",
  "よほう",
  "らいねん",
  "らかい",
  "らしい",
  "らせる",
  "りゆう",
  "りゅうがくせい",
  "りょう",
  "りょうしん",
  "りょうほう",
  "りょうり",
  "りょかん",
  "りょこう",
  "りんご",
  "るだけ",
  "れきし",
  "れんきゅう",
  "ろうか",
  "ろんぶん",
  "わかい",
  "わかりました",
  "わかります",
  "わしょく",
  "わすれもの",
  "わすれる",
  "わたし",
  "わたり",
  "わりびき",
  "わるい",
  "をください",
  "をつけて",
  "をとる",
];

const katakanaWords = [
  "アイディア",
  "アニメ",
  "アルバイト",
  "イラスト",
  "インスタント",
  "インフルエンザ",
  "エアコン",
  "エンジン",
  "ガイドブック",
  "ガソリン",
  "カタログ",
  "カット",
  "カメラ",
  "カラオケ",
  "キャンセル",
  "キャンプ",
  "クラシック",
  "クラス",
  "グラス",
  "クリスマス",
  "コンテスト",
  "コンビニ",
  "サイズ",
  "サイン",
  "サラダ",
  "サンダル",
  "ジャズ",
  "ジョギング",
  "スイッチ",
  "ストレス",
  "ソフト",
  "ダイエット",
  "タオル",
  "ダンス",
  "チェック",
  "チケット",
  "チャレンジ",
  "チャンス",
  "テキスト",
  "デザイン",
  "テスト",
  "テレビ",
  "ドラマ",
  "バイク",
  "パソコン",
  "パンダ",
  "パンフレット",
  "ピアノ",
  "ビタミン",
  "ビデオ",
  "ファイル",
  "プリント",
  "プレゼント",
  "フロント",
  "ベッド",
  "ペット",
  "ペットボトル",
  "ポケット",
  "ポスト",
  "ボタン",
  "ポップス",
  "ホテル",
  "ボランティア",
  "マンション",
  "ミルク",
  "ラジオ",
  "ラッシュ",
  "リサイクル",
  "リュック",
  "レストラン",
  "ロック",
  "ロボット",
];

export const words = { hiragana: hiraganaWords, katakana: katakanaWords };
