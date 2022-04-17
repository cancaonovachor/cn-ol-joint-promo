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
        id="stage"
        className={`${props.article === 'stage' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Stage</h2>

        <h3>1st Stage: レパートリー交歓 </h3>
        <p>
          ２団体のレパートリーを演奏します。２団体らしい演奏をお楽しみください。
        </p>
        <p>
          演奏予定曲：
          <br></br>・Bob Chilcott - Thou, my love, art fair
          <br></br>・高嶋みどり - 白鳥　他
          <br></br>etc...
        </p>
        <br></br>
        <h3>2nd Stage: Ohta Laboratory単独</h3>
        <p>
          Ohta
          Laboratoryによるフランス楽曲演奏です。混声アンサンブルによるフランス音楽の味わい深い響きをお楽しみください。
        </p>
        <p>
          演奏予定曲：
          <br></br>・Pierre Villette - O magnum mysterium
          <br></br>etc...
        </p>
        <br></br>
        <h3>3rd Stage: CancaoNova単独</h3>
        <p>
          CancaoNovaによるフランス楽曲演奏です。プーランクの神秘的なサウンドとユーモアをお楽しみください。
        </p>
        <p>
          演奏予定曲：
          <br></br>・Francis Poulenc - Quatre petites prières de saint François
          d'Assise
          <br></br>etc...
        </p>
        <br></br>
        <h3>4th Stage: 合同演奏</h3>
        <p>
          ２団体によるフランス楽曲合同演奏です。フランドル楽曲から近現代までフランス音楽の旅をお届けします。
        </p>
        <p>
          演奏予定曲：
          <br></br>・Josquin des prez - Ave Maria
          <br></br>・Olivier Messiaen - O sacrum convivium
          <br></br>etc...
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
