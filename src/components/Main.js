import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import zentai from '../images/zentai.jpg'
import hall from '../images/access-taitohall.jpeg'
import kiito_senzai from '../images/kiito_senzai_edit.jpg'
import ol01 from '../images/ol01.png'
import chirashi from '../images/chirashi.png'
import { useQueryParam, StringParam } from 'use-query-params'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faYoutube,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const Main = props => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )
  const [modalParam, _] = useQueryParam('modal', StringParam)
  console.log(modalParam)

  useEffect(() => {
    if (modalParam) {
      props.onOpenArticle(modalParam)
    }
  }, [modalParam])

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="nova"
        className={`${props.article === 'nova' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2>
          CancaoNova
          <a
            href="https://twitter.com/cancaonovachor"
            style={{ marginRight: '13px', marginLeft: '25px' }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://ja-jp.facebook.com/cancaonova.chorus/"
            style={{ marginRight: '13px' }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCyySqK-CQoeet4zudxY7dWQ"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </h2>
        <span className="image-main main">
          <img src={zentai} alt="" />
        </span>
        <p>
          2016年7月創団。団名はポルトガル語で“新しい歌”。あっと驚くような合唱活動を志す合唱集団。出身母体/年齢/性別/居住地にとらわれない、新しいサウンド・合唱スタイルを目指して活動中。以下のような新しい取り組みを実施。
          <br />
          <br />
          <b>①活動本拠地の撤廃</b>
          <br />
          関東/関西/東海支部の3支部で活動。全国展開を計画中。遠隔コミュニケーションのための配信システムを構築。
          <br />
          <b>②合唱音楽の拡張</b>
          <br />
          混声・男声・女声の枠組みにとらわれない選曲。指導者を置かない全員参加型のアンサンブル
          <br />
          <b>③コロナ禍での持続的な活動</b>
          <br />
          オンライン作品制作、楽曲制作、グッズ制作、システム開発などの複数のチームを立ち上げ。団員の個性に合わせたティール的組織運営を実施。
          <br />
          <br />
          主な出演ステージは東京国際合唱コンクール、宝塚国際室内合唱コンクール、声楽アンサンブルコンテスト、全日本合唱コンクール。（2021年度）
        </p>
        <h3>＜主な受賞歴＞</h3>
        <p>
          ・第72回全日本合唱コンクール同声合唱の部(銀賞)
          <br />
          ・第1,2回東京国際合唱コンクール同声合唱部門(金賞)
          <br />
          ・第72,73,74回関西合唱コンクール同声合唱の部(金賞)
          <br />
          ・第12回声楽アンサンブルコンテスト全国大会2019(金賞)
          <br />
        </p>
        {close}
      </article>
      <article
        id="ol"
        className={`${props.article === 'ol' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2>
          Ohta Laboratory
          <a
            href="https://twitter.com/speranzaoriente"
            style={{ marginRight: '13px', marginLeft: '25px' }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCuHvZyclSnqWB7AGmXGZVdA"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </h2>
        <div class="youtube">
          <span className="image-main main">
            <img src={ol01} alt="" />
          </span>
        </div>
        <p>
          アンサンブルを極めんと2019年に結成された混声アンサンブル団体。
          <br />
          男声アンサンブル団体のSperanza
          Orienteのメンバーが、「混声のアンサンブルもやりたい！」というわがままを発端に、JCAユースクワイア経験者を中心に声をかけて結成。現在は13人が所属している。
          <br />
          メンバー一人一人が積極的・能動的に取り組むことで、より有機的な表現や精緻な和声を実現しようと日々練習に励んでいる。演奏のクオリティを上げるだけでなく、小規模アンサンブル団体として取り組む音楽の範囲を広げる挑戦も意識的に行っている。
        </p>
        <h3>＜主な受賞歴＞</h3>
        <p>
          春こん。2021《金賞》（Ensemble Espoir名義）。
          <br />
          第14回声楽アンサンブルコンテスト全国大会一般部門《金賞》
          <br />
          第36回宝塚国際室内合唱コンクール。《第3位》
          <br />
          <br />
        </p>
        {close}
      </article>
      <article
        id="concept"
        className={`${props.article === 'concept' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">CONCEPT</h2>
        <div class="youtube">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VFreqcoW4Qk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          <a
            className="use-border"
            href="javascript:;"
            onClick={async () => {
              await props.onCloseArticle()
              props.onOpenArticle('nova')
            }}
          >
            CancaoNova
          </a>{' '}
          ×{' '}
          <a
            className="use-border"
            href="javascript:;"
            onClick={async () => {
              await props.onCloseArticle()
              props.onOpenArticle('ol')
            }}
          >
            OhtaLaboraotry
          </a>{' '}
          によるジョイントコンサート
        </p>
        <p>
          既存の「合唱」「アンサンブル」「団体」という概念・認識に挑戦する集団同士が出会い、新たな音づくりに取り組もう、という思いのもとで始まったジョイントコンサート企画です。
          互いに刺激を受け、新たなインスピレーションを得たり、これまでにない素敵な演奏が生まれたりするのではないかと考えています。決してふるいものへのリスペクトの念を忘れずに、新たな領域への挑戦を行うという思いを込めて、今回は「フランスの合唱音楽」をひとつのテーマに添えてお届けいたします。
        </p>
        <div style={{ height: 20 }} />
        <h2 className="major">代表者意気込み</h2>
        <h3>下薗（CancaoNova）</h3>
        <p>本演奏会に興味を持ってくださった皆様、誠にありがとうございます。</p>
        <p>
          今回のジョイントコンサートの話が持ち上がったのは去年の７月、
          日本のコロナ感染者数が一度目のピークを迎える少し前、withコロナでの合唱本番をぼんやりと考えている頃でした。
          コロナによって丸１年オンラインでの活動を余儀なくされ、
          団員も減少し、複数のレパートリーを演奏するのが難しくなっていた苦しい状況の中
          Ohta Laboratory 満田さんと何か本番を企画しませんかと話し始めました。
          少し後ろ向きな理由から始まったように思えるこのジョイントコンサートですが、相談当初からすでに１つのワクワクしたものが見えていたのです。それは「団員１人１人が音楽を発露し合えるジョイントコンサート」というものです。
          一人一人がしっかりと歌っていくOhta
          Laboratoryのメンバーと、一人一人が音楽づくりだけでなく組織づくりに積極的に参加しているCancaoNovaのメンバーが、団という入れ物を超えて有機的に刺激し合う、そんな楽しいジョイントコンサートを想像していました。
        </p>
        <p>
          こんなコロナ禍ですから、合同練習も十分にはできないでしょうし、単独練習もなかなかままならないでしょう。本当は飲み会でも開いて親睦を深めてから演奏会に臨みたいところですが、それも叶わないでしょう。
          ですが、コロナ禍で培った、オンラインでの情報共有や配信などを駆使して、この２団体だからできる、刺激し合った生のアンサンブルをお届けできればと思っています。
        </p>
        <p>
          演奏会本番を通して、両団体メンバー、お客さんとたくさんの音楽コミュニケーションを取れることを楽しみにスコアリーディング、自主練習に励みたいと思いますので、多くの方にご覧いただけたら嬉しく思います。
        </p>
        <div style={{ height: 20 }} />
        <h3>満田（Ohta Laboratory）</h3>
        <p>Ohta Laboratoryという団名ですが、代表は満田と申します。</p>
        <p>
          我々Ohta
          Laboratoryは、音楽活動への思いはあるものの、人数や経験の都合上、なかなか単独での演奏会には踏み出しきれないという実情がありました。また、コロナ禍の影響やメンバーの状況により、練習の機会も制限を受けざるを得ない事情もありました。
          そんな中、かねてから懇意にしていた下薗さんと演奏会についてお話をする機会があり、当演奏会のコンセプトにもあるような内容でジョイントをしてみようというありがたいお話をいただきました。
        </p>
        <p>
          Ohta
          Laboratoryは、上記の通り団体としての経験が浅く、まだまだ熱意が先行しており、実際の演奏力としては揺らぎの多い団体です。しかし、そうであるからこそ、一歩前へ進むような演奏ができた、と実感できた時には、大きな感動が伴います。その感覚を、聴いてくださる皆様とも共有できたらいいな、と思っています。
        </p>
        <p>
          そして、CancaoNovaの奏でる音と、私たちの奏でる音がぶつかり合って、よりおもしろい音楽ができたら、この演奏会はいいものになると思います。皆様と、その空間・時間を共有できることを心から楽しみにしています。
        </p>
        {close}
      </article>

      <article
        id="explanation"
        className={`${props.article === 'explanation' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Stage</h2>

        <h4>
          <a
            className="use-border"
            href="javascript:;"
            onClick={async () => {
              await props.onCloseArticle()
              props.onOpenArticle('stage')
            }}
          >
            曲説はこちら
          </a>
        </h4>

        <h3>1st Stage: レパートリー交歓 </h3>
        <p>
          ２団体のレパートリーを演奏します。２団体らしい演奏をお楽しみください。
        </p>
        <p>
          <b>演奏曲：</b>
          <br></br>・相澤直人 - アイスクリームのうた
          <br></br>・武満徹 - 第２ヴォカリーズ
          <br></br>・Ligeti György - The Alphabet
          <br></br>・高嶋みどり - 露営のともしび
          <br></br>・高嶋みどり - 白鳥
          <br></br>・Lin, Ming-Chieh - Ave Maria
          <br></br>・Bob Chilcott - Thou, my love, art fair
        </p>
        <br></br>
        <h3>2nd Stage: Ohta Laboratory単独</h3>
        <p>
          Ohta
          Laboratoryによるフランス楽曲演奏です。混声アンサンブルによるフランス音楽の味わい深い響きをお楽しみください。
        </p>
        <p>
          <b>演奏曲：</b>
          <br></br>・Francis Poulenc - O magnum mysterium
          <br></br>・Francis Poulenc - Salve Regina
          <br></br>・Pierre Villette - O magnum mysterium
          <br></br>・Jacques Arcadelt - Il bianco e dolce cigno
        </p>
        <br></br>
        <h3>3rd Stage: CancaoNova単独</h3>
        <p>
          CancaoNovaによるフランス楽曲演奏です。プーランクの神秘的なサウンドとユーモアをお楽しみください。
        </p>
        <p>
          <b>演奏曲：</b>
          <br></br>・Francis Poulenc - Quatre petites prières de saint François
          d'Assise
          <br></br>・Francis Poulenc - Chanson à boire
        </p>
        <br></br>
        <h3>4th Stage: 合同演奏</h3>
        <p>
          ２団体によるフランス楽曲合同演奏です。フランドル楽曲から近現代までフランス音楽の旅をお届けします。
        </p>
        <p>
          <b>演奏曲：</b>
          <br></br>・Adrian Willaert - Vecchie letrose
          <br></br>・Josquin des Prez - Ave Maria
          <br></br>・Claude Debussy - Yver, vous n'estes qu'un Villain
          <br></br>・Olivier Messiaen - O Sacrum Convivium!
          <br></br>・三善晃 - 地球へのピクニック
        </p>
        {close}
      </article>

      {/* ここから曲説 */}
      {/* ここから曲説 */}
      {/* ここから曲説 */}

      <article
        id="stage"
        className={`${props.article === 'stage' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">曲説</h2>

        <h4>
          <a
            className="use-border"
            href="javascript:;"
            onClick={async () => {
              await props.onCloseArticle()
              props.onOpenArticle('explanation')
            }}
          >
            ステージ情報はこちら
          </a>
        </h4>

        <h2>1st Stage: レパートリー交歓</h2>

        <h3>アイスクリームの歌 </h3>
        <p>
          オープニングを飾るのは相澤 直人編曲
          混声合唱アルバム「思い出のアルバム」より『アイスクリームのうた』。NHKみんなのうたでも放映された名曲の合唱編曲。ひんやりとしたアイスクリームの甘さ、旨さを軽快なマーチに乗せて表現している。
        </p>

        <h3>第２ヴォカリーズ </h3>
        <p>
          武満徹の未完の作品「風の馬」の1曲。遊牧民族が季節風によって、次の移動すべき土地を定める占い、「風の馬」の様子を表しており、シャーマニズムを感じさせる5度堆積のハーモニーが風のように吹き込んでくる。中間部ではAbi
          yoyoと子孫の繁栄を祈った子守唄も聞こえてくる。
        </p>

        <h3>The Alphabet </h3>
        <p>
          ハンガリー系オーストラリア人作曲家リゲティのNonsense
          Madrigalsからの1曲。ナンセンス文学のように一聴すると無意味なアルファベットの羅列による奇妙な曲に思えるが、”G”odや”J”esusに対する悲痛な祈り、世界に対して詰問する”Q?”や”W”hy、それらを彩るトーンクラスターは曲にある種のメッセージ性を与えている。
        </p>

        <h3>白鳥 </h3>
        <p>
          高嶋 みどり作曲
          アポリネールの詩による四つの無伴奏混声合唱曲「白鳥」より2曲。『露営のともしび』の舞台は第一次世界大戦。戦火の中、恋人へ想いを馳せる主人公の様子を描いている。冒頭の幻想的なソプラノの旋律に導かれ、深く静かな夜の中で燃え上がる葛藤と後悔が空間を満たす。『白鳥』は、夕暮れ時に湖畔の白鳥を眺めながら見つめ合った、清澄な恋の思い出を描いた曲。瑞々しい恋模様、そして爽やかに吹く風がヴォカリーズやハミングによって表現され、より立体的な音楽へと仕上がっている。
        </p>

        <h3>露営のともしび・白鳥 </h3>
        <p>
          高嶋 みどり作曲
          アポリネールの詩による四つの無伴奏混声合唱曲「白鳥」より2曲。『露営のともしび』の舞台は第一次世界大戦。戦火の中、恋人へ想いを馳せる主人公の様子を描いている。冒頭の幻想的なソプラノの旋律に導かれ、深く静かな夜の中で燃え上がる葛藤と後悔が空間を満たす。『白鳥』は、夕暮れ時に湖畔の白鳥を眺めながら見つめ合った、清澄な恋の思い出を描いた曲。瑞々しい恋模様、そして爽やかに吹く風がヴォカリーズやハミングによって表現され、より立体的な音楽へと仕上がっている。
        </p>

        <h3>Ave Maria </h3>
        <p>
          台湾の作曲家Lin
          Ming-Chiehによる現代宗教曲作品。ビート感に溢れ、テンションノートを多く含んだ輝かしいコード進行は、テキストのニュアンスをより現代的な祈りの喜びや躍動感へと昇華しているようにも思われる。
        </p>

        <h3>Thou, my love, art fair </h3>
        <p>
          イギリスのBob ChicottによりKings
          Singersのために作曲された作品。「私の愛する貴方は美しい」と深い愛のテキストに、温かみのあるハーモニーが展開される。
        </p>

        <br></br>
        <h2>2nd Stage: Ohta Laboratory単独</h2>
        <h3>Il bianco e dolce cigno(Jacques Arcadelt) </h3>
        <p>
          ルネサンス期の作曲家アルカデルトによるマドリガーレ作品の 1
          つ。寂しく死んで行く白鳥と、喜びの中で死んでいく人間の姿を対比的に捉えた詩が、前半はホモフォニックに、気持ちの高まりとともにポリフォニックに歌い上げられる。
        </p>
        <h3>O Magnum Mysterium(Francis Poulenc) </h3>
        <p>
          イエス・キリスト誕生の秘跡を描いた、クリスマスの聖歌。厳かな雰囲気で曲が進行する中、ソプラノの綺麗で繊細な旋律が「神秘さ」を際立たせる。
        </p>
        <h3>Salve Regina(Francis Poulenc) </h3>
        <p>
          修道院などで行われる聖務日課の中の、就寝前の祈りの結びに歌われる曲のうちの
          1 つ。多くの作曲家も本歌を題材に作曲を行っているが、プーランクの Salve
          Regina
          は、半音階での下降進行や空虚5度といった技法を用いて、切なく、救いを求めるような切実な祈りが醸し出されている。
        </p>
        <h3>O Magnum Mysterium(Pierre Villette) </h3>
        <p>
          フランス近現代の作曲家である Pierre Villette による O magnum mysterium
          。荘厳な和声進行の中に神への祈りが込められた、まさに神秘的な逸曲。
        </p>
        <br></br>
        <h2>3rd Stage: CancaoNova単独</h2>
        <h3>Quatre petites prières de saint François d'Assise </h3>
        <p>
          中世の修道士
          聖フランチェスコに関する４つの祈りのテキストにプーランクが作曲、シャンフリールの修道士たちによって初演された。中世聖歌の古風な要素がプーランクらしいハーモニーと融合した作品。
        </p>
        <b>1. Salut, Dame Sainte</b>
        <p>
          アルカイックな空音程から楽曲が開始し、旋律の美しいモードチェンジや、エンハーモニックな転調など現代的な書法によって楽曲が展開、最後のカデンツでは空音程へと帰着する。プーランクの聖と俗の音楽の融合をたっぷりと楽しめる1曲。
        </p>
        <b>2. Tout puissant</b>
        <p>
          ホモフォニックな書法で神への賛美を高らかに歌い上げる作品。クロマティックに平行和声が展開され、短３和音から長３和音の神秘的なAmen終止へ結ばれる。
        </p>
        <b>3. Seigneur, je vous en prie</b>
        <p>
          シンプルな和声で神の無限の愛について表現される作品。前半のppによる敬虔な表現から一転、後半では神への思いが溢れ出して情熱的に歌い上げる。
        </p>
        <b>4. Ô mes très chers frères</b>
        <p>
          修道士が兄弟を導いて祈るようなソロから始まる。1曲目と同様の楽曲構成が終盤に現れ、組曲としての統合性を与えている。
        </p>
        <h3>Chanson a boire </h3>
        <p>
          プーランク初めての男声合唱作品。酔っ払いの移り変わる気分がニ短調、ニ長調入り混じった複調的に表現される。酔っ払った彼らは最後まで気持ちよく演奏することができるのか。。。
        </p>

        <br></br>
        <h2>4th Stage: 合同演奏</h2>
        <h3>Vecchie letrose</h3>
        <p>
          盛期ルネサンス時代のフランドル出身の作曲家アドリアン・ヴィラールトによるフラットラ。軽快で大衆的（そしてやや下品）な音楽は、フランスのシャンソンにも影響を与えた。対位的複雑さを避け、最上声部が主旋律として扱われており、現代に繋がる音楽のルーツが垣間見える。
        </p>
        <h3>Ave Maria</h3>
        <p>
          盛期ルネサンス時代のフランス作曲家ジョスカン・デ・プレによって作曲された有名なモテット。旋律が各声部で模倣される通模倣様式により展開しながら、中間部ではデュエット的な構成も見られる。最後の行では全声部が揃って静かな祈りを捧げている。
        </p>
        <h3>Yver, vous n'estes qu'un vilain</h3>
        <p>
          冬に対する恨み、夏に対する愛情がユーモラスに表現されたテキストを用いた、印象派の作曲家ドビュッシーによる作品。冬のシーンはホ短調で噛み締めるようなスタッカートで表現され、夏のシーンでは平行長調で牧歌的に表現される。
        </p>
        <h3>O sacrum convivium!</h3>
        <p>
          フランスの現代作曲家メシアンにより作曲された宗教作品。共感覚であったメシアンらしい色彩豊かなハーモニーとノンハーモニックに感じられるソプラノのメロディが、現実離れした音世界を作り出している。
        </p>
        <h3>地球へのピクニック</h3>
        <p>
          組曲「地球へのバラード」の終曲。近代フランス音楽の色合いが感じられる三善晃の作品の中でも、谷川俊太郎の詩に作曲したこの曲は、色彩豊かなハーモニー展開、鋭いリズム、地球の壮大さを感じさせるような大きなスケールで演奏される。締めくくりとしてふさわしい
        </p>

        <p>
          ２団体によるフランス楽曲合同演奏です。フランドル楽曲から近現代までフランス音楽の旅をお届けします。
        </p>

        {close}
      </article>

      {/* <article
          id="stage"
          className={`${props.article === 'stage' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Stage</h2>
          <span className="image-main main">
            <img src={chirashi} alt="" />
          </span>
          <h3>ステージ情報</h3>
          <p>Coming Soon!</p>

          {close}
        </article> */}

      <article
        id="access"
        className={`${props.article === 'access' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Access</h2>
        <span className="image-main main">
          <img src={hall} alt="" />
        </span>
        <h3>
          台東区生涯学習文化センター <br />
          ミレニアムホール
        </h3>
        <p>
          〒111-8621
          <br />
          東京都台東区西浅草3丁目25番16号
          <br />
          TEL：03-5246-5827
          <br />
        </p>
        <p>
          JR山手線・京浜東北線「鶯谷駅」南口 徒歩15分 <br />
          地下鉄日比谷線「入谷駅」1番出口 徒歩8分
          <br />
          つくばエクスプレス線「浅草駅」A2出口 徒歩8分
          <br />
        </p>
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
